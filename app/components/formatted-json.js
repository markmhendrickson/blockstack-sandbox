import Component from '@ember/component';
import JSONFormatter from 'npm:json-formatter-js';

export default Component.extend({
  didInsertElement(){
    const formatter = new JSONFormatter.default(this.json);
    let v = formatter.render();
    this.$().append(v);
  }
});
