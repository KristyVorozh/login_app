import React from 'react';
import Modal from 'react-modal';
import '../Main/style.sass';

interface IModal {
    modal: boolean
    setModal: any
    setRecovery: any
    setLogin: any
    login: string
}
const ModalOpen: React.FC <IModal> = ({modal, setModal, setRecovery, setLogin, login}) => {
    const closeModal = () => {
        setLogin(login)
        setModal(false)
        setRecovery(false)
    }
    return (
        <Modal ariaHideApp={false} isOpen={modal} >
            <p className='close' onClick={closeModal}>X</p>
            <div>Ваш пароль 123456</div>
        </Modal>
    );
};

export default ModalOpen;
