import styled from "styled-components";

export const StyledGlobalHeader = styled.header`
  position: relative;
  display: flex;
  min-height: calc(3.75rem + env(safe-area-inset-top));
  box-sizing: border-box;
  align-items: center;
  padding: max(1rem, env(safe-area-inset-top)) 1rem 1rem;
  color: inherit;
`;

export const StyledHeaderAction = styled.div<{
  $position: "start" | "end";
}>`
  z-index: 1;
  display: flex;
  min-width: 2.75rem;
  min-height: 2.75rem;
  align-items: center;
  gap: 0.5rem;
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
