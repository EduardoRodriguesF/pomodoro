import React, { useEffect, useState } from 'react';
import { usePomodoro } from 'hooks/usePomodoro';
import formatCount from 'utils/formatCount';
import countProgress from 'utils/countProgress';
import ProgressRing from 'components/ProgressRing';
import { Timestamp, Wrapper } from './PomodoroTimer.style';

const formattedCountDefault = {
  hours: '0',
  minutes: '00',
  seconds: '00',
};

const PomodoroTimer: React.FC = () => {
  const [formattedCount, setFormattedCount] = useState(formattedCountDefault);
  const { initialCount, count } = usePomodoro();

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
      <ProgressRing progress={countProgress(initialCount, count)} />
    </Wrapper>
  );
};

export default PomodoroTimer;
