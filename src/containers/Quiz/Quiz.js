import React, {Component} from 'react'
import style from './Quiz.module.scss'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        results: {}, // {[id]: success/error}
        finished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' or 'error'
        quiz : [
            {
                question: 'How much is the fish?',
                rightAnswerID: 2 ,
                id: 1,
                answers: [
                    {text: '100', id: 1},
                    {text: '2', id: 2},
                    {text: '4552', id: 3},
                    {text: '154', id: 4}
                ]
            },
            {
                question: 'What is the best lib/FW',
                rightAnswerID: 1 ,
                id: 2,
                answers: [
                    {text: 'ReactJS', id: 1},
                    {text: 'Vue', id: 2},
                    {text: 'jQuery', id: 3},
                    {text: 'Assembler', id: 4}
                ]
            },

        ]
    }

    onAnswerClickHandler = (answerID) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerID === answerID) {
            if (!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState : {[answerID] : 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        finished: true
                    })
                } else {
                    this.setState({
                        activeQuestion : this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerID]: 'error'},
                results
            })
        }
    }
    retryHandler = () => {
        this.setState({
            activeQuestion : 0,
            answerState: null,
            finished: false,
            results: {}
        })
    };

    isQuizFinished() {
        console.log('lenght', this.state.quiz.length,this.state.activeQuestion +1)
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Fill all answers</h1>
                    {
                        this.state.finished
                            ? <h1>
                                <FinishedQuiz
                                    results={this.state.results}
                                    quiz={this.state.quiz}
                                    onRetry={this.retryHandler}
                                />
                            </h1>
                            :
                            <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLenght={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Quiz