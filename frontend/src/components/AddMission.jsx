import React, { useState } from 'react';
import { useMissionStore } from '../logic/missionStore';

export default function AddMission() {
  const [text, setText] = useState('');
  const { addMission } = useMissionStore();

  const handleAdd = () => {
    if (text.trim() !== '') {
      addMission(text.trim());
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nova missão..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
