// MUI
import { TextField, Stack, Button } from "@mui/material"
// Components
import Mask from '../../components/Mask'
import PageCard from '../../components/PageCard'
import PasswordAdornment from "../../components/PasswordAdornment"
// Libs
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
// React hooks
import { useContext, useState } from 'react'
import { AppContext } from '../../App'

const Login = ()=> {

    const [password_visible, setPasswordVisible] = useState(false)

    const {setLoading} = useContext(AppContext)

    const navigate = useNavigate()

    // Schema de validação
    const validacao_login = yup.object({
        cpf: yup.string().required('Obrigatório').length(14, 'Inválido'),
        senha: yup.string().required('Obrigatório')
    })

    // Hook form
    const { handleSubmit, control } = useForm({
        resolver: yupResolver(validacao_login),
        defaultValues: {
          'cpf': '',
          'senha': ''
        }
      })

    // onSubmit
    const login = async(data)=> {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            Cookies.set('access', 'access')
            navigate('/characters')
        },1500)
    }

    return (

        <PageCard
            max_width={300}
            title={'Login'}
            caption={'Seja bem vindo!'}
            link={{text: 'Ainda não é parceiro?', path: '/cadastro', label: 'Cadastre-se'}}>

            <form onSubmit={handleSubmit((data)=>login(data))}>

                <Stack spacing={2}>

                    <Controller name={'cpf'} control={control}
                        render={({field, fieldState: {error}}) => (
                        <TextField
                            label={'CPF'}
                            placeholder={'Digite seu CPF'}
                            {...field}
                            error={error ? true : false}
                            helperText={error?.message}
                            InputProps={{
                                inputComponent: Mask,
                                inputProps: {mask: '000.000.000-00'}
                            }}
                        />)}
                    />

                    <Controller name={'senha'} control={control}
                        render={({field, fieldState: {error}}) => (
                        <TextField
                            label={'Senha'}
                            placeholder={'Digite sua senha'}
                            {...field}
                            error={error ? true : false}
                            helperText={error?.message}
                            type={password_visible ? '' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <PasswordAdornment
                                        visible={password_visible}
                                        setVisible={setPasswordVisible}/>
                                )
                            }}
                        />)}
                    />

                    <Button type={'submit'}>Login</Button>

                </Stack>

            </form>

        </PageCard>

    )
}

export default Login