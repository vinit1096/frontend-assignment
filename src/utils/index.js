export const convertStringToDateFormat = (dateString) => {
  // converted date string to array format
  const dateStringArray = dateString.split('');

  // a new string which converts ddmmyyyy to dd/mm/yyyy
  const formattedDateString =
    dateStringArray.slice(0, 2).join('') +
    '/' +
    dateStringArray.slice(2, 4).join('') +
    '/' +
    dateStringArray.slice(4, 10).join('');

  return formattedDateString;
};

export const CONSTANTS = {
  TASK_ADDED: 'Task Added Successfully',
  ERROR_MESSGAE: 'Oops something went wrong',
  TASK_DELETED: 'Task deleted Successfully!',
};
