import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({
  content: attr('string'),
  path: attr('string')
});
