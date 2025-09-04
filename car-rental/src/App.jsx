// App.jsx
import './App.css'
import AppRoutes from "./routes/Routes.jsx"
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}

export default App
