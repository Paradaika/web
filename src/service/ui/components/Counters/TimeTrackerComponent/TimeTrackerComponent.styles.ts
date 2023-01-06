import styled from 'styled-components';

const TimeTrackerContainer = styled('div')`
  align-items: center;
  display: flex;
  gap: 7px;
  p {
    margin: 0;
  }
`;

const TimeTrackerLabelContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    margin: 0;
  }
`;

export const TimeTrackerStyles = { TimeTrackerContainer, TimeTrackerLabelContainer };
