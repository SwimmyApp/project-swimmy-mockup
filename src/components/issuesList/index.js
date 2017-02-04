import React from 'react';
import {observer} from 'mobx-react';
import IssueRow from './issueRow';

import DevTool from 'mobx-react-devtools';

@observer
export default class IssuesList extends React.Component {
  render() {
    const { issues } = this.props;

    return (
        <ul>
            { issues.map(function(issue) {
                return <IssueRow key={ issue.issue_id } issue={ issue } />;
            }) }
        </ul>
    );
  }
}
