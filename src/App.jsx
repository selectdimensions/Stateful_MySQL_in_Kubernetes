import React from 'react'
import ArchitectureDiagram from './components/ArchitectureDiagram'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Kubernetes MySQL Architecture Visualization
        </h1>
        <ArchitectureDiagram />
      </div>
    </div>
  )
}

export default App