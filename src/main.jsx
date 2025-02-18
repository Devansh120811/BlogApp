import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Page1 from './pages/page1.jsx'
import Page2 from './pages/Page2.jsx'
import Page3 from './pages/Page3.jsx'
import Page4 from './pages/Page4.jsx'
import Page5 from './pages/Page5.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}/>
      <Route path='page1' element={<Page1/>}/>
      <Route path='page2' element={<Page2/>}/>
      <Route path='page3' element={<Page3/>}/>
      <Route path='page4' element={<Page4/>}/>
      <Route path='page5' element={<Page5/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
