import { Middleware, AfterRenderHook } from '@modern-js/runtime/server';

export const middleware: Middleware = async (context, next) => {
  console.log(context.response);
  next();
};

export const afterRender: AfterRenderHook = (context, next) => {
  context.template.appendBody('EdenX Server');
  next();
};
