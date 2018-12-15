export const EXAM1 = 'EXAM1';
export const EXAM2 = 'EXAM2';

export function exam1(msg) {
  return {
    type: EXAM1,
    msg,
  }
}

export function exam2(msg) {
  return {
    type: EXAM2,
    msg: msg + '2',
  }
}