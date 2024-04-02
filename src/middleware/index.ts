import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    try {
        return await next();
    } catch (error) {
        // @ts-ignore
        if (error?.message === 'Not found') {
            console.warn('Ocurrió un error not_found en ' + context.request.url);
            return context.redirect('/404');
        }
        console.error(error);
        console.warn('Ocurrió un error 500 en ' + context.request.url);
        return context.redirect('/500');
    }
});
