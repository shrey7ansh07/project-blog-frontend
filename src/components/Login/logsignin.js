const loginFields=[
    {
        labelText:"Email or Username",
        labelFor:"Email or Username",
        id:"email-username",
        name:"email-username",
        type:"email-username",
        autoComplete:"email-username",
        isRequired:true,
        placeholder:"Email or Username",   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",   
    }
]

const signupFields=[
    {
        labelText:"Fullname",
        labelFor:"fullname",
        id:"fullname",
        name:"fullname",
        type:"text",
        autoComplete:"fullname",
        isRequired:true,
        placeholder:"Fullname",


    },
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username",


    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address",   

    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",
   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password", 
  
    }
]

export {loginFields,signupFields}