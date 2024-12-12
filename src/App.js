import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 1) {
      setProblem(input);
      setInput('');
      setStep(2);
    } else if (step === 2) {
      setSolution(input);
      setInput('');
      setStep(3);
    }
  };

  return (
    <div className="App">
      <div>
        {step === 1 && (
          <div>
            <p>Hello! What is the problem you are looking to get help with?</p>
          </div>
        )}
        {step === 2 && (
          <div>
            <p>I see your problem is: "{problem}". What do you think should be the best way to solve it?</p>
          </div>
        )}
        {step === 3 && (
          <div>
            <p>OK! Looks like you know what to do. Go ahead and do it!</p>
            <div>
              <p><strong>Problem:</strong> {problem}</p>
              <p><strong>Proposed Solution:</strong> {solution}</p>
            </div>
          </div>
        )}
      </div>
      {step < 3 && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={step === 1 ? 'Describe your problem...' : 'Propose a solution...'}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;