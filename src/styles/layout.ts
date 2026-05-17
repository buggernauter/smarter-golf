import styled from "styled-components";

export const StyledAppLayout = styled.div`
  width: 100%;
  min-height: 100vh;

  box-sizing: border-box;

  @media print {
    min-height: auto;
    padding: 0;
  }
`;
