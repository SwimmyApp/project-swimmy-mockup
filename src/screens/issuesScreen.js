import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
// import styles from './styles/loginScreen.css';
import AppWrapper from '../components/appWrapper'

class IssuesScreen extends React.Component {
  render() {
    return (
      <AppWrapper title='Issues' backButton>
        <div>Some List</div>
      </AppWrapper>
    )
  }
}

export default IssuesScreen;
