import { useState } from 'react';

type Prop = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Prop) {
  console.log('isClicked: ', useState);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log('isClicked: ', isClicked);
    setIsClicked((prevIsClicked) => !prevIsClicked);
    console.log('isClicked: ', isClicked);
  };

  return (
    <button
      onClick={handleClick}
      style={{ color: 'black', backgroundColor: isClicked ? color : 'white' }}>
      {text}
    </button>
  );
}
