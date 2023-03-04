import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import './styles.scss';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

function App() {
  const { currentUser } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: '/',
      element: currentUser ? <Home /> : <Login />,
    },
    {
      path: '/login/',
      element: <Login />,
    },
    {
      path: '/register/',
      element: <Register />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
