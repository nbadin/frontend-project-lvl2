import _ from 'lodash';

const stylish = (object) => {
  const statuses = { add: '  + ', delete: '  - ', equal: '    ' };
  const result = [];
  object.forEach((element) => {
    const indent = '    '.repeat(element.depth);
    if (element.status === 'change') {
      const oldValue = _.isArray(element.oldValue) ? stylish(element.oldValue) : element.oldValue;
      const newValue = _.isArray(element.newValue) ? stylish(element.newValue) : element.newValue;
      const firststr = [indent, statuses.delete, element.key, ': ', oldValue].join('');
      const secondstr = [indent, statuses.add, element.key, ': ', newValue].join('');
      result.push(firststr, secondstr);
    } else {
      const value = _.isArray(element.value) ? stylish(element.value) : element.value;
      const str = [indent, statuses[element.status], element.key, ': ', value].join('');
      result.push(str);
    }
  });
  result.unshift('{');
  result.push(['    '.repeat(object[0].depth), '}'].join(''));
  return result.join('\n');
};

export default stylish;
