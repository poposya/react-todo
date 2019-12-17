import uuid from 'uuid';

export default class TodosEffect {
  static async requestTodos() {
    // Temporally dummy data without BE API
    return {
      todos: [
        {
          id: uuid(),
          title: 'Example TodoItem List',
          items: [
            {
              id: uuid(),
              label: 'Example TodoItem Item',
              checked: false,
            },
            {
              id: uuid(),
              label: 'Example TodoItem Item2',
              checked: false,
            },
            {
              id: uuid(),
              label: 'Example TodoItem Item3',
              checked: false,
            },
            {
              id: uuid(),
              label: 'Example TodoItem Item4',
              checked: false,
            },
          ],
        },
        {
          id: uuid(),
          title: 'Example TodoItem List2',
          items: [
            {
              id: uuid(),
              label: 'Example TodoItem Item',
              checked: false,
            },
            {
              id: uuid(),
              label: 'Example TodoItem Item2',
              checked: false,
            },
            {
              id: uuid(),
              label: 'Example TodoItem Item3',
              checked: false,
            },
            {
              id: uuid(),
              label: 'Example TodoItem Item4',
              checked: false,
            },
          ],
        },
      ],
    };
  }
}
