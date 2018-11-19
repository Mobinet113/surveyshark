import React from 'react';
import PropTypes from 'prop-types';
import {Radio, Segment, Header, Form} from 'semantic-ui-react';


class RadioQuestion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: ""
    }
  }

  onToggle = (evt, data) => {
    this.setState({ selected: data.value });

    this.props.onChange({
      target: {
        name: data.name,
        value: data.value
      }
    });
  };

  render = () => {
    return (
      <Segment>
        <Header as="h2">
          {this.props.title}
          <Header.Subheader>{this.props.subTitle}</Header.Subheader>
        </Header>

        {this.props.answers.map((answer, index) => (

          <Form.Field key={index}>
            <Radio label={answer}
                   name={this.props.name}
                   checked={this.state.selected === answer}
                   value={answer}
                   onChange={this.onToggle}/>
          </Form.Field>

        ))}
      </Segment>
    );
  }
}

RadioQuestion.defaultProps = {
  loading: false,
  title: null,
  subTitle: null,
  name: null,
  onChange: () => { return true },
  answers: [
    {
      label: "",
      name: ""
    }
  ]
};

RadioQuestion.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  answers: PropTypes.array,
  onChange: PropTypes.func
};

export default RadioQuestion