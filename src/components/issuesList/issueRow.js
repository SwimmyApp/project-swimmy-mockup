import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class IssueRow extends React.Component {
  render() {
    const { issue } = this.props;

    return (
        <li>{ issue.name }</li>
    );
  }
}
