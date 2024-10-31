import { useState } from 'react';
import { getOmen } from '../utils/getOmen';
import './question.scss';

const Question = () => {
  const [q, setQ] = useState('');
  const [stone, setStone] = useState<string | null>(null);
  const pickStone = () => {
    setStone(() => '');
    setTimeout(() => {
      const omen = getOmen(q);
      console.log('omen: ', omen);
      setStone(() => omen);
    }, 1500);
  };
  return (
    <div className="question-container">
      <h1>What is it that troubles your heart?</h1>
      <p>
        The question must be one the heart can answer with a simple yes or no.
      </p>
      <div>
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="" onClick={pickStone}>
          Seek the truth in the prophecy
        </button>
      </div>
      <p>The truth that lies at the journey's end:</p>
      {stone === null ? (
        <></>
      ) : stone === '' ? (
        <p>Searching, sifting, in the quiet dance of discovery..</p>
      ) : (
        <p>{stone === 'Urim' ? '⚪️ No' : '⚫️ Yes'}</p>
      )}
    </div>
  );
};

export default Question;
