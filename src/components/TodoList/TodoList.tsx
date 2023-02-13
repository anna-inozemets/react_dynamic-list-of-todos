import React from 'react';

import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  onSlelectedTodoId: (selectedId:number) => void,
  selectedTodoId: number,
};

export const TodoList: React.FC<Props> = ({
  todos,
  onSlelectedTodoId,
  selectedTodoId,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <tr data-cy="todo" key={todo.id}>
          <td className="is-vcentered">{todo.id}</td>
          {todo.completed
            ? (
              <td className="is-vcentered">
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              </td>
            )
            : (
              <td className="is-vcentered" />
            )}
          <td className="is-vcentered is-expanded">
            <p
              className={classNames(
                { 'has-text-danger': !todo.completed },
                { 'has-text-success': todo.completed },
              )}
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => onSlelectedTodoId(todo.id)}
            >
              <span className="icon">
                <i className={classNames(
                  'far',
                  { 'fa-eye': selectedTodoId !== todo.id },
                  { 'fa-eye-slash': selectedTodoId === todo.id },
                )}
                />
              </span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
