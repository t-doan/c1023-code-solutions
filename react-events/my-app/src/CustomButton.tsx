type Prop = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export function CustomButton({ text, color, onCustomClick }: Prop) {
  function handleClick() {
    onCustomClick(text);
  }

  return (
    <button className={color} onClick={handleClick}>
      Click Me!
    </button>
  );
}
