import ReactSlider from 'react-slider';
import './slider.css'
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./BackButton"

function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <div style={{textAlign:'left'}}> 
            <label>work: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={'slider'}
                value={settingsInfo.workMinutes}
                thumbClassname={'thumb'}
                trackClassName={'track'}
                min={1}
                max={120}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)} 
            />
            <label> break: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider
                className={'slider green'}
                thumbClassname={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                min={1}
                max={120}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)} 
            />
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    );
}

export default Settings 