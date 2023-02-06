import './App.scss';
import { Button } from '@arco-design/web-react'
import styles from './style.module.scss'

function App() {
  return (
    <div className="App-container">
      <p>hello world</p>
      <div className={styles['btn-container']}>
        <Button type='primary'>click</Button>
      </div>
    </div>
  );
}

export default App;
