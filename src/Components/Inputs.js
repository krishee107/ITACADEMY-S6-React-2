import { useState } from "react";
import { Btn } from "./Button";

export const Inputs = (props) => {
    const [value, setValue] = useState(props.value);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setValue(value);
        props.onChange(event);
    };

    const handleIncrement = (event) => {
        event.preventDefault();
        setValue(parseInt(value) + 1);
        const fakeEvent = { target: { name: props.name, value: parseInt(value) + 1 } };
        props.onChange(fakeEvent);
    };

    const handleDecrement = (event) => {
        event.preventDefault();
        setValue(parseInt(value) - 1);
        const fakeEvent = { target: { name: props.name, value: parseInt(value) - 1 } };
        props.onChange(fakeEvent);
    };

    return (
        <div style={{ display: `flex` }}>
            <Btn onClick={handleIncrement}>+</Btn>
            <input type="number" value={value} name={props.name} id={props.name} onChange={handleInputChange} style={{ padding: `5px`, border: `none` }} />
            <Btn onClick={handleDecrement}>-</Btn>
        </div>
    );
};
