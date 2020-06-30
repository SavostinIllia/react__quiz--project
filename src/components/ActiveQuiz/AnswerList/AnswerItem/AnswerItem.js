import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
  // console.log('Item props:' , props)

  const cls=[classes.AnswerItem]

  if(props.state){
    cls.push(classes[props.state])
  }
  
  return(
      <li
        id={props.answer.id}
        className={cls.join(' ')}
        onClick={() => props.onAnswerClick(props.answer.id)}>
        { props.answer.text }
      </li>
  )
}

export default AnswerItem