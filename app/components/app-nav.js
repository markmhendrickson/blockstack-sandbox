import Component from '@ember/component';
import blockstack from 'npm:blockstack';

export default Component.extend({
  tagName: 'nav',

  actions: {
    deauthenticate() {
      blockstack.signUserOut(window.location.origin);
    }
  }
});
