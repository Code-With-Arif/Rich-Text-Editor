import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

import Prism from "prismjs";

export default [
    {
        input: "./src/index.js",
        output: [
            {
                file: 'dist/index.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'prismjs': Object.keys(Prism),
                }
            }),
            postcss({
                plugins: [],
                minimize: true
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            terser(),
        ]
    }
];