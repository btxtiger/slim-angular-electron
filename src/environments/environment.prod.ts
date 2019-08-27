import { environmentBase } from './environment-base';

const environmentProduction = {
   production: true,
   environment: 'PROD'
};

export const environment = Object.assign({}, environmentBase, environmentProduction);
