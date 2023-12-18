import {FC, useContext, useEffect} from 'react'
import './App.css'
import s from './App.css'
import {Context} from "./main.tsx";
import {Route, Routes} from "react-router-dom";
import MockComponent from "./features/mockComponent";
import LoginPage from "./pages/LoginPage/LoginPage";
import RedirectToPage from "./shared/UI/redirector/RedirectToPage";
import {observer} from "mobx-react-lite";

const App:FC = () => {

    const {viewerStore} = useContext(Context)

    useEffect(()=>{
        if (localStorage.getItem('token')){
            console.log('проверка авторизации')
            viewerStore.checkAuth()
        }
    }, [])


    return (
        <div>
            {
                viewerStore.isAuth ? (
                    <Routes>
                        <Route path='mock/' element={<MockComponent/>}/>
                        <Route path='*' element={<RedirectToPage link={"mock/"}/> } />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='login/' element={<LoginPage/>} />
                        <Route path='*' element={<RedirectToPage link={"login/"}/> } />
                    </Routes>
                )
            }
        </div>
    )
}

export default observer(App);