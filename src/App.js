import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const actualColor = disabled ? 'grey' : buttonColor;

  return (
    <div>
      <button
        style={{ backgroundColor: actualColor }}
        onClick={(() => setButtonColor(newButtonColor))}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        checked={!disabled}
        onChange={(e) => setDisabled(!e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
