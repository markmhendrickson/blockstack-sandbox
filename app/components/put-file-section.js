import Component from '@ember/component';
import blockstack from 'npm:blockstack';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNameBindings: ['status'],
  tagName: 'section',
  store: service(),

  actions: {
    submit: function() {
      this.set('status', 'pending');

      blockstack.putFile(this.get('path'), this.get('content')).then(() => {
        this.store.push({
          data: [{
            id: this.get('path'),
            type: 'file',
            attributes: {
              content: this.get('content'),
              path: this.get('path')
            }
          }]
        });

        this.set('content', null);
        this.set('path', null);
        this.set('status', 'success');
      }).catch((reason) => {
        console.error('failed to putFile', reason);
        this.set('status', 'failure');
      });
    }
  }
});
