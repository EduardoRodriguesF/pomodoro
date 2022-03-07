import React, { useEffect, useState } from 'react';
import { usePomodoro } from 'hooks/usePomodoro';
import formatCount from 'utils/formatCount';
import { Timestamp, Wrapper } from './PomodoroTimer.style';

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
    <Wrapper>
      {count?.hours > 0 && (
        <>
          <Timestamp data-testid="hours">{formattedCount.hours}</Timestamp>
          <span>:</span>
        </>
      )}
      <Timestamp data-testid="minutes">{formattedCount.minutes}</Timestamp>
      <span>:</span>
      <Timestamp data-testid="seconds">{formattedCount.seconds}</Timestamp>
    </Wrapper>
  );
};

export default PomodoroTimer;
