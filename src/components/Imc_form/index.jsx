import './index.scss'

function Imc_form({ setHeight, setWeight, onCalculate }) {
    return (
        <>
            <form className='container'>
                <div className="input-field">
                    <span className="input-field__title">Height</span>
                    <div className="input-field__input">
                        <input type="number" onChange={(e) => setHeight(e.target.value)} />
                        <span className="input-field__input__label">Centimeters (cm)</span>
                    </div>
                </div>
                <div className="input-field">
                    <span className="input-field__title">Weight</span>
                    <div className="input-field__input">
                        <input type="number" onChange={(e) => setWeight(e.target.value)} />
                        <span className="input-field__input__label">Kilograms (kg)</span>
                    </div>
                </div>
                <button type='button' className="submit" onClick={onCalculate}>Calculate</button>
            </form>
        </>
    )
}

export default Imc_form 