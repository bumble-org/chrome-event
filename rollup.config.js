/* eslint-env node */

import typescript from 'rollup-plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'build/chrome-event-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'build/chrome-event-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    plugins: [typescript()],
  },
]
