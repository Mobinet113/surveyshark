import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Header, Icon, Button} from 'semantic-ui-react';

const UploadFailed = (props) => {
  return (

    <Modal open={props.open} basic size='small'>
      <Header icon='exclamation circle' content='Error Uploading Answers'/>
      <Modal.Content>
        <p>
          There was a problem uploading this batch of answers which was probably caused by an internet connectivity
          issue, but don't worry!
        </p>
        <p>
          We will try and upload these answers as soon as the internet comes back again automatically.
        </p>
        <p>
          In the meantime, you can continue surveying.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted>
          <Icon name='checkmark'/> Okay
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

UploadFailed.defaultProps = {
  open: false
};

UploadFailed.propTypes = {
  open: PropTypes.bool
};

export default UploadFailed