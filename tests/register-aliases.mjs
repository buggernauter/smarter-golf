import { registerHooks } from 'node:module';

registerHooks({
    resolve(specifier, context, nextResolve) {
        if (specifier.startsWith('@/')) {
            const sourcePath = specifier.slice(2).replace(/\.ts$/, '');
            return nextResolve(new URL(`../src/${sourcePath}.ts`, import.meta.url).href, context);
        }
        return nextResolve(specifier, context);
    },
});
