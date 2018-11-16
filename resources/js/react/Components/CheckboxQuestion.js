import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Segment, Header, Form} from 'semantic-ui-react';

const CheckboxQuestion = (props) => {

  const onToggle = (evt, data) => {
    props.onChange(data);
  };

  return (
    <Segment>

      <Header as="h2">
        {props.title}
        <Header.Subheader>{props.subTitle}</Header.Subheader>
      </Header>

      {props.answers.map((answer, index) => (

        <Form.Field key={index}>
          <Checkbox label={answer.label} name={props.name} value={answer.name} onChange={onToggle} />
        </Form.Field>

      ))}

    </Segment>
  );
};

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