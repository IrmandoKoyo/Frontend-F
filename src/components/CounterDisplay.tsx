type Props = {
  value: number;
};

export default function CounterDisplay({ value }: Props) {
  return (
    <div>
      <h2 className="counter-value">{value}</h2>
    </div>
  );
}
