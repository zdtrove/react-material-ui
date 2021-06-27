import { MenuItem } from '@material-ui/core'
import { FormControl, InputLabel, Select as MuiSelect, FormHelperText } from '@material-ui/core'
import React from 'react'

const Select = props => {
    const { name, label, value, error = null, onChange, options } = props

    return (
        <FormControl 
            {...(error && { error: true })} 
            variant="outlined"
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem value="">None</MenuItem>
                {
                    options.map((item, index) =>
                        <MenuItem key={index} value={item.id}>{item.title}</MenuItem>
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}

export default Select
