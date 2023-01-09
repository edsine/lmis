// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LMISDATA } = initSchema(schema);

export {
  LMISDATA
};