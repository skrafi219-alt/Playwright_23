import {defineConfig} from '@playwright/test';
import { baseURL } from './env';

export default defineConfig({

  testDir:'./tests',
  fullyParallel:true,
  timeout:30*1000,
  reporter:'html',

  use:{
    browserName:'chromium',
    headless:false,
    baseURL,
  }
});