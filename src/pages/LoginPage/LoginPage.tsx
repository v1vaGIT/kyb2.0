import React from 'react';
import LoginForm from "../../features/Authorization/LoginForm/LoginForm";
import {observer} from "mobx-react-lite";
import s from './styles.module.css'

const LoginPage = () => {

    return (
        <div className={s.wrap}>
            <div>
                <p className={s.formTitle}>Войти в систему</p>
                <LoginForm/>
            </div>
        </div>
    );
};

export default observer(LoginPage);