import React, { MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from 'react';
import { getScrollbarWidth } from '../../utils';
import './index.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  const scrollWidth = `${getScrollbarWidth() || 20}px`;
  const [barHeight, setBarHeight] = useState(0);
  const [barScrollTop, setBarScrollTop] = useState(0);
  const move = useRef(false);
  const startY = useRef(0);
  const cacheBarTop = useRef(0);
  const cacheBarHeight = useRef(0);
  const barContainerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const onScroll: UIEventHandler = event => {
    const innerDom = innerRef.current;
    if (innerDom) {
      const { scrollTop } = event.currentTarget;
      const { height } = innerDom.getBoundingClientRect();
      const scrollHeight = innerDom.scrollHeight;
      const barScrollTop = scrollTop * height / scrollHeight;
      setBarScrollTop(barScrollTop);
    }
  }
  const onMouseDown: MouseEventHandler = event => {
    const { clientY } = event;
    move.current = true;
    startY.current = clientY;
    cacheBarTop.current = barScrollTop;
  }
  const onMouseMove = (event: MouseEvent) => {
    const { clientY } = event;
    const barContainerDom = barContainerRef.current;
    const scrollHeight = barContainerDom && barContainerDom.scrollHeight || 0;
    const maxBarScrollTop = scrollHeight - barHeight;
    const diffValue = clientY - startY.current;
    let barScrollTop = cacheBarTop.current + diffValue;
    if (barScrollTop <= 0) barScrollTop = 0;
    if (barScrollTop >= maxBarScrollTop) barScrollTop = maxBarScrollTop;
    if (move.current) {
      setBarScrollTop(barScrollTop);
    }
  }
  const onMouseUp = () => {
    move.current = false;
  }
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }, [barHeight]);
  useEffect(() => {
    const innerDom = innerRef.current;
    if (innerDom) {
      const scrollHeight = innerDom.scrollHeight;
      const { height } = innerDom.getBoundingClientRect();
      const barHeight = height * height / scrollHeight;
      cacheBarHeight.current = barHeight;
      setBarHeight(barHeight);
    }
  }, []);
  return <div {...restProps} className='f-scroll'>
    <div
      onScroll={onScroll}
      ref={innerRef}
      className='f-scroll--inner'
      style={{ right: `-${scrollWidth}` }}
    >
      {children}
    </div>
    <div ref={barContainerRef} className='f-scroll--container'>
      <div
        onMouseDown={onMouseDown}
        className='f-scroll--bar'
        style={{height: barHeight, transform: `translateY(${barScrollTop}px)`}}
      ></div>
    </div>
  </div>;
};

export default Scroll;