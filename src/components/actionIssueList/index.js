import React from 'react';
import {observer} from 'mobx-react';
import ActionIssueRow from './actionIssueRow';

import DevTool from 'mobx-react-devtools';

@observer
export default class ActionIssueList extends React.Component {
  render() {
    const { items } = this.props;

    return (
        <ul>
            { items.map(function(item) {
                return <ActionIssueRow key={ item.getId() } item={ item } />;
            }) }
        </ul>
    );
  }
}
