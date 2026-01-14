import type { UnknownAction } from "redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logger = (store:any) => (next:any) => (action:UnknownAction|unknown) => { 
  console.log('ACTION', action);
  // store.getState antes de next(action), retorna o estado atual
  console.log('PREV_STATE', store.getState());
  const result = next(action);
  // store.getState após next(action), retorna o estado posterior
  console.log('NEW_STATE', store.getState());
  console.groupEnd();
  // temos sempre que retornar o resultado de next(action)
  return result;
};