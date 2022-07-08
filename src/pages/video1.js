import React from 'react';
import record from '../video-list.json';
import ReactPlayer from 'react-player';

const video1 = () => {
    const current=window.location.pathname;
    const id=current.substr(current.length-1,1);
        return (
        <>
        <>
         <h1>{record[id].title}</h1>
         
        <ReactPlayer controls url={record[id].URL} />
       {
        record[id].tags.map((name,index)=>{
            return (
                <>
                {index?',':' '} {name}
                </>
            )
        })
       }
        </>
    </>
  );
};

export default video1;