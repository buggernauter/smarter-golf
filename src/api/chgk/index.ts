export const parValues = [4, 3, 5, 4, 4, 5, 3, 4, 3, 4, 3, 4, 5, 4, 3, 4, 5, 4];

export const meterValues = [
  "359",
  "135",
  "302",
  "419",
  "291",
  "506",
  "187",
  "342",
  "129",

  "402",
  "186",
  "352",
  "484",
  "185",
  "110",
  "341",
  "486",
  "362",
];
export const scoringGoals = parValues.map((par) => {
  if (par === 4) return "~90 m på 2 slag";

  if (par === 5) return "~90 m på 3 slag";

  return "Putt/chip‑läge från tee";
});
