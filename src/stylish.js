import _ from 'lodash';

const stylish = (tree, depth = 0) => {
  const statuses = { added: '  + ', deleted: '  - ', equal: '    ' };
  const result = [];
  const indent = '    '.repeat(depth);
  tree.forEach((item) => {
    if (item.status === 'deleted') {
      const value = _.isArray(item.value) ? stylish(item.value, depth + 1) : item.value;
      result.push(`${indent}${statuses.deleted}${item.key}: ${value}`);
    }
    if (item.status === 'added') {
      const value = _.isArray(item.value) ? stylish(item.value, depth + 1) : item.value;
      result.push(`${indent}${statuses.added}${item.key}: ${value}`);
    }
    if (item.status === 'hasChildren') {
      const value = _.isArray(item.children) ? stylish(item.children, depth + 1) : item.cildren;
      result.push(`${indent}${statuses.equal}${item.key}: ${value}`);
    }
    if (item.status === 'changed') {
      const oldValue = _.isArray(item.oldValue) ? stylish(item.oldValue, depth + 1) : item.oldValue;
      const newValue = _.isArray(item.newValue) ? stylish(item.newValue, depth + 1) : item.newValue;
      result.push(`${indent}${statuses.deleted}${item.key}: ${oldValue}`);
      result.push(`${indent}${statuses.added}${item.key}: ${newValue}`);
    }
    if (item.status === 'equal') {
      const value = _.isArray(item.value) ? stylish(item.value, depth + 1) : item.value;
      result.push(`${indent}${statuses.equal}${item.key}: ${value}`);
    }
  })
  result.unshift('{')
  result.push(`${indent}}`)
  return result.join('\n');
};

export default stylish;
