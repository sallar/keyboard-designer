import { normalize, denormalize, schema } from 'normalizr';
import uuid from 'uuid/v4';

const key = new schema.Entity('keys', {}, { idAttribute: 'uuid' });
const row = new schema.Entity('rows', { keys: [key] }, { idAttribute: 'uuid' });
const board = new schema.Entity('boards', { rows: [row] }, { idAttribute: 'uuid' });
const keyboard = new schema.Entity('keyboards', { boards: [board] }, { idAttribute: 'uuid' });

export function input(data = {}) {
  data = {
    uuid: uuid(),
    ...data,
    boards: data.boards.map(
      board => ({
        uuid: uuid(),
        ...board,
        rows: board.rows.map(
          row => ({
            uuid: uuid(),
            ...row,
            keys: row.keys.map(
              key => ({
                uuid: uuid(),
                ...key
              })
            )
          })
        )
      })
    )
  };
  
  return normalize(data, keyboard);
}

export function output(state) {
  return denormalize(state.result, keyboard, state.entities);
}
