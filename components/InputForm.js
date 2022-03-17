import React from "react";
import { ErrorMessage, useField } from "formik";



const InputForm = (props) => {
  const [field, meta] = useField(props);
//  const checkError = () =>{
//   meta.error && field.name =="Password" ? props.setError(true) : props.setError(false) 
//   console.log(props.error)
//  }
 
	return (
		<div>
			<input
				{...field}
				{...props}
				className={`rounded-md border w-full py-3 md:px-5 px-3 text-sm border-input-border placeholder:text-input-grey outline-0 ${meta.touched && meta.error ? 'border-red-500': null}`}
        // onClick={checkError}
        // onKeyPress={checkError}
			/>
			<ErrorMessage component='p' name={field.name} className='text-red-500 text-xs mt-2' />  
		</div>
	);
};

export default InputForm;
