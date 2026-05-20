export type PlayStrategy = {
  heading: string;
  points: [string, string, string];
};

const par3Strategy: PlayStrategy = {
  heading: "Putt/chip-läge från tee",
  points: [
    "Spela mot trygg sida",
    "Lämna enkelt närspel",
    "Undvik stora missar",
  ],
};

const createPar4Strategy = (): PlayStrategy => ({
  heading: "~90 m efter 2 slag",
  points: [
    "Bollen i spel från tee",
    "1 slag mot 90 m",
    "Enkel wedge mot green",
  ],
});

const createPar5Strategy = (): PlayStrategy => ({
  heading: "~90 m efter 3 slag",

  points: [
    "Bollen i spel från tee",
    "2 slag mot 90 m",
    "Enkel wedge mot green",
  ],
});

export const getPlayStrategy = (parValue: number): PlayStrategy => {
  if (parValue === 3) {
    return par3Strategy;
  }

  if (parValue === 4) {
    return createPar4Strategy();
  }

  return createPar5Strategy();
};
