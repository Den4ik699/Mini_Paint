import React, {useState} from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Crop169Icon from '@material-ui/icons/Crop169';
import CreateIcon from '@material-ui/icons/Create';
import {HexColorPicker} from "react-colorful";
import {IColor} from "../MainPage/MainPage";

const style = require('./ToolBar.module.css');

const ToolBar: React.FC<IColor> = ({color, setColor, widthLine, onChangeWidth}) => {

    const [open, setOpen] = useState(false);

    const openChangeColor = () => {
        setOpen(true);
    }

    const closeChangeColor = () => {
        setOpen(false)
    }

    document.body.addEventListener("click", () => {
        closeChangeColor();
    });

    return (
        <div className={style.tools}>
            <div className={style.toolItem}>
                <RadioButtonUncheckedIcon fontSize={"large"}/>
            </div>
            <div className={style.toolItem}>
                <Crop169Icon fontSize={"large"}/>
            </div>
            <div className={style.toolItem}>
                <CreateIcon fontSize={"large"}/>
            </div>

            <div className={`${style.toolItem}`}>
                <img className={style.line} src="https://image.flaticon.com/icons/png/512/815/815497.png" alt=""/>
            </div>

            <div className={style.toolItem}
                 onClick={(event) => {
                     event.stopPropagation();
                     openChangeColor()
                 }}
            >
                <img className={style.changeColor} src="https://image.flaticon.com/icons/png/512/1799/1799745.png"
                     alt="changeColor"/>
            </div>

            {open && <HexColorPicker color={color} onClick={(event) => {
                event.stopPropagation()
            }} onChange={setColor}/>}

            <div className={style.inputWidth}>
                <input name="inputWidth"
                       id="inputWidth"
                       placeholder="Width of Line"
                       onChange={onChangeWidth}/>
            </div>

        </div>

    );
};

export default ToolBar;