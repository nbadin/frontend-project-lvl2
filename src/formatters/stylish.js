import _ from 'lodash';

const stylish = (tree, depth = 0) => {
  const statuses = {
    added: '  + ',
    deleted: '  - ',
    equal: '    ',
    hasChildren: '    ',
  };

  const indent = '    '.repeat(depth);
  const result = tree.map((item) => {
    if (item.status === 'deleted') {
      const value = _.isArray(item.value) ? stylish(item.value, depth + 1) : item.value;
      return `${indent}${statuses[item.status]}${item.key}: ${value}`;
    }

    if (item.status === 'added') {
      const value = _.isArray(item.value) ? stylish(item.value, depth + 1) : item.value;
      return `${indent}${statuses.added}${item.key}: ${value}`;
    }

    if (item.status === 'hasChildren') {
      const value = _.isArray(item.children) ? stylish(item.children, depth + 1) : item.cildren;
      return `${indent}${statuses[item.status]}${item.key}: ${value}`;
    }

    if (item.status === 'changed') {
      const oldValue = _.isArray(item.oldValue) ? stylish(item.oldValue, depth + 1) : item.oldValue;
      const newValue = _.isArray(item.newValue) ? stylish(item.newValue, depth + 1) : item.newValue;
      return [
        `${indent}${statuses.deleted}${item.key}: ${oldValue}`,
        `${indent}${statuses.added}${item.key}: ${newValue}`,
      ].join('\n');
    }

    if (item.status === 'equal') {
      const value = _.isArray(item.value) ? stylish(item.value, depth + 1) : item.value;
      return `${indent}${statuses[item.status]}${item.key}: ${value}`;
    }

    return '';
  });

  // result.unshift('{');
  // result.push(`${indent}}`);
  return ['{', ...result, `${indent}}`].join('\n');
};

export default stylish;
