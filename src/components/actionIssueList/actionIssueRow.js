import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class ActionIssueRow extends React.Component {
  render() {
    const { item } = this.props;

    return (
        <li>{ item.getName() }</li>
    );
  }
}
