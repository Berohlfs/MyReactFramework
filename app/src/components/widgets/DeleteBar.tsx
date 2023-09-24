// MUI
import { Typography, Alert, Link } from '@mui/material'
// React
import { useState } from 'react'

type Props = {
    deleteFunc: ()=> void
}

export const DeleteBar = ({deleteFunc}: Props)=> {

    const [confirm, setConfirm] = useState(false)

    const checkDelete = ()=> {
        if(!confirm){ return setConfirm(true) }
        deleteFunc()
    }

    return (

        <Alert
            sx={{boxShadow: 0}}
            severity={"error"}
            onClick={confirm ? ()=> null : checkDelete}>

            <Typography
                variant={'caption'}
                sx={{cursor: 'pointer'}}>
                    {confirm ? "Tem certeza?" : "Excluir este registro."}
            </Typography>

            {confirm && <>

                <Link
                    sx={{cursor: 'pointer'}}
                    fontSize={11}
                    ml={2}
                    color={'error'}
                    onClick={()=> setConfirm(false)}>
                        Manter
                </Link>

                <Link
                    sx={{cursor: 'pointer'}}
                    fontSize={11}
                    ml={2}
                    color={'error'}
                    onClick={checkDelete}>
                        Excluir
                </Link>

            </>}

        </Alert>

    )
}
