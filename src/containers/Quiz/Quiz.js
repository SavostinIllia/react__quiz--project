import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQiuz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component{

    state = { 
        isFinished: true,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: "Do you love me ?",
                rightAnswerId : 1,
                id: 1,
                answers:[
                    {text: 'yes', id:1 },
                    {text: 'no ', id:2 },
                    {text: 'mb ', id:3 },
                ]
            },
            {
                question: "Do I love you ?",
                rightAnswerId : 1,
                id: 2,
                answers:[
                    {text: 'yes', id:1 },
                    {text: 'no ', id:2 },
                    {text: 'mb ', id:3 },
                ]
            }
        ]
        
    }

    onAnswerClickHandler = answerId =>{
        
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key]=== 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if( question.rightAnswerId === answerId) {

            this.setState({
                answerState: {[answerId] : 'success'}
            })

            const timeout = window.setTimeout(()=>{
                if(this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }          

                window.clearTimeout(timeout)
            },1000)

        }else {
            this.setState({
                answerState: {[answerId] : 'error'}
            })
        }
       
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
        
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Please answer all questions</h1>
                    {this.state.isFinished 
                    ?<FinishedQuiz
                    
                    
                    />
                    :<ActiveQiuz 
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                     />
                    }
     
                </div>
            </div>
        )
    }
}

export default Quiz