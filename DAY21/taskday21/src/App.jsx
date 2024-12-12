import './App.css';
import Parent from './reactmemo';
import App1 from './usememo'
import App2 from './usecallback';
import App3 from './lazyloading';
function App() {
  return (
    <div>
      <h2>React Memo Example</h2>
      <Parent />
      <hr />
      <h2>Use Memo Example</h2>
      <App1 />
      <hr />
      <h2>Use Callback Example</h2>
      <App2 />
      <hr />
      <h2>Lazy Loading Example</h2>
      <App3 />
    </div>
  );
}

export default App;
