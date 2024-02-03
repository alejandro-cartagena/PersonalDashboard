import {defineConfig} from 'vite'
import { resolve } from 'path';


export default defineConfig({
	plugins: [],
	build: { 
		rollupOptions: { 
			input: { 
				main: resolve(__dirname, 'index.html'), 
				app: resolve(__dirname, 'index.js')
			 }, 
			},
		 }, 
})