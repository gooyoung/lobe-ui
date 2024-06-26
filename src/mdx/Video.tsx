'use client';

import { CSSProperties, FC } from 'react';

import LobeVideo from '@/Video';

export interface VideoProps {
  borderless?: boolean;
  className?: string;
  cover?: boolean;
  height?: number;
  inStep?: boolean;
  poster?: string;
  src: string;
  style?: CSSProperties;
  width?: number;
}

const Video: FC<VideoProps> = ({ style, width = 800, height, cover, inStep, ...rest }) => {
  const size = cover
    ? { height: 300, width: 800 }
    : inStep
      ? {
          height,
          width: 780,
        }
      : {
          height,
          width,
        };

  return (
    <LobeVideo
      height={size.height}
      preview={false}
      style={{
        borderRadius: 'calc(var(--lobe-markdown-border-radius) * 1px)',
        marginBlock: 'calc(var(--lobe-markdown-margin-multiple) * 1em)',
        ...style,
      }}
      width={size.width}
      {...rest}
    />
  );
};

export default Video;
