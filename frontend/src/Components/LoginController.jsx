import React, { useState, createContext } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Users from './Users';

export const UserContext = createContext()

export const LoginController = () => {
    const [user, setUser] = useState({username: "", email: "", password: ""})

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <Users/>
            </UserContext.Provider>
        </div>
    )
}