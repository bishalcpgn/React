import React from 'react'
import Items from './Items'

const Box = (props) => {

  const items = props.todos.map((eachData, index) => {
    return <Items removeHandler={props.removeHandler} key={index} id={index} item={eachData.data} time={eachData.time} />
  })

  return (
    <div className='p-3'>
      {items}

    </div>
  )
}

export default Box 