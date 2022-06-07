import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function render(){
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}

// 单独运行时
if(!(window as Window & typeof globalThis & {__POWERED_BY_QIANKUN__:string}).__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * bootstrap 乾坤初始化调用一次
 */
export async function bootstrap(){
  console.log('bootstrap')
}

/**
 * mount 每次进入都会触发
 */
export async function mount(props){
  console.log('mount', props)
  render()
}

/**
 * unmount 应用每次切出卸载都会调用，通常用来卸载微应用的实例
 */
export async function unmount(){
  console.log('unmount')
  root.unmount()
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props){
  console.log('update', props)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
