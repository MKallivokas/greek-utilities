// indexOf is faster than regex, for loop and if:
// https://jsperf.com/regex-vs-for-loop/2
export function includesChar(char, set) {
  if (typeof char !== 'string') return false;
  if (typeof set !== 'string') return false;
  if (char.length !== 1) return false;
  if (set.length < 1) return false;
  return set.indexOf(char) >= 0 ? true : false;
}

export function isNotEmptyString(text) {
  return typeof text === 'string' && text.length > 0;
}

const f = (a, b) => [].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
export const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
