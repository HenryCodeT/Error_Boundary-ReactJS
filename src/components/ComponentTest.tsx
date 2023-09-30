import React from 'react'

function ComponentTest({ name }: { name: string }) {
  return (
    <div>
      {name.toUpperCase()}
    </div>
  )
}

export default ComponentTest