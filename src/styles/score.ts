import { borderWidths, radii, spacing } from '@/styles/tokens';

export const typography = {
    weight: 600,
    lineHeight: 1,
    labelLineHeight: 1.2,
    numberScale: 0.45,
    labelScale: 0.16,
} as const;

export const shape = {
    circleRadius: radii.circle,
    squareRatio: 1,
    borderWidth: borderWidths.hairline,
} as const;

export const focus = {
    width: borderWidths.focus,
    offset: spacing[1],
} as const;
