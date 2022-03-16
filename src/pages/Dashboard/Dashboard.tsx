import React from 'react';
import PomodoroButton from 'components/PomodoroButton';
import PomodoroTimer from 'components/PomodoroTimer';
import ModalSettings from 'components/ModalSettings';

import { Wrapper, ButtonsRow } from './Dashboard.style';

const Dashboard: React.FC = () => (
  <Wrapper>
    <h1>Pomodoro</h1>
    <PomodoroTimer />
    <ButtonsRow>
      <PomodoroButton />
    </ButtonsRow>
    <ModalSettings />
  </Wrapper>
);

export default Dashboard;
