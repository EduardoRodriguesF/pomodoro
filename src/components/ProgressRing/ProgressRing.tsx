import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Wrapper } from './ProgressRing.style';
import 'react-circular-progressbar/dist/styles.css';
import { IProgressRingProps } from './ProgressRing.types';

const ProgressRing: React.FC<IProgressRingProps> = ({ progress }) => (
  <Wrapper data-testid="progress">
    <CircularProgressbar
      value={progress}
      strokeWidth={3}
      styles={buildStyles({
        textColor: 'red',
        pathColor: '#DF3A36',
        trailColor: '#e6e6e6',
      })}
    />
  </Wrapper>
);

export default ProgressRing;
