export const convertStringToDateFormat = (dateString) => {
  // a new string which converts ddmmyyyy to dd/mm/yyyy
  const formattedDateString =
    dateString.substring(0, 2) +
    '/' +
    dateString.substring(2, 4) +
    '/' +
    dateString.substring(4, 8);

  return formattedDateString;
};

export const CONSTANTS = {
  TASK_ADDED: 'Task Added Successfully',
  ERROR_MESSGAE: 'Oops something went wrong',
  TASK_DELETED: 'Task deleted Successfully!',
};
