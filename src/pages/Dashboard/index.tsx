import React, { useState } from 'react';

import { Container, Wrapper } from './styles';
import { Header, Footer } from '../../components';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { DASHBOARD_ANIMATION } from './animations';
import {
  Imodels,
  Lite1,
  Mat1,
  Ingles1,
} from '../../constants/cards-navigation';

const Dashboard: React.FC = () => {
  const [classCertificates, setClassCertificates] = useState<Imodels[]>(
    Ingles1,
  );

  const handleChangeCertificates = (classId: string): void => {
    switch (classId) {
      case 'Ing':
        setClassCertificates(Ingles1);
        break;
      case 'Mat':
        setClassCertificates(Mat1);
        break;
      case 'Lec':
        setClassCertificates(Lite1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Wrapper
          variants={DASHBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <SideBar onChange={handleChangeCertificates} />
          <MainContent model={classCertificates} />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
export default Dashboard;
