import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import PreviewCertificate from './PreviewCertificate';
import { Imodels } from '../../../constants/cards-navigation';
import { ClassContext, StudentList , Tipografia} from '../../../contexts/class';

interface MainContentProps {
  model: Imodels[];
}

const PRICE_PER_STUDENT = 2.5;

const MainContent: React.FC<MainContentProps> = ({ model }) => {
  const [certificateModel, setCertificateModel] = useState(model[0]);
  const [studentList, setStudentList] = useState<StudentList[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [toggleIsOpen, setToggleIsOpen] = useState(false);
  const [tipografia, setTipografia] = useState<Tipografia>(
    Tipografia.tipo1,
   );

  const handleOpenInvoice = () => {
    setToggleIsOpen(!toggleIsOpen);
  }

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

  useEffect(() => {
    const totalStudents = studentList.length
    setTotalPrice(totalStudents*PRICE_PER_STUDENT)
  }, [studentList]);

  return (
    <Container>
      <ClassContext.Provider value={{handleOpenInvoice, toggleIsOpen ,handleCertificateModel,totalPrice, handleRemoveStudent, handleStudentList, handleTipografia, certificateModel, studentList,tipografia }}>
        <NavigationCards models={model} />
        <PreviewCertificate modeloImg={certificateModel.icon} />

      </ClassContext.Provider>
    </Container>
  );
};

export default MainContent;
