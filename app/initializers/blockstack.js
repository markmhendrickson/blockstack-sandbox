import blockstack from 'npm:blockstack';

export function initialize(application) {
  if (blockstack.isSignInPending()) {
    application.deferReadiness();

    blockstack.handlePendingSignIn()
      .then(() => {
        window.location = window.location.origin;
      });
  }
}

export default {
  initialize
};
