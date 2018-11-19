import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {submitAnswer, submitWaitingAnswers} from '../redux/modules/answer';
import {getQuestions} from "../redux/modules/questions";
import {Form, Container, Button, Loader, Segment} from 'semantic-ui-react';
import BasicQuestion from '../Components/BasicQuestion';
import CheckboxQuestion from "../Components/CheckboxQuestion";
import RadioQuestion from "../Components/RadioQuestion";
import BoolQuestion from '../Components/BoolQuestion';
import TextAreaQuestion from "../Components/TextAreaQuestion";
import SliderQuestion from "../Components/SliderQuestion";

import UploadFailed from "../Components/modals/UploadFailed";

class QuestionBasket extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: true,
      answers: [],
      uploadError: false
    };

  }

  componentDidMount() {
    this.props.getQuestions().then(() => {
      this.setState({loading: false});
    })
  }

  /**
   * Method to handle simple input questions
   * @param evt
   */
  handleBasicInput = (evt) => {
    this.setState({answers: {...this.state.answers, [evt.target.name]: evt.target.value}});
  };

  /**
   * Method to handle multi-checkbox questions
   * @param evt
   */
  handleCheckboxInput = (evt) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [evt.name]: {
          ...this.state.answers[evt.name],
          [evt.value]: evt.checked
        }
      }
    });
  };

  /**
   * Method to handle yes / no toggle questions
   * @param evt
   */
  handleBoolInput = (evt) => {
    this.setState({answers: {...this.state.answers, [evt.name]: evt.checked}});
  };

  handleSubmit = () => {
    this.setState({loading: true});

    this.props.submitAnswer(this.state.answers)
      .then(() => {
        this.setState({loading: false, answers: []});
      }).catch(() => {
        this.setState({loading: false, uploadError: true});
    });
  };

  renderQuestions = (question, key) => {

    switch (question.type) {
      case 'text':
        return (
          <BasicQuestion title={question.title}
                         subTitle={question.subTitle}
                         name={question.name}
                         key={key}
                         onChange={this.handleBasicInput}
                         placeholder={question.title}/>
        );

      case 'textArea':
        return (
          <TextAreaQuestion title={question.title}
                            subTitle={question.subTitle}
                            name={question.name}
                            key={key}
                            onChange={this.handleBasicInput}
                            placeholder={question.title}/>
        );

      case 'checkbox':
        return (
          <CheckboxQuestion
            title={question.title}
            subTitle={question.subTitle}
            name={question.name}
            key={key}
            onChange={this.handleCheckboxInput}
            answers={JSON.parse(question.answers)}
          />
        );

      case 'bool':
        return (
          <BoolQuestion title={question.title}
                        subTitle={question.subTitle}
                        name={question.name}
                        key={key}
                        onChange={this.handleBoolInput}
          />
        );

      case 'radio':
        return (
          <RadioQuestion
            title={question.title}
            subTitle={question.subTitle}
            name={question.name}
            key={key}
            onChange={this.handleBasicInput}
            answers={JSON.parse(question.answers)}
          />
        );

      case 'slider':
        return (
          <SliderQuestion
            title={question.title}
            subTitle={question.subTitle}
            name={question.name}
            key={key}
            onChange={this.handleBasicInput}
          />
        );
    }
  };

  render() {
    return (
      <Segment basic loading={this.state.loading}>
        <Form onSubmit={this.handleSubmit}>

          {this.props.questions.map((question, key) =>
            this.renderQuestions(question, key)
          )}

          <Button primary>Submit Answers</Button>

        </Form>

        <UploadFailed open={this.state.uploadError}/>

        <Button onClick={() => this.props.submitWaitingAnswers()}>Retry Submitting Answers</Button>
      </Segment>
    )
  }
}

const mapStateToProps = state => ({
  answers: state.answers,
  questions: state.questions.items
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    submitAnswer: submitAnswer,
    submitWaitingAnswers: submitWaitingAnswers,
    getQuestions: getQuestions
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBasket);