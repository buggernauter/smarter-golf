import {
  StyledLandingPage,
  StyledLinkGrid,
  StyledRouteLink,
  StyledLinkIcon,
  StyledLinkContent,
  StyledLinkTitle,
} from "./styles";
import { Header } from "../../components/global-header";

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <Header title="Smarter Golf" />
      <StyledLinkGrid>
        <StyledRouteLink to="/round-tracker">
          <StyledLinkIcon $tone="primary"></StyledLinkIcon>
          <StyledLinkContent>
            <StyledLinkTitle>Round Tracker</StyledLinkTitle>
          </StyledLinkContent>
        </StyledRouteLink>
        <StyledRouteLink to="/lagput">
          <StyledLinkIcon $tone="primary"></StyledLinkIcon>
          <StyledLinkContent>
            <StyledLinkTitle>Lagput</StyledLinkTitle>
          </StyledLinkContent>
        </StyledRouteLink>
      </StyledLinkGrid>
    </StyledLandingPage>
  );
};
