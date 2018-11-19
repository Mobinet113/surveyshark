import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Segment, Header, Form} from 'semantic-ui-react';

class CheckboxQuestion extends React.Component {

  onToggle = (evt, data) => {
    this.props.onChange(data);
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
            <Checkbox label={answer.label} name={this.props.name} value={answer.name} onChange={this.onToggle}/>
          </Form.Field>

        ))}

      </Segment>
    );
  }
}

CheckboxQuestion.defaultProps = {
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

CheckboxQuestion.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  answers: PropTypes.array,
  onChange: PropTypes.func
};

export default CheckboxQuestion