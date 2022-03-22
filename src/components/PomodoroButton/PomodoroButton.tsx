import React, { useCallback } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';
import { usePomodoro } from 'hooks/usePomodoro';
import Button from 'components/Button';

const PomodoroButton: React.FC = () => {
  const { startTimer, pauseTimer, isRunning } = usePomodoro();

  const handleClick = useCallback(() => {
    if (isRunning) pauseTimer();
    else startTimer();
  }, [isRunning, startTimer, pauseTimer]);

  return (
    <Button
      title={isRunning ? 'Pause' : 'Play'}
      round
      variant={isRunning ? 'secondary' : 'primary'}
      size={isRunning ? 'regular' : 'medium'}
      onClick={handleClick}
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
