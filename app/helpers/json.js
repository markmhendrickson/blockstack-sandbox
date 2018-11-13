import { helper } from '@ember/component/helper';

export function json(context) {
  return JSON.stringify(context);
}

export default helper(json);
