import React from 'react';
import PropTypes from 'prop-types';
import {Form, Header, Segment, Menu} from 'semantic-ui-react';

class SliderQuestion extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 0
    }
  }

  handleChange = (evt, data) => {
    this.setState({ value: data.value });

    this.props.onChange({
      target: {
        name: this.props.name,
        value: data.value,
        questionId: this.props.questionId
      }
    })
  };

  renderRadios = () => {
    let radios = [];

    for ( let i = 1; i <= 10; i++ ) {
      radios.push(
        <Menu.Item key={i} active={this.state.value === i} onClick={this.handleChange} value={i}>
          {i}
        </Menu.Item>
      )
    }

    return radios;
  };

  render() {
    return (
      <Segment className="slider">
        <Form.Field>
          <Header as="h2">
            {this.props.title}
            <Header.Subheader>{this.props.subTitle}</Header.Subheader>
          </Header>

          <Menu fluid widths={10}>
            {this.renderRadios()}
          </Menu>

        </Form.Field>

      </Segment>
    )
  }
}

SliderQuestion.defaultProps = {
  loading: false,
  title: null,
  subTitle: null,
  placeholder: null,
  name: null,
  questionId: 0,
  onChange: () => {}
};

SliderQuestion.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  questionId: PropTypes.number,
  onChange: PropTypes.func
};

export default SliderQuestion;