import React, { useState } from 'react'
import './TabbingSystem.css'
import { blog } from '../Data/data'


const TabbingSystem = () => {

    
    const [activeTab,setActiveTab] = useState(0)
    const [activeContent ,setActiveContent] = useState(blog[0])

    let changeButton = (index)=>{
        
            setActiveTab(index)
            setActiveContent(blog[index])
        
    }
  return (
    <>
     <div className='tabOuter' >
        <h1>Vision and Mission</h1>
        <h3>Tabbing System</h3>
        <ul>
          {
            blog.map((value,index)=>{
                return(
                    <li>
                        <button onClick={()=>{changeButton(index)}} className={(activeTab == index) ?'activeButton' : ' '}>{value.title}</button>
                     </li>
            ) })
          }
        </ul>
        {activeContent !== undefined ?
        <p>
             {activeContent.body}
        </p>
        :
        " "
        }
     </div>
    </>
  )
}

export default TabbingSystem
