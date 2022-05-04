export const colorSetter = id => {
  let strokeColor = '';
  switch (id) {
    case '1': {
      strokeColor = '#FF647C';
      break;
    }
    case '2': {
      strokeColor = '#00C48C';
      break;
    }
    case '3': {
      strokeColor = '#6979F8';
      break;
    }
    default: {
      strokeColor = '#FF647C';
    }
  }
  return strokeColor;
};
