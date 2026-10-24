import { StyledPrognosFill, StyledPrognosTrack } from '@/components/ui/prognos/styles';

interface PrognosProps {
    value: number;
}

export const Prognos = ({ value }: PrognosProps) => {
    const percentage = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;

    return (
        <StyledPrognosTrack role="meter" aria-valuenow={percentage}>
            <StyledPrognosFill $percentage={percentage} />
        </StyledPrognosTrack>
    );
};
