import React, { useState } from 'react'
import Newcontext from './Createcontext'
import emailjs from 'emailjs-com';

// https://backendforyourtourdiary.herokuapp.com/pimg/1656512833443G-Wallpaper.jpg
const Blogcontext = (props) => {
  const url = "https://backendforyourtourdiary.herokuapp.com"
  const [allow, setallow] = useState(sessionStorage.loggedin ? sessionStorage.loggedin : false)
  const [tempauth, settempauth] = useState(sessionStorage.tempauth ? sessionStorage.tempauth : "")
  const [member, setmember] = useState([])
  const [Blogofuser, setBlogofuser] = useState(sessionStorage.Blogo ? JSON.parse(sessionStorage.Blogo) : [])
  const [onetp, setonetp] = useState(0)
  const [SigninWarning, setSigninWarning] = useState("Checking")
  const [flip, setflip] = useState(false)


  const signin = async (name, email, password, mob, c) => {
    const response = await fetch(`${url}/join/auth`, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, mob })
    });
    const res = await response.json();
    console.log(res);
    if (res.pass) {
      setSigninWarning("Signinpass")
      const signinuser = {
        name: name,
        email: email,
        otp: c
      }
      console.log(signinuser)
      emailjs.send("service_mtz89cf", "template_zd1yq7c", signinuser, "user_AOLeNmrFyKSLf0lOilzWc")
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      settempauth(res.mssg)
      sessionStorage.setItem("signin","true")
    }
    else{
      setSigninWarning("")
    }
  }


  const login = async (email, password) => {
    const response = await fetch(`${url}/join/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    console.log(response)
    const answer = await response.json()
    console.log(answer)
    if (answer.pass) {
      setallow(true)
      settempauth(answer.reply)
      sessionStorage.setItem("tempauth", answer.reply)
      sessionStorage.setItem('loggedin', JSON.stringify(answer.pass))
      User();
    }
    if (!answer.pass) {
      setSigninWarning("Loginwarn")
    }
    return answer.pass;
  }


  const about = async (about) => {
    await fetch(`${url}/join/about`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',

        "auth-token": tempauth
      },
      body: JSON.stringify({ about })
    });
    sessionStorage.removeItem(signin)
    sessionStorage.setItem("signin","false")
  }


  const avatar = async (form) => {
    const respo = await fetch(`${url}/join/avatar`, {
      method: 'POST',
      mode: "cors",
      headers: {
        "auth-token": tempauth
      }, body: form
    });
    console.log(respo);
  }


  const User = async () => {
    const response = await fetch(`${url}/join/fetchblogger`, {
      method: 'GET',
      headers: {
        "auth-token": tempauth
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

  const updateuser = async (name, contact) => {
    const response = await fetch(`${url}/join/edit`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify({ name, contact })
    });
    const memb = await response.json();
    console.log(memb)
    setmember(memb)
    sessionStorage.removeItem("member")
    sessionStorage.setItem("member", JSON.stringify(memb))
  }


  const addblog = async (formdata) => {
    console.log(sessionStorage.tempauth)
    const response = await fetch(`${url}/trip/enter`, {
      method: "POST",
      mode: "cors",
      headers: {
        "auth-token": tempauth
      },
      body: formdata
    });
    console.log(response)
  }


  const UsersBlog = async () => {
    if (tempauth) {
      const response = await fetch(`${url}/trip/fetchblog`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "auth-token": tempauth
        },
        body: JSON.stringify()
      });
      const list = await response.json()
      sessionStorage.setItem("Blogo", JSON.stringify(list))
      setBlogofuser(JSON.parse(sessionStorage.Blogo))
    }
  }


  const editblog = async (id, placename, experience, location) => {
    await fetch(`${url}/trip/update/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify({ placename, experience, location })
    });
    let newblog = JSON.parse(JSON.stringify(Blogofuser))
    for (let index = 0; index < newblog.length; index++) {
      const element = newblog[index];
      if (element._id === id) { newblog[index].name = placename; newblog[index].place = location; newblog[index].blog = experience; console.log(newblog[index]); break; }
    }
    sessionStorage.removeItem(`Blogo`)
    sessionStorage.setItem(`Blogo`, JSON.stringify(newblog))
    setBlogofuser(JSON.parse(sessionStorage.Blogo))
  }


  const deleteblog = async (id) => {
    await fetch(`${url}/trip/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "auth-token": tempauth
      },
      body: JSON.stringify()
    });
    const newblog = Blogofuser.filter((Blogofuser) => { return Blogofuser._id !== id })
    sessionStorage.removeItem("Blogo")
    sessionStorage.setItem("Blogo", JSON.stringify(newblog))
    setBlogofuser(JSON.parse(sessionStorage.Blogo))
  }

  const logout = () => {
    sessionStorage.removeItem("loggedin")
    sessionStorage.removeItem("signin")
    sessionStorage.removeItem("Blogo")
    sessionStorage.removeItem("member")
    sessionStorage.removeItem("tempauth")
    setallow(false)
    settempauth("")
    setmember([])
    setBlogofuser([])
  }


  return (
    <Newcontext.Provider value={{ Blogofuser, signin, login, Pass, flip, setflip, about, addblog, UsersBlog, editblog, deleteblog, allow, onetp, setonetp, member, User, SigninWarning, setSigninWarning, tempauth, avatar, updateuser ,logout }}>
      {props.children}
    </Newcontext.Provider>
  )
}

export default Blogcontext;
