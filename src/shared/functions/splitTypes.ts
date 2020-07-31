import types from '../types/type.const';
import { splitTypeGroup } from '../types/variable';
/*
 * exampleData와 같은 꼴의 배열을 아래와 같이 분리해주는 함수
 * {
 *   boolean: [ 'boolean1' ],
 *   number: [ 'number1', 'number2' ],
 *   string: [ 'string1', 'string2' ],
 *   array: [ 'array1' ],
 *   numArray: [ 'array2' ],
 *   strArray: [ 'array3' ],
 *   boolArray: [],
 *   any: [ 'any1' ]
 * }
 
 * const exampleData = [
 * 'boolean1:boolean',
 * 'number1:number',
 * 'number2:number',
 * 'string1:string',
 * 'string2:string',
 * 'array1:[]',
 * 'array2:number[]',
 * 'array3:Array<string>',
 * 'any1:any',
 * ];
 */

const splitTypes = (input: string[]): splitTypeGroup => {
  const typeGroup = {
    boolean: [],
    number: [],
    string: [],
    array: [],
    numArray: [],
    strArray: [],
    boolArray: [],
    any: [],
    object: [],
    unknown: [],
  };
  input.forEach((element) => {
    const elementKey = element.split(':')[0];
    const elementValue = unifyType(element.split(':')[1]);

    typeGroup[elementValue].push(elementKey);
  });

  return typeGroup;
};

const unifyType = (input: string): string => {
  switch (input) {
    case types.STRING:
      return types.STRING;
    case types.NUMBER:
      return types.NUMBER;
    case types.BOOLEAN:
      return types.BOOLEAN;
    case types.ARRAY:
      return types.ARRAY;
    case types.ANY:
      return types.ANY;
    case types.ARRAY2:
      return types.ARRAY;
    case types.NUM_ARRAY:
      return 'numArray';
    case types.NUM_ARRAY2:
      return 'numArray';
    case types.STRING_ARRAY:
      return 'strArray';
    case types.STRING_ARRAY2:
      return 'strArray';
    case types.BOOLEAN_ARRAY:
      return 'boolArray';
    case types.BOOLEAN_ARRAY2:
      return 'boolArray';
    default:
      return input[0] === '{' ? types.OBJECT : 'unknown';
  }
};

export { splitTypes, unifyType };
