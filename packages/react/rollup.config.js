import Ts from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';

export default {
  input: [
    'src/index.ts',
    'src/atoms/Color/index.ts',
    'src/atoms/Text/index.ts',
    'src/atoms/Margin/index.ts',
    'src/molecules/Select/index.ts',
  ],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts(), svgr({ babel: false })],
  external: ['react', 'react-dom', '@or.ds.e/foundation'],
};
