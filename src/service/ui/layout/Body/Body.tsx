import Count from 'service/ui/components/Count';

import { BodyStyles } from './Body.styles';

export const Body = () => {
  return (
    <BodyStyles.StyledBody>
      <div className="counter">Counter</div>
      <BodyStyles.StyledCountContainer>
        <Count />
      </BodyStyles.StyledCountContainer>
      <div className="todoList">Todo List</div>
    </BodyStyles.StyledBody>
  );
};
