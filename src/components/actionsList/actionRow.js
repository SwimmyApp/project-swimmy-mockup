import React from 'react';
import {observer} from 'mobx-react';

import DevTool from 'mobx-react-devtools';

@observer
export default class ActionRow extends React.Component {
  render() {
    const { action } = this.props;

    return (
        <li>{ action.name }</li>
    );
  }
}
