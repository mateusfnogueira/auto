export const formatValue = (value: string) => {
  let mrsp = value.replace('.', '');
  mrsp = `${mrsp.substring(0, 2)}.${mrsp.substring(
    2,
    mrsp.length,
  )}`;
  return mrsp;
};
