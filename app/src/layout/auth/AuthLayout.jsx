// Layout components
import Static from './Static'
import Footer from '../both/Footer'
// MUI
import { Box } from '@mui/material'
// Libs
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'
// React hooks
import { createContext, useState } from 'react'
export const AuthLayoutContext = createContext()

const AuthLayout = ({children})=> {

    const [breadcrumbs, setBreadcrumbs] = useState([])

    return (<>

        {Cookies.get('access')

        ?

        <AuthLayoutContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>

            <Static/>

            <Box position={'relative'} top={'55px'}>


                {children}


            </Box>

        </AuthLayoutContext.Provider>

        :

        <Navigate to={'/'}/> }

        <Footer/>

    </>)
}

export default AuthLayout
