// https://axios-http.com/ptbr/docs/intro

// Libs
import axios from 'axios'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const APIInstance = (navigate)=> {

    const instance = axios.create({
        baseURL: 'https://hp-api.onrender.com',
        timeout: 20000,
        // withCredentials: true
    })

    instance.interceptors.response.use(
        response=> response,
        error=> {

            if(error?.response?.status === 401){ // Unauthorized

                navigate && navigate('/')
                Cookies.remove('access')
                toast.warning('Acesso inválido ou expirado (401).', {toastId: 'invalid-token'})

            }else if(error?.response?.status === 400){ // Bad Request

                toast.warning('Dados inválidos (400).', {toastId: 'invalid-client'})

            }else if(error?.response?.status === 404){ // Not Found

                toast.warning('Instância não existente (404).', {toastId: 'not-found'})

            }else if(error?.response?.status === 409){ // Conflict

                toast.warning('Instância já existente (409).', {toastId: 'instance-override'})

            }else if(error?.response?.status === 500){ // Internal Server Error

                toast.error('Erro interno do servidor (500).', {toastId: 'server-error'})

            }else if(error.code === 'ECONNABORTED' && error.message.includes('timeout')) { // Request Timeout

                toast.error('Não foi possível se conectar ao servidor.', {toastId: 'connection-error'})

            }else{ // Unknown

                toast.error('Houve um erro.', {toastId: 'generic-error'})

            }

            console.error(error)

            return Promise.reject(error)

    })

    return instance
}

export default APIInstance
