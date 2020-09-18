import { Route, Switch } from 'react-router-dom'
import React from 'react'
import {Login} from '../fatures/01-auth/Login/ui/Login'
import {RegisterForm} from '../fatures/01-auth/Registration/ui/Register'
import {Forgot} from '../fatures/01-auth/Forgot/ui/Forgot'
import {NewPassword} from '../fatures/01-auth/Forgot/ui/NewPassword'
import {Cards} from '../fatures/Cards/ui/Cards'
import {ProfileContainer} from '../fatures/01-auth/Profile/ui/ProfileContainer';

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/login'} render={ () => <Login />}/>
            <Route path={'/profile'} render={ () => <ProfileContainer />}/>
            <Route path={'/cards/:id'} render={ (props) => <Cards {...props}/>}/>
            <Route path={'/registration'} render={ () => <RegisterForm />}/>
            <Route path={'/forgot'} render={ () => <Forgot />}/>
            <Route path={'/reset-password/:token'} render={ (props) => <NewPassword {...props}/>} />
            <Route path={'*'} render={ () => <div>not found</div>}/>
        </Switch>
    )
};
