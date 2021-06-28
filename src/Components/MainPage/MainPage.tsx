import React from 'react';
import Header from "../Header/Header";
import CanvasContainer from "../Canvas/CanvasContainer";
import ToolBar from "../ToolBar/ToolBar";


export interface IColor {
    color: string
    setColor?: React.Dispatch<React.SetStateAction<string>>
    widthLine: number
    onChangeWidth?: React.ChangeEventHandler<HTMLInputElement>
}

const MainPage: React.FC<IColor> = ({color, setColor, widthLine, onChangeWidth}) => {
    return (
        <>
            <Header/>
            <ToolBar widthLine={widthLine} onChangeWidth={onChangeWidth} color={color} setColor={setColor}/>
            <CanvasContainer widthLine={widthLine} color={color}/>
        </>

    );
};

export default MainPage;