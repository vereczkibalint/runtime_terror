export const moneyFormatter = (money) => {
  return money.toLocaleString("hu-HU", {
    style: "currency",
    currency: "HUF",
  });
};
