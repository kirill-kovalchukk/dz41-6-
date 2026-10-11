export const age: number = 50;
export const userName: string = 'Max';
export const toggle: boolean = true;
export const empty: null = null;
export const notInitialize: undefined = undefined;
export const callback = (a: number): number => { return 100 + a };

export let anything: any = -20;
anything = 'Text';
anything = {};

export let some: unknown;
some = 'Text';
export let str: string = some as string;

export const person: [string, number] = ['Max', 21];

export enum LoadingState {
  LOADING = 'LOADING',
  READY = 'READY'
}
export const currentStatus: LoadingState = LoadingState.READY;

export let unionVar: string | number = 'Hello';
unionVar = 100;

export let literalVar: 'enable' | 'disable' = 'enable';

export function showMessage(message: string): void {
  console.log(message);
}

export function calc(num1: number, num2: number): number {
  return num1 + num2;
}

export function customError(): never {
  throw new Error('Error');
}

export type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

export const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
};

export const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};