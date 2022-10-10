import React, { useState } from 'react'

export default function Tabs() {
    const [activeTab,setActiveTab] = useState(1)

    const fakeTabs = [
        {
            id:1,
            name: "Valorant"
        },
        {
            id:2,
            name: "Lmht"
        },
        {
            id:3,
            name: "Liên quân mobile"
        }
    ]
  return (
    <div className="list-tab">
    {
        fakeTabs.map((tab,index)=>{
            return(
                <button onClick={() => setActiveTab(tab.id)} className={`${activeTab === tab.id ? 'active' :''}`} key={index}>{tab.name}</button>
            )
        })
    }
</div>
  )
}
