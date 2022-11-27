import plain from './plain.js';
import stylish from './stylish.js';

export default (tree, format) => {
  if (format === 'stylish') {
    return stylish(tree);
  }

  if (format === 'plain') {
    return plain(tree);
  }

  if (format === 'json') {
    return JSON.stringify(tree);
  }

  throw new Error('Unsupported format');
};
