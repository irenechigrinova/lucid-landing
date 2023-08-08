const setRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const setUniqRandomNumber = (
  min: number,
  max: number,
  used: Set<number>
): number => {
  const random = Math.ceil(Math.random() * (max - min) + min);
  if (used.has(random)) return setUniqRandomNumber(min, max, used);

  used.add(random);
  return random;
};

export { setRandomNumber, setUniqRandomNumber };

export type TState = {
  isAnimated: boolean;
  currentSlide: number;
  shown: Record<string, boolean>;
};
