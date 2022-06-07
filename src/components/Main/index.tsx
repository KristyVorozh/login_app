import React, {useState} from 'react';
import './style.sass';
import Logo from './img/logo.svg';
import InputMask from "react-input-mask";
import ModalOpen from "../Modal";

const Main = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [recovery, setRecovery] = useState(false);
    const [modal, setModal] = useState(false);

    const signIn = () => {
      if (login === '+7-111-111-11-11' && password === '123456') setStatus('Успешно')
      else setStatus('Логин/пароль не верный')
    }
    const openModal = () => {
      if (login) {
          setModal(true)
          setStatus('')
      } else setStatus('Введите телефон')
    }
    const openRecovery = () => {
        setRecovery(true)
        setStatus('')
    }
    return (
        <div className='main'>
            <div className="main_section">
                <img src={Logo} alt=""/>
                {!recovery ?
                    <>
                        <div className="main_input">
                            <div className="main_input-content">
                                <p>Введите логин</p>
                                <InputMask mask="+7-999-999-99-99" value={login || ''} onChange={(e: any)=>setLogin(e.target.value)}/>
                            </div>
                            <div className="main_input-content">
                                <p>Введите пароль</p>
                                <input value={password || ''} onChange={(e) => setPassword(e.target.value)} type="password"/>
                            </div>
                        </div>
                        <div onClick={openRecovery} className="main_recovery">
                            Забыли пароль?
                        </div>
                        {status &&
                            <p>{status}</p>
                        }
                        <button onClick={signIn}>
                            ВОЙТИ
                        </button>
                    </>
                    :
                    <>
                        {modal &&
                            <ModalOpen modal={modal} login={login} setModal={setModal} setRecovery={setRecovery} setLogin={setLogin}/>
                        }
                        <div className='main_recovery-title'>Восстановление пароля</div>
                        <div className="main_input-content">
                            <p>Введите номер телефона</p>
                            <InputMask mask="+7-999-999-99-99" value={login || ''} onChange={(e)=>setLogin(e.target.value)}/>
                        </div>
                        <div className='main_callback' onClick={()=>setRecovery(false)}>назад</div>
                        {status &&
                            <p>{status}</p>
                        }
                        <button onClick={openModal}>
                            ПОЗВОНИТЬ
                        </button>
                    </>
                }
            </div>
        </div>
    );
};

export default Main;
