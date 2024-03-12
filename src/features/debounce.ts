export const debounse = (fn: Function, ms: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    const fnCall = () => fn.apply(this, args);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fnCall, ms);
  };
};
