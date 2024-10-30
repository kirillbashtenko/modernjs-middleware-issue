import type { AfterMatchHook } from '@modern-js/runtime/server';

export const afterMatch: AfterMatchHook = async (context, next) => {
  if (context.request.pathname === '/status') {
    context.response.status(200);
    context.response.raw(JSON.stringify({ status: 'ok' }));
  } else {
    next();
  }
};
