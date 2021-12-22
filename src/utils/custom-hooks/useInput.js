import { useState } from 'react';

const useInput = (validator)=>{
    const [value,setValue] = useState('');
    const [isTouched , setTouched] = useState(false);

    const valueIsValid = validator(value);
    const hasError = !valueIsValid && isTouched;

    const handleChange = (event)=>{
        setValue(event.target.value);
    }

    const inputBlurHandler = (event)=>{
        setTouched(p => true);
    }

    const reset = ()=>{
        setValue('');
        setTouched(false);
    }
    return {
        value,
        handleChange,
        hasError,
        inputBlurHandler,
        reset,
        valueIsValid
    }
}

export default useInput;