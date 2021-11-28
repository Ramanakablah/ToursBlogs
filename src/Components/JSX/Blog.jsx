import React from 'react'
import Entry from '../JSX/Entry'
import "../CSS/Blog.css"
import { Link } from 'react-router-dom'

const Blog = () => {

  const Blogs = [
    {
      "_id": "619bcf53753a21fb514ca107",
      "user": "619bced9753a21fb514ca101",
      "name": "Raman",
      "image": "hello",
      "blog": "It was a fun trip totally loved it",
      "place": "Delhi, Gurugram",
      "dateupload": "2021-11-22T17:11:47.347Z",
      "datevisited": "2021-11-22T17:11:47.347Z",
      "__v": 0
    },
    {
      "_id": "619bcf67753a21fb514ca109",
      "user": "619bced9753a21fb514ca101",
      "name": "Raman",
      "image": "hello",
      "blog": "It was a fun trip totally loved it",
      "place": "Rajasthan, Bangarh",
      "dateupload": "2021-11-22T17:12:07.769Z",
      "datevisited": "2021-11-22T17:12:07.769Z",
      "__v": 0
    },
    {
      "_id": "619bd0e5753a21fb514ca10b",
      "user": "619bced9753a21fb514ca101",
      "name": "Raman",
      "image": "hello",
      "blog": "Got Linked To Kurama",
      "place": "Konoha, Kurukshetra",
      "dateupload": "2021-11-22T17:18:29.254Z",
      "datevisited": "2021-11-22T17:18:29.254Z",
      "__v": 0
    },
    {
      "_id": "619bd122753a21fb514ca10e",
      "user": "619bced9753a21fb514ca101",
      "name": "Raman",
      "image": "hello",
      "blog": "Learnet Sage Mode there",
      "place": "Konoha,Mt.Myoboku",
      "dateupload": "2021-11-22T17:19:30.167Z",
      "datevisited": "2021-11-22T17:19:30.167Z",
      "__v": 0
    }
  ]

  return (
    <>
      <div className="Head">
        <div className="User">
          <div>
            <h2>Welcome</h2>
            <h3>User</h3>
          </div>
          <div className="useravatar">
            <img src="https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_640.jpg" alt="" />
          </div>
        </div>
        <h1 className="mx-2 my-4">Blogs</h1>
        <Link to="/add" className="btn btn-primary mx-2"> Add New &#x2B; </Link>
        <hr />
        <div className="container">
          {Blogs.map((blog) => {
            return <div key={blog._id}>
              <Entry name={blog.name} address={blog.place} blog={blog.blog} />
            </div>
          })}
        </div>
      </div>


    </>
  )
}

export default Blog
