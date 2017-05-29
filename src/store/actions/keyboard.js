import { input } from '../../utils/normalize';
import { LOAD_KEYBOARD } from '../types';

export const loadKeyboard = payload => ({
  type: LOAD_KEYBOARD,
  payload: input(payload)
});
