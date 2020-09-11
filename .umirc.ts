/*
 * @Author: 蒋承志
 * @Description: file content
 * @Date: 2020-08-24 10:26:01
 * @LastEditTime: 2020-08-26 15:34:01
 * @LastEditors: 蒋承志
 */
import { defineConfig } from 'umi';

export default defineConfig({
  antd: {},
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash'
  },
  ignoreMomentLocale: true,
  outputPath: './dist',
  hash: true,
  manifest: {
    basePath: '/',
  },
});
