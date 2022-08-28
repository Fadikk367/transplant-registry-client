export const withDelay = <T,>(data: T, delay = 300): Promise<T> => {
  return new Promise((res, rej) => {
    setTimeout(() => res(data), delay);
  });
};
