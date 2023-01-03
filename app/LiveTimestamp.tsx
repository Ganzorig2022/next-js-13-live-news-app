'use client';
import TimeAgo from 'react-timeago';

type Props = {
  time: string;
};

const LiveTimestamp = ({ time }: Props) => {
  //2023-01-03T05:34:22Z
  return <TimeAgo date={time} />;
};

export default LiveTimestamp;
