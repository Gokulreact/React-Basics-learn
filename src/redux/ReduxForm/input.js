import React from 'react';

const Input = ({
    placeholder='Please Enter',
    input,
    meta,
    name,
})=>{
    return(
        <input type="text" name={name} onChange={input.onChange} vallue={input.value} placeholder={placeholder} />
    )
}

export default Input