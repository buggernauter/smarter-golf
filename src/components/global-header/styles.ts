import { spacing, sizes } from '@/styles/tokens';
import styled from "styled-components";

export const StyledGlobalHeader = styled.header`
  position: relative;
  display: flex;
  min-height: calc(${sizes[15]} + env(safe-area-inset-top));
  box-sizing: border-box;
  align-items: center;
  padding: max(${spacing[4]}, env(safe-area-inset-top)) ${spacing[4]} ${spacing[4]};
  color: inherit;
`;

export const StyledHeaderAction = styled.div<{
  $position: "start" | "end";
}>`
  z-index: 1;
  display: flex;
  min-width: ${sizes[11]};
  min-height: ${sizes[11]};
  align-items: center;
  gap: ${spacing[2]};
  justify-content: ${({ $position }) =>
    $position === "end" ? "flex-end" : "flex-start"};

  ${({ $position }) => $position === "end" && "margin-left: auto;"}
`;

export const StyledHeaderTitle = styled.h1`
  position: absolute;
  left: 50%;
  margin: 0;
  color: inherit;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.35rem;
  font-weight: 400;
  text-align: center;
  transform: translateX(-50%);
`;
