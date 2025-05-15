import React from 'react'
import Teachers from '@/components/Teachers'
import StudentD from '@/components/StudentD'
import Admin from '@/components/Admin'

const login = () => {
  return (
    <div>
        <Teachers/>
        <StudentD />
        <Admin/>
    </div>
  )
}

export default login