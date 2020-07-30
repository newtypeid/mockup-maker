import {unifyType} from './splitTypes'

const VALID_HEADER_INPUT = 'interface';

const removeBlank = (input: string): string => {
  return input.replace(/(^\s*)|(\s*$)/gi, '');
};

const removeBlankAll = (input: string): string => {
  return input.replace(/(\s*)/g, '');
};

const removeBrackets = (typesStr: string): string => {
  return typesStr.substring(1, typesStr.length - 1);
};

const checkBrackets = (typesStr: string): boolean => {
  return typesStr[0] === '{' && typesStr.slice(-1) === '}';
};

// [checkDeclaredType() 동작 설명] ex) typeInfo: 'name:string' , 'age:number'
// 1. 각 배열 요소를 ':'를 기준으로 문자열을 나눈다. ['name','string']
// 2. 첫 번째 요소를 이름, 두 번째 요소를 선언 타입으로 지칭한다.
// 3. 각 요소에 빈 공백인지만 확인
const checkDeclaredType = (typeInfo: string): boolean => {
  const tempArr = typeInfo.split(':');
  const name = tempArr[0];
  const type = tempArr[1];

  return name !== '' && type !== '';
};

// [isValidHeaderStr() 동작 설명] ex) nameStr: 'interface User'
// 1. 전체 문자열에서 앞,뒤 공백을 모두 없앤다.
// 2. 문자열에서 ' '를 기준으로 나눈다. - interface User => ['interface', 'User'], interface    User => ['interface','','','User']
// 3. 나눈 배열에서 맨 앞 요소가 'interface' 문자열인지 확인.
// 4. 맨 뒤 요소인 인터페이스 명이 빈 공백인지 확인.

const isValidHeaderStr = (nameStr: string): boolean => {
  const nameArr = removeBlank(nameStr).split(' ');

  const interfaceHeader = nameArr.shift();
  const interfaceName = nameArr.pop();

  return VALID_HEADER_INPUT === interfaceHeader && !!interfaceName;
};

// [isValidTypesStr() 동작 설명] ex) typesStr: '{ name : string;  age:number; }'
// 1. 문자열의 모든 공백을 없앤다. - '{name:string;age:number}'
// 2. 문자열의 제일 앞,뒤가 브라켓인지 확인 후, 정상적이면 문자열에서 앞,뒤 브라켓 삭제 - 'name;string;age:number'
// 3. ';'를 기준으로 문자열을 나눈 후, 제일 뒤 요소를 pop 한다. - ['name:string','age:number',""] -> pop! ['name:string','age:number']
// 4. 각 요소를 checkDeclaredType() 함수의 인자로 전달한다.

const isValidTypesStr = (typesStr: string): boolean => {
  typesStr = removeBlankAll(typesStr);

  const isValidBrackets = checkBrackets(typesStr);
  if (!isValidBrackets) {
    return false;
  }

  typesStr = removeBrackets(typesStr);
  const typeInfos = typesStr.split(';');
  const emptyStr = typeInfos.pop();
  if (0 === typeInfos.length || emptyStr !== '') {
    return false;
  }

  return typeInfos.every((typeInfo) => checkDeclaredType(typeInfo));
};

// [verifyInputData() 동작 설명]
// 1. 전체 문자열에서 앞,뒤 공백을 모두 없앤다.
// 2. 문자열에서 '{' 문자의 인덱스 값을 기준으로 문자열을 나눈다. (앞은 헤더 부분, 뒤는 타입 선언 부분)
// 3. 헤더 부분의 문자열에서 앞뒤 공백을 자른 후, 중간의 공백을 기준으로 배열로 나눈다.
// 4. 배열 맨 앞 요소는 'interface' 문자열, 배열 맨 뒤 요소는 선언한 인터페이스 명으로 지칭한다.

const verifyInputData = (input: string): boolean => {
  input = removeBlank(input);

  const indexOfStartingType = input.indexOf('{');

  const nameStr = input.substr(0, indexOfStartingType);
  const typesStr = input.substr(indexOfStartingType, input.length);

  return isValidHeaderStr(nameStr) && isValidTypesStr(typesStr);
};

const parseString = (input: string): string[] => {
  const blankRemovedInput = removeBlank(input);
  const indexOfStartingType = blankRemovedInput.indexOf('{');
  let typesStr = blankRemovedInput.substr(indexOfStartingType, input.length);
  typesStr = removeBrackets(removeBlankAll(typesStr));
  const typeInfos = typesStr.split(';');
  typeInfos.pop();

  return typeInfos;
};

/*
 * string 으로 들어온 interface의 type들만 추출하는 함수
 */
const extractTypes = (input: string): string[] => {
  return parseString(input).map((value): string => value.slice(value.indexOf(':' + 1)));
};

/*
 * extractTypes()에서 추출한 타입들이 올바른지 확인하는 함수
 * 올바르지 못한 타입명들 반환
 */
const checkExtractedTypes = (input: string[]): string[] {
  return input.filter(type => unifyType(type) === 'unknown')
}

export default { parseString, verifyInputData };
