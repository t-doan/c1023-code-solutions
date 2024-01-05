import { useState } from 'react';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton
        onPrev={() =>
          setCurrentIndex((currentIndex - 1 + items.length) % items.length)
        }
      />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onSelect={(e) => setCurrentIndex(e)}
      />
      <NextButton
        onNext={() => setCurrentIndex((currentIndex + 1) % items.length)}
      />
    </div>
  );
}

type BannerProps = {
  item: string;
};

function Banner({ item }: BannerProps) {
  return <p>{item}</p>;
}

type PrevProps = {
  onPrev: () => void;
};
function PrevButton({ onPrev }: PrevProps) {
  return <button onClick={onPrev}>Prev</button>;
}

type NextProps = {
  onNext: () => void;
};
function NextButton({ onNext }: NextProps) {
  return <button onClick={onNext}>Next</button>;
}

type IndicatorProps = {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
};
function Indicators({ count, currentIndex, onSelect }: IndicatorProps) {
  const indicators = [];
  for (let i = 0; i < count; i++) {
    indicators.push(
      <button
        key={i}
        style={{ backgroundColor: i === currentIndex ? 'red' : undefined }}
        onClick={() => onSelect(i)}>
        {i}
      </button>
    );
  }
  return <div>{indicators}</div>;
}
