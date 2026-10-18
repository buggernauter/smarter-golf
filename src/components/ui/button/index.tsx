import {
  forwardRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
} from "react";
import { StyledButton, type ButtonVariant } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  backgroundColor?: CSSProperties["backgroundColor"];
  color?: CSSProperties["color"];
  fullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      variant = "primary",
      width,
      height,
      backgroundColor,
      color,
      fullWidth = false,
      ...props
    },
    ref,
  ) => (
    <StyledButton
      ref={ref}
      type={type}
      $variant={variant}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $color={color}
      $fullWidth={fullWidth}
      {...props}
    />
  ),
);

Button.displayName = "Button";
