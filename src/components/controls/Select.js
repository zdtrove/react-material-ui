import { MenuItem } from '@material-ui/core'
import { FormControl, InputLabel, Select as MuiSelect } from '@material-ui/core'
import React from 'react'

const Select = props => {
    const { name, label, value, onChange, options } = props

    return (
        <FormControl variant="outlined">
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
        </FormControl>
    )
}

export default Select
