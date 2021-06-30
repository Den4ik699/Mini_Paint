import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import Canvas from "./Canvas";
import {IColor} from "../MainPage/MainPage";
import rough from 'roughjs/bundled/rough.esm'

const generator = rough.generator();


const CanvasContainer = (props: IColor) => {

    const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
    const contextRef = useRef() as MutableRefObject<CanvasRenderingContext2D>;
    const [isDrawing, setIsDrawing] = useState(false);
    const [elements, setElements] = useState<any>([]);
    const tool = Object.entries(props.dataTools).filter(elem => elem[1])
    const firstProperties = {
        stroke: props.color,
        strokeWidth: props.widthLine,
    }
    console.log(props.dataTools)

    function createElement(x1, y1, x2, y2) {
        if (tool[0][0] === 'statusRect') {
            const roughElement = generator.rectangle(x1, y1, x2 - x1, y2 - y1, {
                stroke: props.color,
                strokeWidth: props.widthLine,
                fill: props.color,
                fillStyle: 'dots'
            });
            return {x1, y1, x2, y2, roughElement};
        } else if (tool[0][0] === 'statusLine') {
            const roughElement = generator.line(x1, y1, x2, y2, firstProperties);
            return {x1, y1, x2, y2, roughElement};
        }
        else if (tool[0][0] === 'statusCircle') {

            const roughElement = generator.ellipse(x1, y1, x2 - x1, y2 - y1, firstProperties);
            return {x1, y1, x2, y2, roughElement};
        }
    }


    useEffect(() => {
        const canvas = canvasRef.current;

        contextRef.current = canvas.getContext('2d') as CanvasRenderingContext2D
        contextRef.current.lineCap = 'round';
        contextRef.current.lineWidth = 5;
        // contextRef.current = contextRef.current;

    }, [])


    useEffect(() => {
        const canvas = canvasRef.current
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
        const roughCanvas = rough.canvas(canvas);

        elements.forEach(({roughElement}) => roughCanvas.draw(roughElement))
    }, [elements])


    useEffect(() => {
        contextRef.current.strokeStyle = props.color;
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
        if (tool[0][0] === 'statusRect' || tool[0][0] === 'statusLine' || tool[0][0] === 'statusCircle') {
            const {offsetX, offsetY} = nativeEvent;
            const index = elements.length - 1;
            const {x1, y1} = elements[index]
            const updatedElement = createElement(x1, y1, offsetX, offsetY);


            const elementsCopy: any = [...elements];
            elementsCopy[index] = updatedElement;
            setElements(elementsCopy);


        } else if (tool[0][0] === 'statusPencil') {
            const {offsetX, offsetY} = nativeEvent;
            contextRef.current.lineTo(offsetX, offsetY);
            contextRef.current.stroke();
        }

    }

    const startDrawingFunction = ({nativeEvent}: React.MouseEvent) => {
        setIsDrawing(true);
        if (tool[0][0] === 'statusRect' || tool[0][0] === 'statusLine' || tool[0][0] === 'statusCircle') {
            const {offsetX, offsetY} = nativeEvent;

            const element = createElement(offsetX, offsetY, offsetX, offsetY);
            setElements(prevState => [...prevState, element])
        } else if (tool[0][0] === 'statusPencil') {
            const {offsetX, offsetY} = nativeEvent;
            contextRef.current.beginPath();
            contextRef.current.moveTo(offsetX, offsetY);
        }
    }
    return (
        <Canvas canvasRef={canvasRef} startDrawingFunction={startDrawingFunction}
                endDrawingFunction={endDrawingFunction} draw={draw}/>
    );
};

export default CanvasContainer;