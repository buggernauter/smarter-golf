import { sizes } from '@/styles/tokens';
import styled from "styled-components";

export const StyledThemeToggle = styled.button`
  display: inline-flex;
  width: ${sizes[11]};
  height: ${sizes[11]};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ theme }) => theme.palette.primaryMain};

  svg {
    width: ${sizes[5]};
    height: ${sizes[5]};
  }
`;
