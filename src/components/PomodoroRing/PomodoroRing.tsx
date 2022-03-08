import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { usePomodoro } from 'hooks/usePomodoro';
import countProgress from 'utils/countProgress';

import { Wrapper } from './PomodoroRing.style';
import 'react-circular-progressbar/dist/styles.css';

const PomodoroRing: React.FC = () => {
  const { initialCount, count } = usePomodoro();

  return (
    <Wrapper data-testid="progress">
      <CircularProgressbar
        value={countProgress(initialCount, count) || 0}
        strokeWidth={3}
        styles={buildStyles({
          textColor: 'red',
          pathColor: '#DF3A36',
          trailColor: '#e6e6e6',
        })}
      />
    </Wrapper>
  );
};

export default PomodoroRing;
