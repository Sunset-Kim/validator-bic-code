import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bic-code.ts',
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
  ]
}
