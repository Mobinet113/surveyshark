import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Menu, Label, Icon } from 'semantic-ui-react';
import { submitWaitingAnswers } from '../redux/modules/answer';

class QuestionsPending extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  handleClick = () => {
    this.props.submitWaitingAnswers();
  };

  render() {
    if ( this.props.answers.length > 0 ) {
      return (
        <Menu.Item onClick={this.handleClick} position="right">
          <Icon name='upload'/> Submit Waiting Answers
          <Label color='red'>
            {this.props.answers.length}
          </Label>
        </Menu.Item>
      )
    } else {
      return <Menu.Item />
    }
  }
}

const mapStateToProps = state => ({
  answers: state.answers.waiting
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    submitWaitingAnswers: submitWaitingAnswers
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPending);