import React from 'react'
import './Stats.css'

const Stats = () => {
    const stats = [
        {
            id: 1,
            value:12,
            title: 'Our Active Members',
            
        },
        {
            id: 2,
            value: 1.5,
            title: 'Our Total Projects',
            
        },
        {
            id: 4,
            title: 'Our Winning Awards',
            value: 14
        },
        {
            id: 3,
            title: 'Our Team members',
            value: 50
        }

    ]
  return (
    <div>
        <div className="cards">
            {
                stats.map((stat) => {
                    return(
                        <div className="card" key={stat.id}>
                        <h1 className='text-2xl' style={{fontWeight:"bold", marginBottom:"15px"}}>+ {stat.value} k</h1>
                        <p>{stat.title}</p>
                    </div>
                    )
                   
                })
            }
        </div>
    </div>
  )
}

export default Stats