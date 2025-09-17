import Profile from './ui/Profile'
import Settings from './ui/Settings'
import Interests from './ui/Interests'
import { useState } from 'react'

const TabComponent = () => {
  const [isActive, SetIsActive] = useState(0)
  const [data, setData] = useState({
    name: "Emran",
    age: "20",
    email: "name@email.com",
    interests: ["music", "coding"],
  })
  const tabs = [
    {
      name: "Profile",
      component: Profile
    },
    {
      name: "Interests",
      component: Interests

    },
    {
      name: "Settings",
      component: Settings
    }

  ]

  const ActiveTabComponent = tabs[isActive].component

  return (
    <div>
      <div className='tab-heading'>
        {tabs.map((item, index) => {
          return (

            <div key={index} onClick={() => SetIsActive(index)} className='tab-item'>{item.name}</div>
          )
        })}

      </div>
      <div className='tab-body'>
        <ActiveTabComponent data={data} setData={setData} />
      </div>

    </div>
  )
}

export default TabComponent
