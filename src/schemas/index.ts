import { paymentSchema, TPayment } from './_paymentSchema';
import { transactionSchema, TTransaction } from './_transactionSchema';

const Schemas = {
  payment: paymentSchema,
  transaction: transactionSchema,
};

export type { TPayment, TTransaction };

export default Schemas;
