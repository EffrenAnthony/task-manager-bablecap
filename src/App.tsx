import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { CustomStaticPage, Home, SingleTask } from './containers';
import TaskProvider from './context/taskContext';
import Layout from './layout';

function App() {
  return (
    <div id="app">
      <TaskProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singleTask/:id" element={<SingleTask />} />
            <Route
              path="/custom-static-page"
              element={<CustomStaticPage name="Pagina de ejemplo 1" />}
            />
            <Route
              path="/custom-static-page-2"
              element={<CustomStaticPage name="Pagina de ejemplo 2" />}
            />
            <Route
              path="/custom-static-page-contact-us"
              element={<CustomStaticPage name="Contact Us" />}
            />
          </Routes>
        </Layout>
      </TaskProvider>
    </div>
  );
}

export default App;
