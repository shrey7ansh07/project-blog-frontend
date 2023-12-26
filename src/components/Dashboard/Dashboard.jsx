import React from 'react'
import Admin from './ProfileComp/Admin'
import {Heading} from "../index"
function Dashboard() {
  return (
    <div>
        <Admin/>
        <Heading text = "My Blogs"/>

    </div>
  )
}

export default Dashboard