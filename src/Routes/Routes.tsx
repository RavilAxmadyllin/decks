import { Route, Switch } from 'react-router-dom'
import React from 'react'
import {Login} from '../fatures/auth/Login/ui/Login'
import {RegisterForm} from '../fatures/auth/Registration/ui/Register'
import {Forgot} from '../fatures/auth/Forgot/ui/Forgot'
import {NewPassword} from '../fatures/auth/Forgot/ui/NewPassword'
import {Cards} from '../fatures/Cards/ui/Cards'
import {ProfileContainer} from '../fatures/auth/Profile/ui/ProfileContainer';
import {Users} from '../fatures/Users/ui/Users'
import {DefMap} from '../fatures/Map'

export const PATH_LOGIN = '/login'
export const MAIN = '/'
export const MAP = '/map'
export const PATH_PROFILE = '/profile'
export const PATH_CARD = '/cards/'
export const PATH_REGISTRATION = '/registration'
export const PATH_FORGOT = '/forgot'
export const PATH_RESET = '/reset-password/:token'
export const PATH_USERS = '/users'
export const Routes = () => {
    return (
        <Switch>
            <Route path={PATH_LOGIN} render={ () => <Login />}/>
            <Route exact path={MAIN} render={ () => <ProfileContainer />}/>
            <Route path={MAP} render={ () => <DefMap /> }/>
            <Route path={PATH_PROFILE} render={ () => <ProfileContainer />}/>
            <Route path={PATH_CARD + ':id'} render={ (props) => <Cards {...props}/>}/>
            <Route path={PATH_REGISTRATION} render={ () => <RegisterForm />}/>
            <Route path={PATH_FORGOT} render={ () => <Forgot />}/>
            <Route path={PATH_RESET} render={ (props) => <NewPassword {...props}/>} />
            <Route path={PATH_USERS} render={ () => <Users/>}/>
            <Route path={'*'} render={ () => <div>not found</div>}/>

        </Switch>
    )
};
