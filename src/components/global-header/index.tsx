import { memo, type ReactNode } from "react";

import {
  StyledGlobalHeader,
  StyledHeaderAction,
  StyledHeaderTitle,
} from "./styles";
import { ThemeToggleButton } from "../theme-toggle";

interface GlobalHeaderProps {
  title: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  className?: string;
}

export const Header = memo(
  ({ title, leading, trailing, className }: GlobalHeaderProps) => (
    <StyledGlobalHeader className={className}>
      <StyledHeaderAction $position="start">{leading}</StyledHeaderAction>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
      <StyledHeaderAction $position="end">
        {trailing}
        <ThemeToggleButton />
      </StyledHeaderAction>
    </StyledGlobalHeader>
  ),
);
