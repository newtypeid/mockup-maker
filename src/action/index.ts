export const ADD_COUNT = 'ADD_COUNT' as const;
export const SUB_COUNT = 'SUB_COUNT' as const;

interface Iprops {
  id: string;
}

export const addCount = ({ id }: Iprops) => {
  return { type: ADD_COUNT, id };
};

export const subCount = ({ id }: Iprops) => {
  return { type: SUB_COUNT, id };
};
