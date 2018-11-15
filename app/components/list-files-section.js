import Component from '@ember/component';
import blockstack from 'npm:blockstack';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNameBindings: ['files.length:not-empty:empty'],
  files: [],
  tagName: 'section',
  store: service(),

  init() {
    this._super(...arguments);
    this.set('files', this.store.peekAll('file'));

    blockstack.listFiles((path) => {
      blockstack.getFile(path).then((content) => {
        this.store.push({
          data: [{
            id: path,
            type: 'file',
            attributes: {
              content: content,
              path: path
            }
          }]
        });
      });

      return true;
    });
  }
});
