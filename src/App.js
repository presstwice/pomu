import './App.css';
import Timer from "./Timer";
import SettingsButton from "./SettingsButton";
import {useState} from "react";


function App() {
  return (
   <main>
    <SettingsButton />
    <Timer />
    </main> 
  );
}

export default App;
 