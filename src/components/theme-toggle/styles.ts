import styled from "styled-components";

export const StyledThemeToggle = styled.button`
  display: inline-flex;
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.primaryMain};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
