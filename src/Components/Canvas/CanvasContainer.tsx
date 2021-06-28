import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import Canvas from "./Canvas";
import {IColor} from "../MainPage/MainPage";

const CanvasContainer = (props: IColor) => {

    const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
    const contextRef = useRef() as MutableRefObject<CanvasRenderingContext2D>;
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1200;
        canvas.height = 1200;

        canvas.style.width = `${600}px`;
        canvas.style.height = `${600}px`;

        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        context.scale(2, 2);
        context.lineCap = 'round';
        context.lineWidth = 8;
        contextRef.current = context;

    }, [])

    useEffect(() => {
        contextRef.current.strokeStyle = props.color;
        contextRef.current.lineWidth = props.widthLine;

    }, [props.color])

    useEffect(() => {
        contextRef.current.lineWidth = props.widthLine;
    }, [props.widthLine])


    const endDrawingFunction = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({nativeEvent}: React.MouseEvent) => {
        if (!isDrawing) {
            return
        }
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    const startDrawingFunction = ({nativeEvent}: React.MouseEvent) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }
    return (
        <Canvas canvasRef={canvasRef} startDrawingFunction={startDrawingFunction}
                endDrawingFunction={endDrawingFunction} draw={draw}/>
    );
};

export default CanvasContainer;