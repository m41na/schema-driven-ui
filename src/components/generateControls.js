import merge from '../schema/merge';
import { TextField, CheckBox } from '@mui/icons-material';

export default ({ controls, schema }) => {

    const formControls = merge(controls, schema);

    return (
        <form>
            {formControls.map(control => {
                
            })}
        </form>
    )
}

const InputBox = (input) => {
    return <TextField
        id={input.id || ''}
        name={input.name || ''}
        value={input.value}
        type={input.type}
        label={input.label || input.name}
        defaultValue={input.defaultValue || input.value}
    />
}

const DropDown = (input) => {
    return <TextField
        select
        id={input.id || ''}
        name={input.name || ''}
        options={input.options || []}
        type={input.type}
        label={input.label || input.name}
        defaultValue={input.defaultValue || ''}
    />
}

const InputCheck = (input) => {
    return <CheckBox
        id={input.id || ''}
        name={input.name || ''}
        value={input.value}
        type={input.type}
        label={input.label || input.name}
        defaultChecked={input.defaultValue === true}
    />
}

const InputRadio = (input) => {
    return <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
    >
        {input.checkOptions.map(radio =>
            <FormControlLabel value="female" control={<Radio
                id={radio.id || ''}
                name={radio.name || ''}
                value={radio.value}
                type={radio.type}
                label={radio.label || radio.name}
                defaultValue={radio.defaultValue | radio.value}
            />} label={radio.label} />
        )}
    </RadioGroup>
    return
}