import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import blockstack from 'npm:blockstack';

export default Controller.extend({
  session: service(),

  actions: {
    deauthenticate() {
      console.log('deauthenticate');
      blockstack.signUserOut(window.location.origin);
    }
  }
});
