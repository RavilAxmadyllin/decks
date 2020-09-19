import { Route, Switch } from 'react-router-dom'
import React from 'react'
import {Login} from '../fatures/auth/Login/ui/Login'
import {RegisterForm} from '../fatures/auth/Registration/ui/Register'
import {Forgot} from '../fatures/auth/Forgot/ui/Forgot'
import {NewPassword} from '../fatures/auth/Forgot/ui/NewPassword'
import {Cards} from '../fatures/Cards/ui/Cards'
import {ProfileContainer} from '../fatures/auth/Profile/ui/ProfileContainer';
import {Users} from '../fatures/Users/ui/Users'

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/login'} render={ () => <Login />}/>
            <Route path={'/profile'} render={ () => <ProfileContainer />}/>
            <Route path={'/cards/:id'} render={ (props) => <Cards {...props}/>}/>
            <Route path={'/registration'} render={ () => <RegisterForm />}/>
            <Route path={'/forgot'} render={ () => <Forgot />}/>
            <Route path={'/reset-password/:token'} render={ (props) => <NewPassword {...props}/>} />
            <Route path={'/users'} render={ () => <Users/>}/>
            <Route path={'*'} render={ () => <div>not found</div>}/>

        </Switch>
    )
};
