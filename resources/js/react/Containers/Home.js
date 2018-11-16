import React from 'react';
import {Form, Container} from 'semantic-ui-react';
import BasicQuestion from '../Components/BasicQuestion';
import CheckboxQuestion from "../Components/CheckboxQuestion";

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      answers: []
    }
  }

  handleBasicInput = (evt) => {
    this.setState({answers: {...this.state.answers, [evt.target.name]: evt.target.value}});
  };

  handleCheckboxInput = (evt) => {
    console.log(evt);
  };

  render() {
    return (
      <Container>
        <Form>
          <BasicQuestion title="Question one"
                         subTitle="This is a short line about question one"
                         name="questionOne"
                         onChange={this.handleBasicInput}
                         placeholder="Question One"/>

          <BasicQuestion title="Question two"
                         subTitle="This is a short line about question two"
                         name="questionTwo"
                         onChange={this.handleBasicInput}
                         placeholder="Question Two"/>

          <CheckboxQuestion
            title="Question Three"
            name="questionThree"
            subTitle="This is a short line about question three"
            onChange={this.handleCheckboxInput}
            answers={[
              {
                label: "Answer One",
                name: "answerOne"
              },
              {
                label: "Answer Two",
                name: "answerTwo"
              }
            ]}
          />

        </Form>
      </Container>
    )
  }
}


export default Home;