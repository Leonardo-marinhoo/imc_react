import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Imc_form from './components/Imc_form'
import './index.scss'
import Panel_header from './components/Panel_header'
import Result from './components/Result'

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [imc, setImc] = useState(0)

  const onCalculate = ()=>{
    if(weight && height){
      const calculatedIMC = weight / (height/100)**2 ;
      setImc(parseFloat(calculatedIMC.toFixed(1)));
    }
  }
  const imcCategories = [
    { min: 0, max: 18.5, classification: "Abaixo do peso" },
    { min: 18.5, max: 24.9, classification: "Peso normal" },
    { min: 25, max: 29.9, classification: "Sobrepeso" },
    { min: 30, max: 34.9, classification: "Obesidade grau 1" },
    { min: 35, max: 39.9, classification: "Obesidade grau 2" },
    { min: 40, max: Infinity, classification: "Obesidade grau 3 (mórbida)" },
  ];

  const classifyIMC = (imc) => {
    const category = imcCategories.find(
      (cat) => imc >= cat.min && imc <= cat.max
    );
    return category ? category.classification : "Valor inválido";
  };



  return (
    <div className='BMI'>
      <Panel_header />
      <div className="BMI__container">
        <Imc_form setHeight={setHeight} setWeight={setWeight} onCalculate={onCalculate} />
        <Result imc={imc} classifyIMC={classifyIMC} />
      </div>
    </div>
  )
}

export default App
