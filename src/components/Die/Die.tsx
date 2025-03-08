interface dieTypes {
  value: number;
  lastElement: boolean;
  isHeld: boolean;
  onClick: () => void;
}

export default function Die({ value, lastElement, isHeld, onClick }: dieTypes) {
  const isDiceHeld = isHeld ? "held" : "";
  return (
    <>
      {lastElement ? (
        <button
          onClick={onClick}
          className={`single ${isDiceHeld}`}
          aria-pressed={isHeld}
          aria-label={`Die with value ${value}, 
        ${isHeld ? "held" : "not held"}`}
        >
          {value}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={isDiceHeld}
          aria-pressed={isHeld}
          aria-label={`Die with value ${value}, 
        ${isHeld ? "held" : "not held"}`}
        >
          {value}
        </button>
      )}
    </>
  );
}
