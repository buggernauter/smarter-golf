import type { CSSProperties } from "react";
import { css } from "styled-components";
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

type StyledButtonProps = {
  $variant: ButtonVariant;
  $width?: CSSProperties["width"];
  $height?: CSSProperties["height"];
  $backgroundColor?: CSSProperties["backgroundColor"];
  $color?: CSSProperties["color"];
  $fullWidth: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  width: ${({ $fullWidth, $width }) =>
    $fullWidth ? "100%" : ($width ?? "auto")};
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 0.875rem;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  touch-action: manipulation;
  transition:
    transform 150ms ease,
    box-shadow 150ms ease;

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height};
    `}

  ${({ $variant, $backgroundColor, $color, theme }) => {
    const variants = {
      primary: {
        background: theme.palette.primaryMain,
        color: theme.palette.backgroundPaper,
      },
      secondary: {
        background: theme.gradients.fieldSurface,
        color: theme.palette.textPrimary,
      },
      danger: {
        background: theme.palette.fail,
        color: theme.palette.backgroundPaper,
      },
      ghost: {
        background: theme.palette.transparent,
        color: theme.palette.primaryMain,
      },
    };

    return css`
      background: ${$backgroundColor ?? variants[$variant].background};
      color: ${$color ?? variants[$variant].color};
      box-shadow: ${$variant === "primary"
        ? theme.shadows.primaryButton
        : "none"};
    `;
  }}


  &:active:not(:disabled) {
    transform: translateY(0.0625rem);
  }

  &:focus-visible {
    outline: 0.1875rem solid ${({ theme }) => theme.palette.primaryMain};
    outline-offset: 0.1875rem;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;
