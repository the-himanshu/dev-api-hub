// Initializes the `expenses` service on path `/expenses`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Expenses } from './expenses.class';
import createModel from '../../models/expenses.model';
import hooks from './expenses.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'expenses': Expenses & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/expenses', new Expenses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('expenses');

  service.hooks(hooks);
}
