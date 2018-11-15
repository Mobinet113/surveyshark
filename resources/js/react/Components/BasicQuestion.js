import React from 'react';
import PropTypes from 'prop-types';
import {Form, Header, Segment} from 'semantic-ui-react';

const BasicQuestion = (props) => {

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
        <input name={props.name} placeholder={props.title} onChange={handleChange}/>
      </Form.Field>
    </Segment>
  );
};

BasicQuestion.defaultProps = {
  loading: false,
  title: null,
  subTitle: null,
  placeholder: null,
  onChange: () => {
  }
};

BasicQuestion.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.required,
  onChange: PropTypes.func
};

export default BasicQuestion