import { createContext, useContext } from 'react';
import { Imodels } from '../constants/cards-navigation';

export interface StudentList {
  name: string
}

export enum Tipografia {
  tipo1 = 'tipo1',
  tipo2 = 'tipo2',
  tipo3 = 'tipo3',
}

export type ClassContextType = {
    studentList: StudentList[];
    certificateModel: Imodels
    tipografia: Tipografia
    handleStudentList: (student: string) => void;
    handleRemoveStudent: (student: string) => void;
    handleTipografia: (tipo: Tipografia) => void;
    handleCertificateModel: (certificado: Imodels) => void;
}

export const ClassContext = createContext<ClassContextType>({
  handleCertificateModel: () => null ,
  handleRemoveStudent: () => null,
  handleStudentList: () => null,
  handleTipografia: () => null,
  certificateModel: {icon: '', id: '', label: ''},
  studentList: [] ,
  tipografia: Tipografia.tipo1
});

export const useTheme = () => useContext(ClassContext);
