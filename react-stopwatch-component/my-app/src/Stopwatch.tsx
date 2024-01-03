import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  function handleFaceClick() {
    if (!isPlaying) setTime(0);
  }
  function handlePlay() {
    if (isPlaying) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    } else {
      const id = setInterval(() => setTime((prev) => prev + 1), 1000);
      setIntervalId(id);
    }
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="stopwatch">
      <div
        className={isPlaying ? 'watch-face' : 'watch-face reset'}
        onClick={handleFaceClick}>
        <span>{time.toFixed(1)}</span>
      </div>
      {isPlaying ? (
        <FaPause className="icon" onClick={handlePlay} />
      ) : (
        <FaPlay className="icon" onClick={handlePlay} />
      )}
    </div>
  );
}
