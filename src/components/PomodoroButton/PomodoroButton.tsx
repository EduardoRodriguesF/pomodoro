import React, { useCallback } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { usePomodoro } from 'hooks/usePomodoro';

const PomodoroButton: React.FC = () => {
  const { startTimer, pauseTimer, isRunning } = usePomodoro();

  const handleClick = useCallback(() => {
    if (isRunning) pauseTimer();
    else startTimer();
  }, [isRunning, startTimer, pauseTimer]);

  return (
    <button type="button" onClick={handleClick}>
      {isRunning ? <FiPause data-testid="pause-icon" /> : <FiPlay data-testid="play-icon" />}
    </button>
  );
};

export default PomodoroButton;
