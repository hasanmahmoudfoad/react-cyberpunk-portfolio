import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Work from './Components/Work/Work';
import BeyondWork from './Components/BeyondWork/BeyondWork';
import NotFound from './Components/NotFound/NotFound';
import { Toaster } from 'react-hot-toast';



function App() {
   let routers = createBrowserRouter([
      {
        path: '', element: <Layout />, children: [
          { path: '/', element: <ProtectedRoute><About /></ProtectedRoute> },
          { path: 'Education', element: <ProtectedRoute><Education /></ProtectedRoute> },
          { path: 'Projects', element: <ProtectedRoute><Projects /></ProtectedRoute> },
          { path: 'Work', element: <ProtectedRoute><Work /></ProtectedRoute>},
          { path: 'BeyondWork', element: <ProtectedRoute><BeyondWork /></ProtectedRoute>},
          { path: "*", element: <NotFound /> },
        ]
      }
    ])

  return (
    <div className="App">
    <Toaster />
        <RouterProvider router={routers} />
    </div>
  );
}

export default App;
