import React from 'react'
import Entry from './Entry'

const Map = () => {

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
          <div className="maphead">
          <h1 className="mx-2 my-4">Blogs</h1>
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

export default Map
