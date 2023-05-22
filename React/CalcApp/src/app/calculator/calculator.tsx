import styles from './calculator.module.scss';
import React, { useState } from 'react';
import { getSum, getMultiple } from '../helpers/helper';

export function Calculator() {
  const [selectedOperation, setSelectedOperation] = useState('add');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = () => {
    if (selectedOperation === 'add') {
      const sum = getSum([firstNumber, secondNumber]);
      setResult(sum);
    } else if (selectedOperation === 'multiply') {
      getMultiple([firstNumber, secondNumber]);
      setResult(firstNumber * secondNumber);
    }
  };

  return (
    <div className={ styles.calculator }>
      <h2 className={ styles.calculator__title }>Calculator</h2>
      
      <div className={ styles.calculator__operation }>
        <label className={ styles.calculator__radio_label }>
          <input type="radio" name="operation" value="add" checked={selectedOperation === 'add'} onChange={() => setSelectedOperation('add')} className={ styles.calculator__radio_input } /> Addition
        </label>
        <label className={ styles.calculator__radio_label }>
          <input type="radio" name="operation" value="multiply" checked={selectedOperation === 'multiply'} onChange={() => setSelectedOperation('multiply')} className={ styles.calculator__radio_input } /> Multiplication
        </label>
      </div>
      
      <div className={ styles.calculator__input_group }>
        <label className={ styles.calculator__label }>First Number:</label>
        <input type="number" value={firstNumber} onChange={e => setFirstNumber(Number(e.target.value))} className={ styles.calculator__input } />
      </div>
      
      <div className={ styles.calculator__input_group }>
        <label className={ styles.calculator__label }>Second Number:</label>
        <input type="number" value={secondNumber} onChange={e => setSecondNumber(Number(e.target.value))} className={ styles.calculator__input } />
      </div>
      
      <button onClick={calculate} className={ styles.calculator__button }>Calculate</button>
      
      {result !== null && (
        <div className={ styles.calculator__result }>
          <p className={ styles.calculator__result_text }>Result: {result}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
