// MUI
import MuiTable from '@mui/material/Table'
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Chip, Tooltip } from '@mui/material'
// Libs
import { Link } from 'react-router-dom'

const Table = ({ columns=[], data=[], actions=[]})=> {

  return (

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 460 }}>
        <MuiTable stickyHeader>

          <TableHead>
            <TableRow>

              {columns.map((coluna, index)=>(

                <TableCell sx={{fontSize: '12px'}} key={index}>
                    {coluna.nome}
                </TableCell>

              ))}

              {actions.map((index)=>(

                <TableCell key={index}></TableCell>

              ))}

            </TableRow>
          </TableHead>

          <TableBody>

            {data.map((instancia) => (

              <TableRow key={instancia.token}>

                {columns.map((coluna, index)=> (

                  <TableCell sx={{fontSize: '11px', padding: '10px 16px'}} key={index}>

                    {coluna.enum  ?

                    <Chip
                      size={'small'}
                      color={coluna.enum[instancia[coluna.chave]]}
                      sx={{fontSize: '10px'}}
                      label={instancia[coluna.chave]}/>

                    :

                    coluna.link  ?

                    <Link to={`/${coluna.link.path}/${instancia[coluna.link.id]}`}>

                        {instancia[coluna.chave]}

                    </Link>

                    :

                    instancia[coluna.chave]}

                  </TableCell>

                ))}

                {actions.map((action, index)=>(

                  <TableCell sx={{padding: '5px 16px 5px'}} key={index}>

                    <Tooltip placement={'left'} title={action.nome}>
                        <IconButton  onClick={()=> action.function(instancia[action.param])}>
                          <action.icon sx={{fontSize: '15px'}}/>
                        </IconButton>
                    </Tooltip>

                  </TableCell>

                ))}

              </TableRow>

            ))}

          </TableBody>

        </MuiTable>
      </TableContainer>
    </Paper>

  )
}

export default Table
