type Props = {
  text: string;
  color: string;
};

export function CustomButton({ text, color }: Props) {
  return (
    <div>
      <button className={color}>{text}</button>
    </div>
  );
}
