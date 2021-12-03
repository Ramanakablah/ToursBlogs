import React,{useState} from 'react'
import Newcontext from './Createcontext'

const Blogcontext = (props) => {
    const url="http://localhost:5000"
    const [allow, setallow] = useState(false)
    const [tempauth, settempauth] = useState("")

   const signin = async (name,email,password,mob)=>{
    const response = await fetch(`${url}/join/auth`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password,mob})
      });
      const answer = await response.json()
      console.log(answer)
      settempauth(answer)   
   }

   const avatar = async ()=>{
    const response = await fetch(`${url}/join/avatar`, {
        method: 'POST', 
        headers: {
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMjVkM2IxYzc2NDUyNWYzNGFhOTNjIn0sImlhdCI6MTYzODAzMDY1MX0.aTNT-OF9KTvCQqK6QKKboXxA7pqDsbxOOSk5XGBd5fA"
  }, body: JSON.stringify()
      });
      const answer = await response.json()
      console.log(answer)   
   }

   const login = async (email,password)=>{ 
    const response = await fetch(`${url}/join/login`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      });
      const answer = await response.json()
      console.log(answer) 
      if(answer.pass)
      {
        setallow(true)
      }  
   }

   const about = async (about)=>{ 
    const response = await fetch(`${url}/join/about`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMjVkM2IxYzc2NDUyNWYzNGFhOTNjIn0sImlhdCI6MTYzODAzMDY1MX0.aTNT-OF9KTvCQqK6QKKboXxA7pqDsbxOOSk5XGBd5fA"        },
        body: JSON.stringify({about})
      });
      const answer = await response.json()
      console.log(answer) 
   }
   const Pass=()=>{
       return allow;
   }

    return (
        <Newcontext.Provider value={{signin,login,Pass,avatar,about}}>
            {props.children}
        </Newcontext.Provider>
    )
}

export default Blogcontext;
