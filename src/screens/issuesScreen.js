import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import AppWrapper from '../components/appWrapper'
import ActionIssueList from '../components/actionIssueList/index'

class IssuesScreen extends React.Component {
  render() {
    const {store} = this.props;
    const {router: {goTo}} = store;

    return (
        <AppWrapper title='Issues' backButton>
            <p>What issues affect you the most?</p>
            <ActionIssueList items={ store.issueStore.issues } />
            <p>Other issues</p>
            <button onClick={() => {goTo(views.actions)}}>Next</button>
        </AppWrapper>
    )
  }
}

export default observer(['store'], IssuesScreen);
