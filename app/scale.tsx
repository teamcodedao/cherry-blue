'use client';

import clsx from 'clsx';
import {cloneElement, useMemo} from 'react';
import {useWindowSize} from 'usehooks-ts';

interface ScaleProps {
  children: React.ReactElement;
  className?: string;
  min?: number;
}

export default function Scale({children, className, min}: ScaleProps) {
  const {width = 0} = useWindowSize({
    initializeWithValue: false,
  });

  const scale = useMemo(() => {
    if (width) {
      const scale = Math.min(width / 1442, 1);

      if (typeof min === 'number') {
        return Math.max(min, scale);
      }

      return scale;
    }

    return 1;
  }, [min, width]);

  return cloneElement(children, {
    className: clsx(className, children.props.className),
    style: {
      transform: `scale(${scale})`,
    },
  });
}
