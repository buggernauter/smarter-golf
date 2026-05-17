export type HoleData = {
  holeNr: number;
  parValue: number;
  meterValue: number;
};
export const holeData: HoleData[] = [
  {
    holeNr: 1,
    parValue: 4,
    meterValue: 359,
  },
  {
    holeNr: 2,
    parValue: 3,
    meterValue: 135,
  },
  {
    holeNr: 3,
    parValue: 4,
    meterValue: 302,
  },
  {
    holeNr: 4,
    parValue: 5,
    meterValue: 419,
  },
  {
    holeNr: 5,
    parValue: 4,
    meterValue: 291,
  },
  {
    holeNr: 6,
    parValue: 5,
    meterValue: 506,
  },
  {
    holeNr: 7,
    parValue: 3,
    meterValue: 187,
  },
  {
    holeNr: 8,
    parValue: 4,
    meterValue: 342,
  },
  {
    holeNr: 9,
    parValue: 3,
    meterValue: 129,
  },
  {
    holeNr: 10,
    parValue: 4,
    meterValue: 327,
  },
  {
    holeNr: 11,
    parValue: 3,
    meterValue: 177,
  },
  {
    holeNr: 12,
    parValue: 5,
    meterValue: 450,
  },
  {
    holeNr: 13,
    parValue: 4,
    meterValue: 333,
  },
  {
    holeNr: 14,
    parValue: 3,
    meterValue: 110,
  },
  {
    holeNr: 15,
    parValue: 3,
    meterValue: 159,
  },
  {
    holeNr: 16,
    parValue: 4,
    meterValue: 294,
  },
  {
    holeNr: 17,
    parValue: 5,
    meterValue: 483,
  },
  {
    holeNr: 18,
    parValue: 4,
    meterValue: 370,
  },
] as const;
export const holeStrategy = [
  {
    holeNr: 1,

    title: "Controlled tee shot",

    strategy:
      "Play safely from the tee. A hybrid or 3W is often better than driver. Prioritize a wedge approach instead of recovery shots.",
  },

  {
    holeNr: 2,

    title: "Attackable par 3",

    strategy:
      "Short par 3. Missing long is usually better than short. Good birdie opportunity.",
  },

  {
    holeNr: 3,

    title: "Position over distance",

    strategy:
      "Focus on staying in play and reaching the scoring zone in regulation.",
  },

  {
    holeNr: 4,

    title: "Scoring opportunity",

    strategy:
      "Short par 5. Three controlled shots are better than forcing an aggressive second shot.",
  },

  {
    holeNr: 5,

    title: "Stay below the hole",

    strategy:
      "Prioritize angle and positioning into the green for easier putting.",
  },

  {
    holeNr: 6,

    title: "Bogey golf is okay",

    strategy:
      "One of the tougher holes. Fairway, layup, wedge and two-putt is a great result here.",
  },

  {
    holeNr: 7,

    title: "Club up",

    strategy:
      "Long par 3. Take an extra club and prioritize green contact over pin hunting.",
  },

  {
    holeNr: 8,

    title: "Risk vs reward",

    strategy:
      "Better to leave yourself 80–90m than forcing a difficult aggressive tee shot.",
  },

  {
    holeNr: 9,

    title: "Finish the front nine smart",

    strategy:
      "Avoid unnecessary risks before the turn. Fairway and center-green strategy works well.",
  },

  {
    holeNr: 10,

    title: "Reset mentally",

    strategy:
      "Treat the back nine as a fresh start and focus on consistent course management.",
  },

  {
    holeNr: 11,

    title: "Commit to the shot",

    strategy:
      "Trust your club selection and avoid tentative swings on approach shots.",
  },

  {
    holeNr: 12,

    title: "Avoid doubles",

    strategy:
      "One of the hardest holes. Conservative golf and avoiding mistakes is the priority.",
  },

  {
    holeNr: 13,

    title: "Patience wins",

    strategy: "Stay disciplined and avoid chasing risky birdie opportunities.",
  },

  {
    holeNr: 14,

    title: "Smart birdie chance",

    strategy:
      "Shorter hole where positioning is more valuable than distance. Great scoring opportunity.",
  },

  {
    holeNr: 15,

    title: "Green first",

    strategy:
      "Par 3 where simply hitting the green gives a strong scoring chance.",
  },

  {
    holeNr: 16,

    title: "Stay aggressive selectively",

    strategy:
      "Attack only if you are in position. Avoid unnecessary recovery situations.",
  },

  {
    holeNr: 17,

    title: "Big scoring swing hole",

    strategy:
      "Important par 5. Position, position, attack. Avoid hero shots into trouble.",
  },

  {
    holeNr: 18,

    title: "Finish with discipline",

    strategy:
      "Play smart coming home. Avoid forcing birdies and let the score come naturally.",
  },
] as const;
