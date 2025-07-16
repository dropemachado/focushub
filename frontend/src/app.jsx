import React from 'react';
import MissionList from './components/MissionList';
import AddMission from './components/AddMission';
import ProgressBar from './components/ProgressBar';

export default function App() {
  return (
    <div className="container">
      <h1>FocusHub</h1>
      <ProgressBar />
      <AddMission />
      <MissionList />
    </div>
  );
}
