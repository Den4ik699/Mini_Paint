import React from 'react';
import CanvasContainer from "../Canvas/CanvasContainer";
import ToolBar from "../ToolBar/ToolBar";


export interface IColor {
    color: string
    setColor?: React.Dispatch<React.SetStateAction<string>>
    widthLine: number
    onChangeWidth?: React.ChangeEventHandler<HTMLInputElement>
    addRectangle?: (status: boolean) => void
    addPencil?: (status: boolean) => void
    addLine?: (status: boolean) => void
    dataTools?: any
    addCircle?: (status: boolean) => void
}

const MainPage: React.FC<IColor> = ({
                                        color, setColor, widthLine,
                                        onChangeWidth, addPencil, addRectangle
                                        , dataTools, addLine, addCircle
                                    }) => {

    return (
        <>
            <ToolBar widthLine={widthLine}
                     onChangeWidth={onChangeWidth}
                     color={color}
                     setColor={setColor}
                     addPencil={addPencil}
                     addRectangle={addRectangle}
                     addLine={addLine}
                     addCircle={addCircle}/>
            <CanvasContainer dataTools={dataTools} widthLine={widthLine}
                             color={color}/>
        </>

    );
};

export default MainPage;