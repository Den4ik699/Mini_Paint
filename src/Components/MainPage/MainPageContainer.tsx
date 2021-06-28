import React, {useState} from 'react';
import MainPage from "./MainPage";

const MainPageContainer = () => {
    const [color, setColor] = useState("#000000");

    const [widthLine, setWidthLine] = useState(8);

    const onChangeWidth = (event: any) => {
        setWidthLine(event.target.value)
    }

    return (
        <MainPage color={color} setColor={setColor} widthLine={widthLine} onChangeWidth={onChangeWidth}/>
    );
};

export default MainPageContainer;