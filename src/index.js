import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './components/HelloMessage.js'
import ShoppingList from './components/ShoppingList.js'
import Timer from './components/Timer.js'
import TodoApp from './components/TodoApp.js'
import MarkdownEditor from './components/MarkdownEditor.js'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <HelloMessage name="Xavi" />,
  document.getElementById('HelloMessage')
);

ReactDOM.render(
  <ShoppingList name="Xavi" />,
  document.getElementById('ShoppingList')
);

ReactDOM.render(
  <Timer/>,
  document.getElementById('Timer')
);

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('TodoApp')
);

ReactDOM.render(
  <MarkdownEditor/>,
  document.getElementById('MarkdownEditor')
);

ReactDOM.render(
  <App />,
  document.getElementById('Users')
);

registerServiceWorker();
