import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'
export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bic-code.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/bic-code.mjs',
        format: 'esm',
      },
    ],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        extensions: ['.js', '.ts'],
      }),
      typescript(),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
]
