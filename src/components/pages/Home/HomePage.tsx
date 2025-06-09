import React from 'react';
import Intro from './Intro';
import Belt from './Belt';
import PsychologyCenter from './PsychologyCenter';
import Appointments from './Appointments';
import Services from './Services';
import Therapists from './Therapists';
import Events from './Events';
import OnlineConsultations from './OnlineConsultations';
import Preferences from './Preferences';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Intro />
      <Belt />
      <PsychologyCenter />
      <Appointments />
      <Services />
      <Therapists />
      <Events />
      <OnlineConsultations />
      <Preferences />
    </div>
  );
};

export default HomePage;