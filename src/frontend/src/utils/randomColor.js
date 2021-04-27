export const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * 2 ** 24)
    .toString(16)
    .padStart(0, 6);
