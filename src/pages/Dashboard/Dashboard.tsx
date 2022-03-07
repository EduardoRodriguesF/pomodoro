import PomodoroButton from 'components/PomodoroButton';
import React from 'react';
import PomodoroTimer from 'components/PomodoroTimer';

import { Wrapper, ButtonsRow } from './Dashboard.style';

const Dashboard: React.FC = () => (
  <Wrapper>
    <h1>Pomodoro</h1>
    <PomodoroTimer />
    <ButtonsRow>
      <PomodoroButton />
    </ButtonsRow>
  </Wrapper>
);

export default Dashboard;
