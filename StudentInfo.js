const dateofBirth = "12/12/1980";

const getStudentName = () => {
  return "sathwik";
};

const getCampusName = () => {
  return "UEL Campus";
};

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

exports.Studentgrade = (marks = 0) => {
  if (marks > 50 && marks < 70) return "B grade";
  return "A grade";
};
