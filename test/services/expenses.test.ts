import assert from 'assert';
import app from '../../src/app';

describe('\'expenses\' service', () => {
  it('registered the service', () => {
    const service = app.service('expenses');

    assert.ok(service, 'Registered the service');
  });
});
