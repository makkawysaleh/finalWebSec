import { TEST_DISPATCH } from './types';

// Register User Function
export const registerUser = userData => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
