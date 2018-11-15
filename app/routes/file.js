import Route from '@ember/routing/route';
import blockstack from 'npm:blockstack';

export default Route.extend({
  model(params) {
    return new Promise((resolve, reject) => {
      var file = this.get('store').peekRecord('file', params.file_id);

      if (!file) {
        blockstack.getFile(params.file_id).then((content) => {
          var records = this.store.push({
            data: [{
              id: params.file_id,
              type: 'file',
              attributes: {
                content: content,
                path: params.file_id
              }
            }]
          });

          var file = records.get('firstObject');
          resolve(file);
        });
      } else {
        resolve(file);
      }
    });
  }
});
