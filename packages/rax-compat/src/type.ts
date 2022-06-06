export function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}

export function isNull(obj: any): obj is null {
  return obj === null;
}

export function isObject(obj: any): obj is object {
  return typeof obj === 'object';
}
