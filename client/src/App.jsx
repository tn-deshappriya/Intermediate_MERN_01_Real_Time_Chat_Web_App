import { Routes, Route } from "react-router-dom"
import HomePage from '../src/pages/HomePage'
import LoginPage from '../src/pages/LoginPage'
import ProfilePage from '../src/pages/ProfilePage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App