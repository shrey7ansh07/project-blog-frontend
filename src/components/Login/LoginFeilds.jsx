import {Input, loginFields} from '../index'
import { useState } from 'react';

function LoginFeilds() {
  let fieldsState = {};
  loginFields.forEach(field=>fieldsState[field.id]='');
  const [loginState,setLoginState]=useState(fieldsState);
  const handleChange=(e)=>{
      setLoginState({...loginState,[e.target.id]:e.target.value})}
    return(
    <form action="">
      <div>
        {loginFields.map( (field,index) => 
                <Input
                key={index}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                />

        )}
      </div>

    </form>
  )
}
export default LoginFeilds