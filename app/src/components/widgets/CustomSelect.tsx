// MUI
import { FormControl, InputLabel, FormHelperText, MenuItem, Select } from '@mui/material'
// Libs
import { Controller, FieldError, Control } from 'react-hook-form'

type Option = {
    value: string,
    label: string
}

type Props = {
    control: Control<any, any>,
    form_control_error: FieldError | undefined,
    label: string,
    name: string,
    options: Option[],
    width?: number,
    full_width?: true
}

export const CustomSelect = ({ control, form_control_error, label, name, options, full_width, width }: Props)=> {

    return(

        <FormControl sx={{width: width}} fullWidth={full_width}>

            <InputLabel error={form_control_error ? true : false}>

                { label }

            </InputLabel>

            <Controller name={name} control={control}
            render={({field, fieldState: {error}}) => (

                <Select
                    error={error ? true : false}
                    {...field}
                    label={label}>

                    {options.map((item)=> (
                        <MenuItem
                            key={item.value}
                            value={item.value}>
                                {item.label}
                        </MenuItem>
                    ))}

                </Select>)}/>

            {form_control_error &&

            <FormHelperText error={form_control_error ? true : false}>

                {form_control_error?.message}

            </FormHelperText> }

        </FormControl>

    )
}
