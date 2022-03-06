import React, { useEffect, useState } from 'react';
import { usePomodoro } from 'hooks/usePomodoro';
import formatCount from 'utils/formatCount';

const formattedCountDefault = {
  hours: '0',
  minutes: '00',
  seconds: '00',
};

const PomodoroTimer: React.FC = () => {
  const [formattedCount, setFormattedCount] = useState(formattedCountDefault);
  const { count } = usePomodoro();

  useEffect(() => {
    setFormattedCount(formatCount(count));
  }, [count]);

  return (
    <div>
      {count?.hours > 0 && (
        <>
          <span data-testid="hours">{formattedCount.hours}</span>
          <span>:</span>
        </>
      )}
      <span data-testid="minutes">{formattedCount.minutes}</span>
      <span>:</span>
      <span data-testid="seconds">{formattedCount.seconds}</span>
    </div>
  );
};

export default PomodoroTimer;
