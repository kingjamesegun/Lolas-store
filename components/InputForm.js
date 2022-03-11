import React from 'react'

const InputForm = ({type, id, placeholder}) => {
  return (
    <input
    type={type}
    id={id}
    className='rounded-md border w-full py-3 md:px-5 px-3 text-sm border-input-border placeholder:text-input-grey outline-0'
    placeholder={placeholder}
/>
  )
}

export default InputForm