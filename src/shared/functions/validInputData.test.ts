import { verifyInputData } from './validationData';

test('올바른 인터페이스 형태 검사1', () => {
  const result = verifyInputData('interface User {name:string;}');
  expect(result).toBeTruthy();
});

test('올바른 인터페이스 형태 검사2', () => {
  const result = verifyInputData('interface         User      {name:string;           age:number;}');
  expect(result).toBeTruthy();
});

test('interface 헤더가 제대로 선언되지 않았을 시', () => {
  const result = verifyInputData('inter User {name:string;}');
  expect(result).toBeFalsy();
});

test('인터페이스 명이 없을 시', () => {
  const result = verifyInputData('interface {name:string; }');
  expect(result).toBeFalsy();
});

test('괄호가 올바르지 않을 시1', () => {
  const result = verifyInputData('interface User name:string; }');
  expect(result).toBeFalsy();
});

test('괄호가 올바르지 않을 시2', () => {
  const result = verifyInputData('interface User name:string; ');
  expect(result).toBeFalsy();
});

test('괄호가 올바르지 않을 시3', () => {
  const result = verifyInputData('interface User {name:string; ');
  expect(result).toBeFalsy();
});

test('타입 선언에 세미콜론(;)이 없을 시1', () => {
  const result = verifyInputData('interface User {name:string }');
  expect(result).toBeFalsy();
});

test('타입 선언에 세미콜론(;)이 없을 시2', () => {
  const result = verifyInputData('interface User {name:string; age:number}');
  expect(result).toBeFalsy();
});

test('인터페이스 내 선언된 타입이 없을 시', () => {
  const result = verifyInputData('interface User { }');
  expect(result).toBeFalsy();
});
