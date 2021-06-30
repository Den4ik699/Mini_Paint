import React, {LegacyRef} from 'react';

const s = require('./Canvas.Module.css');

interface ICanvasProps {
    draw: (event: React.MouseEvent) => void
    startDrawingFunction: (event: React.MouseEvent) => void
    endDrawingFunction: () => void
    canvasRef: LegacyRef<HTMLCanvasElement>
}

const Canvas = (props: ICanvasProps) => {

    return (
        <div className="center">
            <canvas className={s.canvasContainer}
                    onMouseDown={props.startDrawingFunction}
                    onMouseUp={props.endDrawingFunction}
                    onMouseMove={props.draw}
                    ref={props.canvasRef}
                    width={600}
                    height={600}
            >
            </canvas>
        </div>

    );
};

export default Canvas;