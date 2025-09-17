import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SuccessPage from "./pages/SucessPage"
import FailPage from "./pages/FailPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <header className="py-6 bg-white/80 backdrop-blur-sm border-b border-green-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Casso Ebook Store
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/payment-fail" element={<FailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
  