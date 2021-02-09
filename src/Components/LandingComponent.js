import React, {useState} from 'react';

const LandingComponent = (props) => {
  const [input, setInput] = useState({
      firstNumber: 0,
      secondNumber: 0,
      mathAction: ''
  });

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const calculate = (firstNumber, secondNumber, mathAction) => {
    let solution = 0

    if(mathAction === '+'){
        solution = firstNumber + secondNumber
    } else if (mathAction === '-'){
        solution = firstNumber - secondNumber
    } else if (mathAction === '*'){
        solution = firstNumber * secondNumber
    } else if (mathAction === '/'){
        solution = firstNumber / secondNumber
    } else {
        console.log('Nope sorry')
    }
    console.log(solution)
  }

  return (
    <div>
      Pick your first number:<input type="text" name="firstNumber" value={input.firstNumber} onChange={handleChange}/> 
      Pick your second number:<input type="text" name="secondNumber" value={input.secondNumber} onChange={handleChange}/>
      Pick either +, -, *, or /:<input type="text" name="mathAction" value={input.mathAction} onChange={handleChange}/>
      <div>
          <h1>Solve?</h1>
          <button onClick={calculate}>Calculate</button>
      </div>
    </div>
  )
}

export default LandingComponent;