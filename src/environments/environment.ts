import { environmentBase } from './environment-base';

const environmentProduction = {
   production: false,
   environment: 'LOCAL'
};

export const environment = Object.assign({}, environmentBase, environmentProduction);
