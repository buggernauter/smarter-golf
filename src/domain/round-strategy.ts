type ScoringStrategy = {
  description: string;
  getTargetByPar: (parValue: number) => string;
  label: string;
};

export type ScoringStrategyKey = "break80" | "break90" | "break100";

type ScoringStrategies = {
  [key in ScoringStrategyKey]: ScoringStrategy;
};

export const scoringStrategies: ScoringStrategies = {
  break100: {
    label: "Break 100",
    description: "Double bogey golf with safe course management",

    getTargetByPar: (parValue: number) => {
      if (parValue === 4) return "~90 m på 3 slag";

      if (parValue === 5) return "~90 m på 4 slag";

      return "Chip/putt-läge från tee";
    },
  },
  break90: {
    label: "Break 90",
    description: "Bogey golf focused on scoring zones",

    getTargetByPar: (parValue: number) => {
      if (parValue === 4) return "~90 m på 2 slag";

      if (parValue === 5) return "~90 m på 3 slag";

      return "Putt/chip-läge från tee";
    },
  },
  break80: {
    label: "Break 80",
    description: "Par golf with aggressive scoring opportunities",

    getTargetByPar: (parValue: number) => {
      if (parValue === 4) return "Scoring zone på 1 slag";

      if (parValue === 5) return "~90 m på 2 slag";

      return "Birdieputt från tee";
    },
  },
};

export const activeScoringStrategy = scoringStrategies["break90"];
