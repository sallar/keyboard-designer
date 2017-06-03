import { createAction } from 'redux-actions';
import { input } from '../../utils/normalize';
import { LOAD_KEYBOARD, MOVE_ROW, MOVE_KEY } from '../types';

export const loadKeyboard = createAction(LOAD_KEYBOARD, paylaod => input(paylaod));
export const moveRow = createAction(MOVE_ROW);
export const moveKey = createAction(MOVE_KEY);
