import React from 'react'
import style from './FinishedQuiz.module.scss'
import Button from '../Ui/Button/Button'

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0)

    return (
        <div className={style.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem,index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        style[props.results[quizItem.id]]
                    ]

                    return (
                        <li
                            key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join('  ')} />
                        </li>
                    )
                })}
                {/*<li>*/}
                    {/*<strong>1. </strong>*/}
                    {/*How r u*/}
                    {/*<i className={'fa fa-times ' + style.error}/>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<strong>1. </strong>*/}
                    {/*How r u*/}
                    {/*<i className={'fa fa-check ' + style.success}/>*/}
                {/*</li>*/}
            </ul>

            <p>Right answers {successCount} from {props.quiz.length}</p>

            <div>
                   <Button onClick={props.onRetry} type="primary">Repeat</Button>
                   <Button onClick={props.onRetry} type="success">Go to test lists</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz