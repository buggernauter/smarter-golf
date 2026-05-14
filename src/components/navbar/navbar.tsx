import { useEffect, useState } from "react";
import {
  ClipboardPenLine,
  Menu,
  MoonStar,
  Smartphone,
  SunMedium,
  X,
} from "lucide-react";

import {
  Brand,
  ControlButton,
  DrawerBackdrop,
  MenuButton,
  NavBody,
  NavHeader,
  SideNav,
  TopBar,
} from "./styles";

type Props = {
  isDarkTheme: boolean;
  showDigital: boolean;
  onToggleCard: () => void;
  onToggleTheme: () => void;
};

export const Navbar = ({
  isDarkTheme,
  showDigital,
  onToggleCard,
  onToggleTheme,
}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <DrawerBackdrop
        $open={isMenuOpen}
        aria-label="Stäng meny"
        onClick={() => setIsMenuOpen(false)}
      />

      <SideNav id="app-navigation" $open={isMenuOpen} aria-hidden={!isMenuOpen}>
        <NavHeader>
          <MenuButton
            className="no-print"
            type="button"
            aria-label="Stäng meny"
            $active
            onClick={() => setIsMenuOpen(false)}
          >
            <X aria-hidden="true" />
          </MenuButton>
        </NavHeader>

        <NavBody>
          <ControlButton
            className="no-print"
            type="button"
            aria-label={
              showDigital
                ? "Byt till manuell scorecard"
                : "Byt till digital scorecard"
            }
            aria-pressed={showDigital}
            $active={showDigital}
            onClick={() => {
              onToggleCard();
              setIsMenuOpen(false);
            }}
          >
            {showDigital ? (
              <ClipboardPenLine aria-hidden="true" />
            ) : (
              <Smartphone aria-hidden="true" />
            )}
          </ControlButton>

          <ControlButton
            className="no-print"
            type="button"
            aria-label={
              isDarkTheme ? "Byt till ljust tema" : "Byt till mörkt tema"
            }
            aria-pressed={isDarkTheme}
            $active={isDarkTheme}
            onClick={() => {
              onToggleTheme();
              setIsMenuOpen(false);
            }}
          >
            {isDarkTheme ? (
              <SunMedium aria-hidden="true" />
            ) : (
              <MoonStar aria-hidden="true" />
            )}
          </ControlButton>
        </NavBody>
      </SideNav>

      <TopBar>
        <Brand>
          <MenuButton
            className="no-print"
            type="button"
            aria-label="Öppna meny"
            aria-expanded={isMenuOpen}
            aria-controls="app-navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu aria-hidden="true" />
          </MenuButton>
        </Brand>
      </TopBar>
    </>
  );
};
