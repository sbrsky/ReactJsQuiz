import React from 'react'
import styles from './ActiveQuiz.module.scss'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
    <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>

            <small>{props.answerNumber} from {props.quizLenght}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />

    </div>
)

export default ActiveQuiz