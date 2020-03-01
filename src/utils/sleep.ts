const sleep = async (msec: number) => {
  return await new Promise(r => {
    setTimeout(() => {
      r();
    }, msec);
  });
};

export default sleep;
