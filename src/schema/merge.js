const merge = (controls, schema) => {
    for (let key in schema) {
        if (Array.isArray(schema[key])) {
            for (let item of schema[key]) {
                const merged = merge(controls, item);
                schema[key] = merged;
            }
            continue;
        }
        if (typeof schema[key] === 'object') {
            if (schema[key].hasOwnProperty('control')) {
                const copy = {...schema[key]};
                delete copy['control']
                const clone = {...controls[key], ...copy}
                schema[key] = clone;
            }
            else {
                for (let prop in schema[key]) {
                    const merged = merge(controls, schema[key][prop]);
                    schema[key][prop] = merged;
                }
            }
            continue;
        }
        if (isBoolean(schema[key])) {
            const checkbox = { ...controls.input, type: 'checkbox' };
            schema[key] = checkbox;
            continue;
        }
        if (isNumeric(schema[key])) {
            const numeric = { ...controls.input, type: 'number' };
            schema[key] = numeric;
            continue;
        }
        if (isText(schema[key])) {
            const text = { ...controls.input, type: 'text' };
            schema[key] = text;
            continue;
        }
    }
}

export const isText = (value) => {
    return typeof value === 'string'
}

export const isNumeric = (value) => {
    try {
        parseFloat(value);
        return true;
    }
    catch (e) {
        return false;
    }
}

export const isBoolean = (value) => {
    return String(value).toLowerCase() === 'true'
}

export default merge;