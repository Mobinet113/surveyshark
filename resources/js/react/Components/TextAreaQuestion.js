import React from 'react';
import PropTypes from 'prop-types';
import {Form, Header, Segment} from 'semantic-ui-react';

const TextAreaQuestion = (props) => {

  const handleChange = (evt) => {
    props.onChange(evt);
  };

  return (
    <Segment>
      <Form.Field>
        <Header as="h2">
          {props.title}
          <Header.Subheader>{props.subTitle}</Header.Subheader>
        </Header>
        <textarea name={props.name} onChange={handleChange} placeholder={props.placeholder} />
      </Form.Field>
    </Segment>
  );
};

TextAreaQuestion.defaultProps = {
  loading: false,
  title: null,
  subTitle: null,
  placeholder: null,
  name: null,
  onChange: () => {
  }
};

TextAreaQuestion.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default TextAreaQuestion