import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  items: Image[];
};

export function Carousel({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className="container">
      <div className="row">
        <div className="column-third">
          <PrevButton
            onPrev={() =>
              setCurrentIndex((currentIndex - 1 + items.length) % items.length)
            }
          />
        </div>
        <div className="column-third fixed">
          <Banner item={items[currentIndex]} />
        </div>
        <div className="column-third">
          <NextButton
            onNext={() => setCurrentIndex((currentIndex + 1) % items.length)}
          />
        </div>
      </div>
      <div className="row">
        <Indicators
          count={items.length}
          currentIndex={currentIndex}
          onSelect={(e) => setCurrentIndex(e)}
        />
      </div>
    </div>
  );
}

type BannerProps = {
  item: Image;
};

function Banner({ item }: BannerProps) {
  return <img className="img" src={item.src} alt={item.alt} />;
}

type PrevProps = {
  onPrev: () => void;
};
function PrevButton({ onPrev }: PrevProps) {
  return <FaChevronLeft className="fa-chevron" onClick={onPrev} />;
}

type NextProps = {
  onNext: () => void;
};
function NextButton({ onNext }: NextProps) {
  return <FaChevronRight className="fa-chevron" onClick={onNext} />;
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
      <FaCircle
        key={i}
        className="fa-circle"
        style={{ color: i === currentIndex ? 'red' : undefined }}
        onClick={() => onSelect(i)}
      />
    );
  }
  return <div className="column-fifth">{indicators}</div>;
}
