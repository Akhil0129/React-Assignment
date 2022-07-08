import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/Video1/1",
            name:"Video1",
        },
        {
            path:"/Video2/2",
            name:"Video2",
        },
        {
            path:"/Video3/3",
            name:"Video3",
            
        },
        {
            path:"/Video4/4",
            name:"Video4",
           
        },
        {
            path:"/Video5/5",
            name:"Video5",
            
        },
        {
            path:"/Video6/6",
            name:"Video6",
           
        }
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               <div className="top_section">
               <NavLink to='/'>
                   <h1  className="logo">Videos</h1>
                   </NavLink>
                   <div  className="bars">
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;