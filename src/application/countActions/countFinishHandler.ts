interface IProps {
  count: number;
  addCount: () => void;
}

export const countFinishHandler = ({ count, addCount }: IProps) => {
  if (count === 0) addCount();
};
