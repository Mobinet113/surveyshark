import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Header } from 'semantic-ui-react';

const BasicQuestion = (props) => {

  const handleChange = (evt) => {
    this.props.onChange(evt);
  };

  return (
    <Form.Field>
      <Header as="h2">
        {props.title}
        <Header.Subheader>{props.subTitle}</Header.Subheader>
      </Header>
      <input placeholder={props.title} onChange={handleChange} />
    </Form.Field>
  );
};

BasicQuestion.defaultProps = {
  loading: false,
  title: null,
  subTitle: null,
  placeholder: null,
  onChange: () => {}
};

BasicQuestion.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default BasicQuestion