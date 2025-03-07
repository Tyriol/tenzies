interface dieTypes {
  value: number;
  className: Boolean;
}

export default function Die({ value, className }: dieTypes) {
  {
    return className ? <button className="single">{value}</button> : <button>{value}</button>;
  }
}
