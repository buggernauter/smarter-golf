import { useCallback, useEffect, useState, type ReactNode } from "react";

import { breakpoints } from "../../styles/breakpoints";
import {
  StyledCard,
  StyledLayout,
  StyledLead,
  StyledText,
  StyledTitle,
} from "./styles";

type Props = {
  children: ReactNode;
};

const getIsDesktop = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(`(min-width: ${breakpoints.desktop})`).matches;
};

export const DesktopNotice = ({ children }: Props) => {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setIsDesktop(event.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoints.desktop})`);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [handleChange]);

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <StyledLayout>
      <StyledCard>
        <StyledTitle>Mobile Only</StyledTitle>
        <StyledLead>Den här appen är byggd för mobilen.</StyledLead>
        <StyledText>
          Öppna appen på en mobil enhet för att använda scorekortet och
          rundöversikten som tänkt.
        </StyledText>
      </StyledCard>
    </StyledLayout>
  );
};
