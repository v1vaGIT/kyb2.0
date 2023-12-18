import React from 'react';
import {observer} from "mobx-react-lite";

const MockComponent = () => {
    return (
        <div>
            Пользователь авторизован!
        </div>
    );
};

export default observer(MockComponent);