import styled from 'styled-components';

type Props = {
    size?: number;
};

export const Spacer = styled.div<Props>`
    height: ${({ size = 16 }) => size}px;
    flex-shrink: 0;
`;
