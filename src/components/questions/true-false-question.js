import React, {useState} from 'react';

const TrueFalseQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState('');
    const [grade, setGrade] = useState(false);

    return (
        <div>
            <h5>
                {grade &&
                    <>
                        {question.question}
                        {
                            question.correct === yourAnswer &&
                            <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                        }
                        {
                            question.correct !== yourAnswer &&
                            <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                        }
                    </>
                }
                {!grade &&
                    <>
                        {question.question}
                    </>
                }
            </h5>
            <ul className="list-group">
                {
                    !grade &&
                    <>
                        <li className="list-group-item">
                            <lable>
                                <input type='radio'
                                       className=''
                                       onClick={() => {
                                           setYourAnswer('true')
                                       }}
                                       name={question._id}/> TRUE
                            </lable>
                        </li>
                        <li className="list-group-item">
                            <lable>
                                <input type='radio'
                                       className=''
                                       onClick={() => {
                                           setYourAnswer('false')
                                       }}
                                       name={question._id}/> FALSE
                            </lable>
                        </li>
                    </>
                }

                {
                    grade &&
                    <>
                        {yourAnswer === question.correct && yourAnswer === 'true' &&
                            <li className='list-group-item list-group-item-success'>
                                <lable>
                                    <input type='radio'
                                           className=''
                                           name={question._id}
                                           checked
                                    />
                                    TRUE
                                    <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                                </lable>
                            </li>
                        }
                        {yourAnswer === question.correct && yourAnswer === 'true' &&
                        <li className='list-group-item list-group-item-danger'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                />
                                FALSE
                                <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                            </lable>
                        </li>
                        }
                        {yourAnswer === question.correct && yourAnswer === 'false' &&
                        <li className='list-group-item list-group-item-danger'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                />
                                TRUE
                                <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                            </lable>
                        </li>
                        }
                        {yourAnswer === question.correct && yourAnswer === 'false' &&
                        <li className='list-group-item list-group-item-success'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       checked
                                />
                                FALSE
                                <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                            </lable>
                        </li>
                        }

                        {yourAnswer !== question.correct && yourAnswer === 'true'
                            &&
                            <li className='list-group-item list-group-item-danger'>
                                <lable>
                                    <input type='radio'
                                           className=''
                                           name={question._id}
                                           checked
                                    />
                                    TRUE
                                    <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                                </lable>
                            </li>
                        }
                        {yourAnswer !== question.correct && yourAnswer === 'true'
                        &&
                        <li className='list-group-item list-group-item-success'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                />
                                FALSE
                                <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                            </lable>
                        </li>
                        }
                        {yourAnswer !== question.correct && yourAnswer === 'false'
                        &&
                        <li className='list-group-item list-group-item-success'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                />
                                TRUE
                                <i className="fas fa-check float-right" style={{color: '#5cb85c'}}></i>
                            </lable>
                        </li>
                        }
                        {yourAnswer !== question.correct && yourAnswer === 'false'
                        &&
                        <li className='list-group-item list-group-item-danger'>
                            <lable>
                                <input type='radio'
                                       className=''
                                       name={question._id}
                                       checked
                                />
                                FALSE
                                <i className="fas fa-times float-right" style={{color: '#d9534f'}}></i>
                            </lable>
                        </li>
                        }
                    </>
                }
            </ul>

            <p>
                Your answer: {yourAnswer}
            </p>

            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        if (yourAnswer === '') {
                            alert('Please choose an answer.')
                        } else {
                            setGrade(!grade)
                        }
                    }}
            >
                Grade
            </button>
            <hr/>

        </div>
    )

}

export default TrueFalseQuestion;