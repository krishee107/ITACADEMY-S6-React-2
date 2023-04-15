import { Btn } from "./Button"

export const Inputs = (props) => {
    return (
        <div>
            <Btn>+</Btn>
            <input type="number" value={props.value} name={props.name} id={props.name} onChange={props.onChange} />
            <Btn>-</Btn>
        </div>
    )
}
