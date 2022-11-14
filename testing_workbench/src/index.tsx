/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
// @ts-ignore
import {App} from './App.tsx'

// import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

