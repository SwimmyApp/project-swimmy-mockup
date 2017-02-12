import React from 'react';
import {observer} from 'mobx-react';
import ActionRow from './actionRow';

import DevTool from 'mobx-react-devtools';

@observer
export default class ActionsList extends React.Component {
  render() {
    const { actions } = this.props;

    return (
        <ul>
            { actions.map(function(action) {
                return <ActionRow key={ action.action_id } action={ action } />;
            }) }
        </ul>
    );
  }
}
