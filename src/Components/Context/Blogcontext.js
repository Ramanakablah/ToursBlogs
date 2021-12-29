import React, { useState } from 'react'
import Newcontext from './Createcontext'

const Blogcontext = (props) => {
  const url = "http://localhost:5000"
  const [allow, setallow] = useState(false)
  const [tempauth, settempauth] = useState("")
  const [member, setmember] = useState([])
  const [Blogofuser, setBlogofuser] = useState(sessionStorage.Blogo?JSON.parse(sessionStorage.Blogo):[])
  const [onetp, setonetp] = useState(0)
  const [flip, setflip] = useState(false)
  
  const signin = async (name, email, password, mob) => {
    const response = await fetch(`${url}/join/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, mob })
    });
    const answer = await response.json()
    settempauth(answer)
  }


  const login = async (email, password) => {
    const response = await fetch(`${url}/join/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const answer = await response.json()
    if (answer.pass) {
      setallow(true)
      settempauth(answer.auth)
      sessionStorage.setItem("tempauth",answer.auth)
    }
  }


  const about = async (about) => {
    await fetch(`${url}/join/about`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": sessionStorage.getItem("tempauth")
      },
      body: JSON.stringify({ about })
    });

  }


  const avatar = async(form)=>{
    const respo =  await fetch(`http://localhost:5000/join/avatar`, {
      method: 'POST',
      mode:"cors",
      headers: {
        "auth-token" :sessionStorage.tempauth
      }, body:form
  });
  console.log(respo);
  }


  const User = async () => {
    const response = await fetch(`${url}/join/fetchblogger`, {
      method: 'GET',
      headers: {
        "auth-token": sessionStorage.getItem("tempauth")
      },
      body: JSON.stringify()
    });
    const ent = await response.json()
    sessionStorage.setItem("member", JSON.stringify(ent))
    setmember(JSON.parse(sessionStorage.member))
}

  const Pass = () => {
    return allow;
  }

  const addblog = async (formdata) => {
    console.log(sessionStorage.tempauth)
    const response = await fetch(`${url}/trip/enter`, {
      method: "POST",
      mode:"cors",
      headers: {
        "auth-token": sessionStorage.tempauth
      },
      body:formdata
    });
    console.log(response)
  }


  const UsersBlog = async () => {
    if (tempauth) {
      const response = await fetch(`${url}/trip/fetchblog`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "auth-token": sessionStorage.getItem("tempauth")
        },
        body: JSON.stringify()
      });
       const list = await response.json()
       sessionStorage.setItem("Blogo",JSON.stringify(list))
       setBlogofuser(JSON.parse(sessionStorage.Blogo))
    }
  }


  const editblog = async (id, placename, experience, location) => {
    await fetch(`${url}/trip/update/${id}`, {
      method: "PUT", 
      headers: {
        'Content-Type': 'application/json',
        "auth-token": sessionStorage.getItem("tempauth")
      },
      body: JSON.stringify({ placename, experience, location })
    });
    let newblog = JSON.parse(JSON.stringify(Blogofuser))
    for (let index = 0; index < newblog.length; index++) {
      const element = newblog[index];
      if (element._id === id) { newblog[index].name = placename; newblog[index].place = location; newblog[index].blog = experience; console.log(newblog[index]); break; }
    }
    sessionStorage.removeItem(`Blogo`)
    sessionStorage.setItem(`Blogo`,JSON.stringify(newblog))
    setBlogofuser(JSON.parse(sessionStorage.Blogo))
  }


  const deleteblog = async (id) => {
    await fetch(`${url}/trip/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "auth-token":sessionStorage.getItem("tempauth")
      },
      body: JSON.stringify()
    });
    const newblog = Blogofuser.filter((Blogofuser) => { return Blogofuser._id !== id })
    sessionStorage.removeItem("Blogo")
    sessionStorage.setItem("Blogo", JSON.stringify(newblog))
    setBlogofuser(JSON.parse(sessionStorage.Blogo))
  }


  return (
    <Newcontext.Provider value={{ Blogofuser, signin, login, Pass, flip, setflip, about, addblog, UsersBlog, editblog, deleteblog, allow, onetp, setonetp, member, User, tempauth, avatar}}>
      {props.children}
    </Newcontext.Provider>
  )
}

export default Blogcontext;
