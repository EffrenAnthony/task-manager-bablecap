import './App.scss';
import { Home } from './containers';
import TaskProvider from './context/taskContext';
import Layout from './layout';

function App() {
  return (
    <div id='app'>
      <TaskProvider>
        <Layout>
          <Home />
        </Layout>
      </TaskProvider>
    </div>
  );
}

export default App;
