import React from 'react';
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question}) => {
    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                    <TrueFalseQuestion question = {question}></TrueFalseQuestion>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                    <MultipleChoiceQuestion question = {question}></MultipleChoiceQuestion>
            }
        </div>
    )
}

export default Question;