import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash is now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack '], ' ');
  element.innerHTML += myName('Kubilay');

  return element;
}

document.body.appendChild(component());