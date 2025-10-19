import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layout/DashBoardLayout'
import Revenue from './screens/Revenue'
import UIInProgress from './screens/UIInProgress'

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<UIInProgress />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/analytics" element={<UIInProgress />} />
        <Route path="/crm" element={<UIInProgress />} />
      </Routes>
    </DashboardLayout>
  )
}

export default App
