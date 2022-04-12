import merge from "../../schema/merge";
import controls from '../../schema/controls.json';
import profile from '../../schema/profile.json';

describe('test merge functions', () => {
    
    test('merge returns result', () => {
        const result = merge(controls, profile);
        console.log('result', result);
    });
});