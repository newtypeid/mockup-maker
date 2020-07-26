import { splitTypes } from './splitTypes';

const result = {
  boolean: [],
  number: [],
  string: [],
  array: [],
  numArray: [],
  strArray: [],
  boolArray: [],
  any: [],
  object: [],
};

test('단순 검사 1', () => {
  const source = splitTypes(['name:string']);
  const target = {
    ...result,
    string: ['name'],
  };
  expect(source).toEqual(target);
});

test('단순 배열 검사 1', () => {
  const source = splitTypes(['name:string', 'age:number', 'house:array', 'family:[]']);
  const target = {
    ...result,
    string: ['name'],
    number: ['age'],
    array: ['house', 'family'],
  };
  expect(source).toEqual(target);
});

test('숫자 배열 검사 1', () => {
  const source = splitTypes(['age:number[]']);
  const target = {
    ...result,
    numArray: ['age'],
  };
  expect(source).toEqual(target);
});

test('숫자 배열 검사 2', () => {
  const source = splitTypes(['age:Array<number>']);
  const target = {
    ...result,
    numArray: ['age'],
  };
  expect(source).toEqual(target);
});
