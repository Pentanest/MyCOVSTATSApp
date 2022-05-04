export const countryNameTrimmer = name => {
  return name.length > 7 ? `${name.slice(0, 7)}..` : name;
};
