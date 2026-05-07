import React from 'react'
import Ourserviceherosection from '../Components/Ourserviceherosection'
import Frontendservice from '../Components/Frontendservice'
import AskedQuestion from '../Components/AskedQuestion'


const Ourservice = ({comingSoon}) => {
  return (
    <div className=''>
      <Ourserviceherosection comingSoon={comingSoon} />
      <Frontendservice />
      <AskedQuestion />
    </div>
  )
}

export default Ourservice