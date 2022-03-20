import React, { useCallback } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { usePomodoro } from 'hooks/usePomodoro';

import { Button } from './PomodoroButton.style';

const PomodoroButton: React.FC = () => {
  const { startTimer, pauseTimer, isRunning } = usePomodoro();

  const handleClick = useCallback(() => {
    if (isRunning) pauseTimer();
    else startTimer();
  }, [isRunning, startTimer, pauseTimer]);

  return (
    <Button
      type="button"
      onClick={handleClick}
      aria-label={isRunning ? 'Pause' : 'Play'}
    >
      {isRunning ? (
        <FiPause size={32} data-testid="pause-icon" />
      ) : (
        <FiPlay size={32} data-testid="play-icon" />
      )}
    </Button>
  );
};

export default PomodoroButton;
