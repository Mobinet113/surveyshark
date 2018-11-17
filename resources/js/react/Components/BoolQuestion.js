import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Checkbox, Header } from 'semantic-ui-react';

const BoolQuestion = (props) => {

  const handleChange = (evt, data) => {
    props.onChange(data);
  };

  return (
    <Segment>
      <Form.Field>
        <Header as="h2">
          {props.title}
          <Header.Subheader>{props.subTitle}</Header.Subheader>
        </Header>

        <Checkbox toggle name={props.name} onChange={handleChange} />
      </Form.Field>
    </Segment>
  );
};

BoolQuestion.defaultProps = {
  loading: false,
  title: null,
  subTitle: null,
  name: null,
  onChange: () => {
  }
};

BoolQuestion.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default BoolQuestion