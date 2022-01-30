/* eslint-disable @typescript-eslint/no-unused-vars) */

/** TypeScriptの基本の型*/

//boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1];
let arr2: number[] = [0, 1];

// tuple 使わない
let tuple: [number, string] = [0, "A"];

//any 何でも入るので基本は使わない。型を指定している意味がなくなるか。
let arny1: any = false;

// void 何も値を返さない型
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object あんまり使わない
let obj1: object = {};
let obj1: {id: number, name: string } = {id: 0, name: "AAAA"}:
