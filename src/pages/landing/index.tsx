import { ArrowRight, ChevronRight, Target } from 'lucide-react';

import { InstallInfo } from '@/components/install-info';
import { Header } from '@/components/global-header';
import {
    StyledLandingPage,
    StyledLandingContent,
    StyledIntroduction,
    StyledRoundCard,
    StyledLinkIcon,
    StyledLinkContent,
    StyledLinkTitle,
    StyledDescription,
    StyledStartLink,
    StyledPractice,
    StyledPracticeTitle,
    StyledPracticeLink,
} from '@/pages/landing/styles';

export const LandingPage = () => (
    <StyledLandingPage>
        <Header title="Smarter Golf" leading={<InstallInfo />} />
        <StyledLandingContent>
            <StyledIntroduction>
                <h1>Play with a plan.</h1>
                <p>Make smarter decisions on the course.</p>
            </StyledIntroduction>

            <StyledRoundCard aria-labelledby="round-plan-title">
                <StyledLinkTitle id="round-plan-title">Smart golf</StyledLinkTitle>

                <StyledDescription>Plan a round.</StyledDescription>
                <StyledStartLink to="/round-tracker">
                    Start round <ArrowRight aria-hidden="true" size={18} />
                </StyledStartLink>
            </StyledRoundCard>

            <StyledPractice aria-labelledby="practice-title">
                <StyledPracticeTitle id="practice-title">Practice</StyledPracticeTitle>
                <StyledPracticeLink to="/lagput">
                    <StyledLinkIcon>
                        <Target aria-hidden="true" />
                    </StyledLinkIcon>
                    <StyledLinkContent>
                        <StyledLinkTitle>Lag Putting</StyledLinkTitle>
                        <StyledDescription>Improve</StyledDescription>
                    </StyledLinkContent>
                    <ChevronRight aria-hidden="true" size={20} />
                </StyledPracticeLink>
            </StyledPractice>
        </StyledLandingContent>
    </StyledLandingPage>
);
