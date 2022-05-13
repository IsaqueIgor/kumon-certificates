import React, { useState } from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import PreviewCertificate from './PreviewCertificate';
import { Imodels } from '../../../constants/cards-navigation';
import { ClassContext, StudentList , Tipografia} from '../../../contexts/class';

interface MainContentProps {
  model: Imodels[];
}

const MainContent: React.FC<MainContentProps> = ({ model }) => {
  const [certificateModel, setCertificateModel] = useState(model[0]);
  const [studentList, setStudentList] = useState<StudentList[]>([]);
  const [tipografia, setTipografia] = useState<Tipografia>(
    Tipografia.tipo1,
   );

  const handleCertificateModel = (item: Imodels): void => {
    setCertificateModel(item)
  };

  const handleStudentList = (student: string): void => {
    setStudentList([...studentList, {name: student}])
  };

  const handleRemoveStudent = (nameToBeRemove: string): void => {
    const newList = studentList.filter((student) => {
      return student.name !== nameToBeRemove;
   })
   setStudentList(newList)
  };

  const handleTipografia = (tipo: Tipografia): void => {
    setTipografia(tipo)
  };

  return (
    <Container>
      <ClassContext.Provider value={{handleCertificateModel, handleRemoveStudent, handleStudentList, handleTipografia, certificateModel, studentList,tipografia }}>
        <NavigationCards models={model} />
        <PreviewCertificate modeloImg={certificateModel.icon} />
      </ClassContext.Provider>
    </Container>
  );
};

export default MainContent;
