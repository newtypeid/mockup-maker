import { ADD_COUNT, SUB_COUNT } from '../action';

type Action = typeof ADD_COUNT | typeof SUB_COUNT;

interface IAction {
  type: Action;
  id: string;
}

const initialState = {
  count: 0,
};

export default function careerPresetData(state = initialState, action: IAction) {
  switch (action.type) {
    case 'ADD_COUNT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'SUB_COUNT': {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
}
