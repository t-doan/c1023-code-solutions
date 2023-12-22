import { useState } from 'react';

type Prop = {
  text: string;
};

export function HotButton({ text }: Prop) {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  function getColor() {
    if (clickCount <= 3) {
      return '#351C75';
    } else if (clickCount <= 6) {
      return '#674EA7';
    } else if (clickCount <= 9) {
      return '#E06666';
    } else if (clickCount <= 12) {
      return '#F6B26B';
    } else if (clickCount <= 15) {
      return '#00ff03';
    } else if (clickCount <= 18) {
      return '#fbfa3f';
    } else {
      return '#FFFFFF';
    }
  }

  function fontColor(clickCount: number): string {
    if (clickCount <= 6) {
      return 'white';
    } else {
      return 'black';
    }
  }

  return (
    <div>
      <button
        className="hot-button"
        onClick={handleClick}
        style={{ color: fontColor(clickCount), backgroundColor: getColor() }}>
        {text}
      </button>
      <p>Clicked {clickCount} times</p>
    </div>
  );
}
