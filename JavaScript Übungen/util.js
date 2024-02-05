function addOne(variable) {
  if (typeof(variable) == 'string') {
    return variable + '1';
  }
  if (typeof(variable) == 'number') {
    return variable + 1;
  }
  if (typeof(variable) == 'object') {
    if (Array.isArray(variable))
      variable.push(1);
    else
      variable['1'] = '';
  }
  return variable;
}

module.exports = {
  addOne
};
