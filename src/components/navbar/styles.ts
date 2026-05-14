import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const railButton = css`
  width: 3.25rem;
  min-width: 3.25rem;
  height: 3.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 1rem;
  cursor: pointer;
  transition:
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1),
    background 180ms ease,
    color 180ms ease,
    box-shadow 220ms ease,
    opacity 180ms ease;

  &:hover {
    transform: translateY(-0.0625rem);
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    flex: 0 0 auto;
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  position: relative;
  z-index: 1;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button<{ $active?: boolean }>`
  ${railButton}
  background: ${({ $active, theme }) =>
    $active ? theme.palette.surfaceMuted : `${theme.palette.surfaceBase}EB`};
  color: ${({ $active, theme }) =>
    $active ? theme.palette.textPrimary : theme.palette.textSecondary};
  box-shadow:
    0 1rem 2rem ${({ theme }) => theme.palette.shadowSoft},
    inset 0 0 0 0.0625rem ${({ theme }) => `${theme.palette.borderBase}88`};
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
`;

export const DrawerBackdrop = styled.button<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 2;
  border: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    opacity 220ms ease,
    backdrop-filter 220ms ease;
`;

export const SideNav = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 3;
  width: min(5.25rem, calc(100vw - 1.5rem));
  padding: 0.625rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.75rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => `${theme.palette.surfaceBase}F2`} 0%,
    ${({ theme }) => `${theme.palette.surfaceSoft}E6`} 100%
  );
  box-shadow:
    0 1.25rem 3rem ${({ theme }) => theme.palette.shadowSoft},
    inset 0 0 0 0.0625rem ${({ theme }) => `${theme.palette.borderBase}7A`};
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  transform: ${({ $open }) =>
    $open ? "translateX(0) scale(1)" : "translateX(-1rem) scale(0.96)"};
  transform-origin: left center;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 220ms ease;

  @media (min-width: ${breakpoints.tablet}) {
    width: 5.5rem;
    top: 1rem;
    left: 1rem;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

export const ControlButton = styled.button<{ $active?: boolean }>`
  ${railButton}
  background: ${({ $active, theme }) =>
    $active ? theme.palette.accentBase : `${theme.palette.surfaceBase}D6`};
  color: ${({ $active, theme }) =>
    $active ? theme.palette.surfaceBase : theme.palette.textPrimary};
  box-shadow: ${({ $active, theme }) =>
    $active
      ? `0 1rem 2rem ${theme.palette.shadowAccent}`
      : `0 1rem 2rem ${theme.palette.shadowSoft}, inset 0 0 0 0.0625rem ${theme.palette.borderSoft}`};
  opacity: ${({ $active }) => ($active ? 1 : 0.94)};
`;
