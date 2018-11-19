import React from 'react';
import { Menu } from 'semantic-ui-react';
import QuestionsPending from '../QuestionsPending';


const Header = (props) => {
  return (
    <Menu>

      <Menu.Item header>SurveyShark</Menu.Item>
      <QuestionsPending/>

    </Menu>
  );
};

export default Header