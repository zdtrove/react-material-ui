import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export const Form = props => {
    const classes = useStyles()
    return (
        <form className={classes.root} autoComplete="off">
            {props.children}
        </form>
    )
}
