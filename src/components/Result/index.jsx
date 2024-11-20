import React from 'react'
import './index.scss'

const Result = ({ imc, classifyIMC }) => {
    return (
        <div className="result">
            <div className="result__bmi">
                <h4 className="title">
                    {imc}
                </h4>
                <span className="subtitle">BMI</span>
            </div>
            <div className="result__classification">
                <h4 className="title">{classifyIMC(imc)}</h4>
                <span className="subtitle">classification</span>

            </div>

        </div>
    )
}

export default Result