import React, { ReactNode } from 'react'

const Homelayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Homelayout