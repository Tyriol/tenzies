interface dieTypes {
  value: number;
}

export default function Die({ value }: dieTypes) {
  return <button>{value}</button>;
}
