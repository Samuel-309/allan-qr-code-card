import ReactDOM from 'react-dom/client'
import App from './App'

// Enhanced Logging
console.log('🚀 QR Code Card Application Starting...')
console.log('Environment:', import.meta.env.MODE)
console.log('Timestamp:', new Date().toISOString())

try {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  console.log('✅ Application Rendered Successfully')
} catch (error) {
  console.error('❌ Rendering Failed:', error)
  // Send error to a logging service if needed
  window.renderError = error
}