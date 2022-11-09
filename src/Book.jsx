import React from 'react';

function Book({image,title,author,subject,pub_date}) {
  return (
    <div className="card">
        <div className="left">
            <img src={image} alt="" />
        </div>
        <div className="right">
            <h1>{title}</h1>
            <p>Author: {author}</p>
            <p>Subject: {subject}</p>
            <p>Date of Publish:{pub_date}</p>
        </div>
    </div>
  )
}

export default Book