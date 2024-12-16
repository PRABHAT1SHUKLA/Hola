import React from 'react'

const meeting = ({params}:{params:{id: string}}) => {
  return (
    <div>meeting {params.id}</div>
  )
}

export default meeting