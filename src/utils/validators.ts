export const presenceValidator = (value: string) => {
  return value.length > 0;
};

export const emailValidator = (value: string) => {
  const re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return re.test(value);
};
