function component() {
  const element = document.createElement('div');

  // lodash, currently included via a script, is required fr this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());