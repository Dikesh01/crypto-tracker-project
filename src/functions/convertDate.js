export const convertDate = (value) => {
  const myDate = new Date(value);
  return myDate.getDate() + "/" + (myDate.getMonth() + 1);
};
