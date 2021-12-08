import React, { useState } from 'react'
import Newcontext from './Createcontext'

const Blogcontext = (props) => {
  const url = "http://localhost:5000"
  const [allow, setallow] = useState(false)
  const [tempauth, settempauth] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMjVkM2IxYzc2NDUyNWYzNGFhOTNjIn0sImlhdCI6MTYzODAzMDY1MX0.aTNT-OF9KTvCQqK6QKKboXxA7pqDsbxOOSk5XGBd5fA")
  const [Blogofuser, setBlogofuser] = useState([])

  const signin = async (name, email, password, mob) => {
    const response = await fetch(`${url}/join/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, mob })
    });
    const answer = await response.json()
    console.log(answer)
    settempauth(answer)
  }

  const avatar = async () => {
    const response = await fetch(`${url}/join/avatar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': tempauth
      }, body: JSON.stringify()
    });
    const answer = await response.json()
    console.log(answer)
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
    console.log(answer)
    if (answer.pass) {
      setallow(true)
      settempauth(answer.auth)
      console.log(tempauth)
    }
  }

  const about = async (about) => {
    const response = await fetch(`${url}/join/about`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify({ about })
    });
    const answer = await response.json()
    console.log(answer)
  }
  const Pass = () => {
    return allow;
  }

  const addblog = async (name, place, blog) => {
    const response = await fetch(`${url}/trip/enter`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify({ name, place, blog })
    });
    const entry = await response.json()
    console.log(entry)
    setBlogofuser(Blogofuser.concat(entry))
  }

  const UsersBlog = async () => {
    const response = await fetch(`${url}/trip/fetchblog`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify()
    });
    const entry = await response.json()
    console.log(entry)
    setBlogofuser(entry)
  }
  const editblog = async (id, placename, experience, location) => {
    const response = await fetch(`${url}/trip/update/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify({ placename, experience, location })
    });
    console.log(placename + " " + experience + " " + location)
    const json = await response.json()
    console.log(json)
    let newblog = JSON.parse(JSON.stringify(Blogofuser))
    for (let index = 0; index < newblog.length; index++) {
      const element = newblog[index];
      if (element._id === id) { newblog[index].name = placename; newblog[index].place = location; newblog[index].blog = experience; console.log(newblog[index]); break; }
    }
    setBlogofuser(newblog);
  }

  const deleteblog = async (id) => {
    const response = await fetch(`${url}/trip/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify()
    });
    const res = await response.json()
    console.log(res)
    const newblog = Blogofuser.filter((Blogofuser) => { return Blogofuser._id !== id })
    setBlogofuser(newblog)
  }

  return (
    <Newcontext.Provider value={{ Blogofuser, signin, login, Pass, avatar, about, addblog, UsersBlog, editblog, deleteblog, allow }}>
      {props.children}
    </Newcontext.Provider>
  )
}

export default Blogcontext;
