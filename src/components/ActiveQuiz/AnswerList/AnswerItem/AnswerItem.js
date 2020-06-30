import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
<<<<<<< HEAD:src/components/AnswerList/AnswerItem/AnswerItem.js
=======
  // console.log('Item props:' , props)
>>>>>>> develop:src/components/ActiveQuiz/AnswerList/AnswerItem/AnswerItem.js

  const cls=[classes.AnswerItem]

  if(props.state){
    cls.push(classes[props.state])
  }
<<<<<<< HEAD:src/components/AnswerList/AnswerItem/AnswerItem.js
=======
  
>>>>>>> develop:src/components/ActiveQuiz/AnswerList/AnswerItem/AnswerItem.js
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