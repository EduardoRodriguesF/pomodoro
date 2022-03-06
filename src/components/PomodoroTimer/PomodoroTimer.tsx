import React from 'react';
import { usePomodoro } from 'hooks/usePomodoro';

const PomodoroTimer: React.FC = () => {
  const { count } = usePomodoro();

  return (
    <div>
      <span data-testid="minutes">00</span>
      <span>:</span>
      <span data-testid="seconds">00</span>
    </div>
  );
};

export default PomodoroTimer;
