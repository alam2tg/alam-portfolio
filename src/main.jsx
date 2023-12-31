
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//pages
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import Resume from './pages/Resume.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [

            {
                // https://reactrouter.com/en/main/route/route#path
                // The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.
                path: '/',
                element: <About />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />
            },
            {
                path: '/Resume',
                element: <Resume />,

            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
