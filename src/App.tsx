import React, {useEffect} from 'react'
import './App.scss'
import {Header} from './Header/Header'
import {Routes} from './Routes/Routes'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from './bll/store'
import {ErrorBar} from './components/helpComponent/ErrorBar'
import {initApp} from './fatures/auth/InitialApp/appReducer'
import {Preloader} from './components/helpComponent/Preloader'
import {DefMap} from './fatures/Map'


const App: React.FC = () => {
    const {initialApp, isLoading} = useSelector((state: AppStateType) => state.app)
    const {profile, isAuth} = useSelector((state: AppStateType) => state.login)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initApp())
    }, [dispatch])
    if (!initialApp) return <div>....loading</div>

    return (
        <div className="App">
            <Header profile={profile} isAuth={isAuth}/>
            <ErrorBar/>
            <Routes/>
            {isLoading && <Preloader/>}
        </div>
    )
}

export default App
