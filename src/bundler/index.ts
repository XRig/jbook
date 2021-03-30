import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';


export const init = async()=> {

    await esbuild.initialize({
        worker: true,
        wasmURL: '/esbuild.wasm'
    });
}


const bundler = async (rawCode: string) =>  {

try {
    const result = await esbuild.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [
            unpkgPathPlugin(),
            fetchPlugin(rawCode)
        ],
        define: {
            'process.env.NODE_ENV': '"production"',
            global: 'window'
        }
    });
    return {
        code:result.outputFiles[0].text,
        error:''
    }
} catch (error) {
    return {
        code: '',
        error: error.message
    }
}
   
    
};
export default bundler