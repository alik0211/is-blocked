import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/main.js',
  output: {
    file: pkg.main,
    format: 'umd',
    name: 'supername'
  },
  plugins: [uglify()]
};
