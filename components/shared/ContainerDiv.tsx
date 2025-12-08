import React, { ReactElement } from 'react'

const ContainerDiv = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-w-7xl mx-auto px-6'>
        {children}</div>
  )
}

export default ContainerDiv