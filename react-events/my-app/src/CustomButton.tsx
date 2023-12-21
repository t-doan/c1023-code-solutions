type Prop = {
  text: string;
  color: string;
};

export function CustomButton({ text, color }: Prop) {
  function handleClick() {
    window.alert(text);
  }

  return (
    <button className={color} onClick={handleClick}>
      Click Me!
    </button>
  );
}
