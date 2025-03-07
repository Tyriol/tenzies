interface dieTypes {
  value: number;
  lastElement: boolean;
  isHeld: boolean;
}

export default function Die({ value, lastElement, isHeld }: dieTypes) {
  const isDiceHeld = isHeld ? "held" : "";
  return (
    <>
      {lastElement ? (
        <button className={`single ${isDiceHeld}`}>{value}</button>
      ) : (
        <button className={isDiceHeld}>{value}</button>
      )}
    </>
  );
}
