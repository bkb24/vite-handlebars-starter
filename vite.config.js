import { resolve } from 'path';
import { readFile } from 'fs/promises';
import handlebars from 'vite-plugin-handlebars';
import liveReload from 'vite-plugin-live-reload';
import { helpers } from './handlebars/helpers'

export default async () => {
    const file = await readFile(
        new URL('./data/context.json', import.meta.url)
    );

    const data = JSON.parse(file);

    return {
        build: {
            cssCodeSplit: false,
            rollupOptions: {
                input: {
                    root: '',
                    main: resolve(__dirname, 'index.html'),
                    notFound: resolve(__dirname, '404.html')
                },
                output: {
                    manualChunks: undefined
                }
            }
        },
        plugins: [
            handlebars({
                context: {
                    ...data
                },

                helpers,

                partialDirectory: resolve(__dirname, 'partials')
            }),
            liveReload(resolve(__dirname, 'partials/**/*'), { alwaysReload: true })
        ]
    };

}
