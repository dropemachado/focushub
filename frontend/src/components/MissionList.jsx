import React from 'react';
import { useMissionStore } from '../logic/missionStore';

export default function MissionList() {
  const { missions, toggleMission } = useMissionStore();

  return (
    <ul>
      {missions.map((m) => (
        <li key={m.id}>
          <label>
            <input
              type="checkbox"
              checked={m.done}
              onChange={() => toggleMission(m.id)}
            />
            {m.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
