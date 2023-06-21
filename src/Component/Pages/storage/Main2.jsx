import React from 'react'
import '../Main2.css'

export default function  Floor() {
    const demo = [{
        id: 1,
        name: "Floor 1"
    },
    {
        id: 2,
        name: "Floor 2"
    },
    {
        id: 3,
        name: "Floor 3"
    },{
        id: 4,
        name: "Floor 4"
    }
,{
    id: 5,
    name: "Floor 5"
}]
    return (
        <div className="body">
                <div className="grandchild">
                {demo.map(demo=>(
                    <div className="grandchild_body" key={demo.id}>
                        <div className="grandchild_content">
                            <div className="grandchild_item">
                            {demo.name}
                            </div>
                       
                        </div>
                    
                    </div>
                ))}
            </div>
            <div className="admin">
                        <button>Back</button>
                    </div>
            </div>
    )
}
