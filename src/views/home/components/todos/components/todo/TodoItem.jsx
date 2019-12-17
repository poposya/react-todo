import React from 'react';
import { Checkbox, List } from 'semantic-ui-react';

export default class TodoItem extends React.PureComponent {
  render() {
    const { todoItem } = this.props;

    return (
      <List>
        <List.Item>
          <p>{todoItem.label}</p>
          <Checkbox></Checkbox>
        </List.Item>
      </List>
    );
  }
}
