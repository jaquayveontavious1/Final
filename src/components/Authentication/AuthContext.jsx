import React, { Children } from 'react'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
//getAuth is used to initialize an authentication service
//onAuthStateChanged is used to listen for an an authentication service like sign-in or sign-out
import { createContext, useEffect,useState } from 'react'// imported as they are used to manage state and effects in components

export const AuthContext = createContext()
export const AuthProvider = ({Children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setUser(user)
            setLoading(false);
        });

        return () => unsubscribe()
    },[])

    return(
        <AuthContext.Provider value={{user,loading}}>
            {Children}
        </AuthContext.Provider>
    )
}