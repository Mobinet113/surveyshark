import React from 'react';
import {Form, Segment} from 'semantic-ui-react';
import BasicQuestion from '../Components/BasicQuestion';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      answers: [

      ]
    }
  }

  render() {
    return (
      <Segment>
        <Form>
          <BasicQuestion title="Question one" subTitle="This is a short line about question one" placeholder="Question 1"/>
        </Form>
      </Segment>
    )
  }
}


export default Home;