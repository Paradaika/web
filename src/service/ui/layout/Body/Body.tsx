import Count from 'service/ui/components/Count';
import TodoListComponent from 'service/ui/components/TodoListComponent';
import Counters from '../../components/Counters';

import { BodyStyles } from './Body.styles';

export const Body = () => {
  return (
    <BodyStyles.StyledBody>
      <Counters />
      <BodyStyles.StyledCountContainer>
        <Count />
      </BodyStyles.StyledCountContainer>
      <TodoListComponent />
    </BodyStyles.StyledBody>
  );
};
