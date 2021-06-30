import React, {useState} from 'react';
import MainPage from "./MainPage";
import {useDispatch, useSelector} from "react-redux";
import {setCircle, setLine, setPencil, setRectangle} from "../../redux/Tools/toolsAction";
import {RootState} from "../../reducers";

const MainPageContainer = () => {
    const [color, setColor] = useState("#000000");
    const [widthLine, setWidthLine] = useState(5);

    const onChangeWidth = (event: any) => {
        setWidthLine(event.target.value)
    }

    let dataTools = useSelector((state: RootState) => {
        return state.tools;
    });

    const dispatch = useDispatch();

    const addRectangle = (statusRect: boolean) => {
        dispatch(setRectangle(statusRect));
    }

    const addPencil = (statusPencil: boolean) => {
        dispatch(setPencil(statusPencil))
    }

    const addLine = (statusLine: boolean) => {
        dispatch(setLine(statusLine))
    }

    const addCircle = (statusCircle: boolean) => {
        dispatch(setCircle(statusCircle))
    }

    return (
        <MainPage
            addCircle = {addCircle}
            addLine={addLine}
            addRectangle={addRectangle}
            addPencil={addPencil}
            dataTools={dataTools}
            color={color}
            setColor={setColor}
            widthLine={widthLine}
            onChangeWidth={onChangeWidth}/>
    );
};

export default MainPageContainer;