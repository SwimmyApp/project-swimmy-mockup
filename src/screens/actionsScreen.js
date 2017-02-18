import React from 'react';
import {observer} from 'mobx-react';
import views from '../config/views';
import AppWrapper from '../components/appWrapper'
import ActionIssueList from '../components/actionIssueList/index'

class ActionsScreen extends React.Component {
  render() {
    const {store} = this.props;
    const {router: {goTo}} = store;

    return (
        <AppWrapper title='Actions' backButton>
            <p>What do you want to do?</p>
            <ActionIssueList items={ store.actionStore.actions } />
            <p>Other actions</p>
            <button onClick={ () => {goTo(views.dashboard)} }>Next</button>
        </AppWrapper>
    )
  }
}

export default observer(['store'], ActionsScreen);
