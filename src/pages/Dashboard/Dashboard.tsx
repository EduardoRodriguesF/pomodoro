import PomodoroButton from 'components/PomodoroButton';
import PomodoroTimer from 'components/PomodoroTimer';
import React from 'react';

const Dashboard: React.FC = () => (
  <>
    <h1>Pomodoro</h1>
    <PomodoroTimer />
    <PomodoroButton />
  </>
);

export default Dashboard;
