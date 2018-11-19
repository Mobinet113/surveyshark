import React from 'react';
import PropTypes from 'prop-types';

class Answers extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        This is Answers
      </div>
    )
  }
}



export default Answers;