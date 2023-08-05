const setRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const setUniqRandomNumber = <T>(min: number, max: number, used: Set<T>) => {
  const random = Math.ceil(Math.random() * (max - min) + min);
  console.log(used.has(random));
  if (used.has(random)) return setUniqRandomNumber(min, max, used);

  used.add(random);
  return random;
};

export { setRandomNumber, setUniqRandomNumber };
