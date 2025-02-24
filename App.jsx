import { useState } from 'react';
import './App.css';

function App() {
    const [color, setColor] = useState("#ffffff");

    const changeColor = (event) => {
        setColor(event.target.value);
    };

    const getTextColor = (bgColor) => {
        const color = bgColor.substring(1); 
        const rgb = parseInt(color, 16); 
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >>  8) & 0xff;
        const b = (rgb >>  0) & 0xff;

        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness < 128 ? '#fff' : '#000'; 
    };

    const textColor = getTextColor(color); 

    return (
        <>
            <div className="container">
                <h1 className="title">Pick Your Color</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p className="color-text" style={{ color: textColor }}>
                        Selected color: {color}
                    </p>
                </div>
                <div className="color-picker">
                    <input
                        type="color"
                        value={color}
                        onChange={changeColor}
                        className="color-input"
                    />
                </div>
            </div>
        </>
    );
}

export default App;
