import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import SectionApresentation from '../../components/SectionApresentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialLeft from '../../components/SocialLeft';
import { HomeContainer, ContentLeft, ContentRight } from './style';
import EmailRight from '../../components/EmailRight';
import SectionAbout from '../../components/SectionAbout';
import SectionExperience from '../../components/SectionExperience';
import SectionProjects from '../../components/SectionProjects';
import SectionContact from '../../components/SectionContact';
import SectionFooter from '../../components/SectionFooter';
import LanternEffect from '../../components/LanternEffect';

export default function Home() {
  return (
    <HomeContainer>
      <LanternEffect />
      <Header />
      <Main>
        <SectionApresentation />
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionContact />
        <SectionFooter />
      </Main>
      <ContentLeft>
        <SocialLeft />
      </ContentLeft>
      <ContentRight>
        <EmailRight />
      </ContentRight>
    </HomeContainer>
  );
}
