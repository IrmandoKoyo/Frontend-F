type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function CounterButtons({ onIncrement, onDecrement }: Props) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
