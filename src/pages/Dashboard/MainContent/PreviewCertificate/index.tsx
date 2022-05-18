import React, { useContext, useState } from 'react';

import PreviewImg from './PreviewImg';
import {
  Container,
  ConfirmWrapper,
  PriceContainer,
  TextPrice,
  TextTotal,
  InvoiceContainer,
  InvoiceTitle,
  MainTitle
} from './styles';
import { Button } from '../../../../components';
import { ClassContext, Tipografia } from '../../../../contexts/class';
import StudentsList from '../StudentList';
import { options } from '../../../../constants';
import Modal from "react-modal";

Modal.setAppElement("#root");
interface PreviewCertificate {
  modeloImg: string;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const PreviewCertificate: React.FC<PreviewCertificate> = ({ modeloImg }) => {
  const { handleTipografia, tipografia, totalPrice , handleOpenInvoice, toggleIsOpen} = useContext(ClassContext);
  const [namePreview, setNamePreview] = useState('');

  const onChangeText = (event: any) => {
    setNamePreview(event.target.value);
  };

  return (
    <Container>
      <div>
        <div>
          <h3>Preview</h3>
          Vista previa del modelo de certificado
        </div>
      </div>
      <div>
        <div>
          {' '}
          <h4>Tipografía:</h4>
          <select
            name="typografia"
            id="typo"
            placeholder="Please choose"
            value={tipografia}
            onChange={(e) => handleTipografia(e.target.value as Tipografia)}
          >
            {options.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div>
          {' '}
          <h4>Previa del nombre: </h4>
          <input
            type="text"
            placeholder=" "
            value={namePreview}
            onChange={onChangeText}
          />
        </div>
      </div>
      <PreviewImg certificateImg={modeloImg} namePreview={namePreview}  selectedTipografia={tipografia} />
      <StudentsList />
      <PriceContainer>
        <TextTotal>
        Subtotal:
          <TextPrice>
            ${totalPrice} MXN
          </TextPrice>
          </TextTotal>
          </PriceContainer>
      <ConfirmWrapper>
        <Button onClick={handleOpenInvoice}>Enviar</Button>
      </ConfirmWrapper>
      <Modal
        isOpen={toggleIsOpen}
        onRequestClose={handleOpenInvoice}
        contentLabel="My dialog"
        style={customStyles}
      >
        <InvoiceContainer>
          <InvoiceTitle>
            <MainTitle>
              <h4>INVOICE</h4>
              <span>#89 292</span>
            </MainTitle>

          <span>16/02/2019</span>
          </InvoiceTitle>
        </InvoiceContainer>

      </Modal>
    </Container>
  );
};

export default PreviewCertificate;
