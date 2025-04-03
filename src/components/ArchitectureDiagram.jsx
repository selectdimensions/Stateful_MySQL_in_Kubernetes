import React, { useState } from 'react';

const ArchitectureDiagram = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedConcepts, setExpandedConcepts] = useState({});
  
  const toggleConcept = (concept) => {
    setExpandedConcepts(prev => ({
      ...prev,
      [concept]: !prev[concept]
    }));
  };
  
  return (
    <div className="flex flex-col bg-slate-50 rounded-lg shadow-lg p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">Stateful MySQL in Kubernetes: From Single Instance to Replicated Cluster</h1>
      
      {/* Navigation Tabs */}
      <div className="flex mb-6 bg-white rounded-lg shadow overflow-hidden">
        <button 
          className={`px-4 py-3 flex-1 font-medium ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`px-4 py-3 flex-1 font-medium ${activeTab === 'task1' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('task1')}
        >
          Task 1: Basic Stateful Design
        </button>
        <button 
          className={`px-4 py-3 flex-1 font-medium ${activeTab === 'task2' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('task2')}
        >
          Task 2: Replication & Scaling
        </button>
        <button 
          className={`px-4 py-3 flex-1 font-medium ${activeTab === 'concepts' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-50'}`}
          onClick={() => setActiveTab('concepts')}
        >
          Key Concepts
        </button>
      </div>
      
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Project Progression & Learning Journey</h2>
          
          <div className="flex flex-col space-y-8">
            {/* Flow diagram */}
            <div className="mx-auto w-full max-w-4xl">
              <svg viewBox="0 0 800 220" className="w-full">
                {/* Background connections */}
                <path d="M150,110 C300,50 500,180 650,110" stroke="#ddd" strokeWidth="60" fill="none" strokeLinecap="round" />
                
                {/* Main stages */}
                <g>
                  <circle cx="150" cy="110" r="50" fill="#4299e1" />
                  <text x="150" y="110" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Task 1</text>
                  <text x="150" y="130" textAnchor="middle" fill="white" fontSize="11">Single MySQL</text>
                </g>
                
                <g>
                  <circle cx="400" cy="110" r="50" fill="#3182ce" />
                  <text x="400" y="110" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Transition</text>
                  <text x="400" y="130" textAnchor="middle" fill="white" fontSize="11">StatefulSet</text>
                </g>
                
                <g>
                  <circle cx="650" cy="110" r="50" fill="#2c5282" />
                  <text x="650" y="110" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Task 2</text>
                  <text x="650" y="130" textAnchor="middle" fill="white" fontSize="11">Replication</text>
                </g>

                {/* Stage labels */}
                <g>
                  <text x="150" y="40" textAnchor="middle" fill="#2d3748" fontWeight="bold">Basic Persistence</text>
                  <text x="150" y="60" textAnchor="middle" fill="#4a5568" fontSize="12">PVC + MySQL Deployment</text>
                </g>
                
                <g>
                  <text x="400" y="40" textAnchor="middle" fill="#2d3748" fontWeight="bold">Ordered Deployment</text>
                  <text x="400" y="60" textAnchor="middle" fill="#4a5568" fontSize="12">StatefulSet + Headless Service</text>
                </g>
                
                <g>
                  <text x="650" y="40" textAnchor="middle" fill="#2d3748" fontWeight="bold">Read/Write Splitting</text>
                  <text x="650" y="60" textAnchor="middle" fill="#4a5568" fontSize="12">Leader-Follower Replication</text>
                </g>

                {/* Performance indicators */}
                <g>
                  <rect x="50" y="180" width="200" height="30" rx="15" fill="#ebf8ff" stroke="#4299e1" />
                  <text x="150" y="200" textAnchor="middle" fill="#2c5282" fontSize="12">~2-3 requests/sec</text>
                </g>

                <g>
                  <rect x="550" y="180" width="200" height="30" rx="15" fill="#ebf8ff" stroke="#4299e1" />
                  <text x="650" y="200" textAnchor="middle" fill="#2c5282" fontSize="12">~7+ requests/sec</text>
                </g>

                {/* Arrow */}
                <path d="M300,200 L500,200" stroke="#4299e1" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#4299e1" />
                  </marker>
                </defs>
              </svg>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800">Task 1 Focus</h3>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  <li>Basic data persistence</li>
                  <li>Single MySQL instance</li>
                  <li>PVC for storage</li>
                  <li>Django database integration</li>
                  <li>Basic initialization</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800">Transition Focus</h3>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  <li>StatefulSet introduction</li>
                  <li>Headless services</li>
                  <li>Ordered pod creation</li>
                  <li>Stable network identities</li>
                  <li>Volume management</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800">Task 2 Focus</h3>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  <li>Leader-follower replication</li>
                  <li>Read/write separation</li>
                  <li>Database routing</li>
                  <li>Performance optimization</li>
                  <li>Horizontal scaling</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-gray-700">Click on the tabs above to explore each phase in detail</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Task 1 Tab */}
      {activeTab === 'task1' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Task 1: Basic Stateful MySQL Architecture</h2>
          
          <div className="flex flex-col">
            {/* Architecture diagram */}
            <div className="mx-auto w-full max-w-4xl border border-gray-200 rounded-lg p-4 bg-slate-50 mb-6">
              <svg viewBox="0 0 800 500" className="w-full">
                {/* Kubernetes cluster border */}
                <rect x="50" y="50" width="700" height="400" rx="20" fill="#f7fafc" stroke="#cbd5e0" strokeWidth="2" strokeDasharray="5,5" />
                <text x="400" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#4a5568">Kubernetes Cluster (AKS)</text>
                
                {/* Django Deployment */}
                <g>
                  <rect x="100" y="120" width="240" height="140" rx="10" fill="#ebf8ff" stroke="#4299e1" strokeWidth="2" />
                  <text x="220" y="145" textAnchor="middle" fontWeight="bold" fill="#2c5282">Django Deployment</text>
                  
                  <rect x="120" y="160" width="80" height="80" rx="5" fill="#bee3f8" stroke="#4299e1" />
                  <text x="160" y="190" textAnchor="middle" fontSize="12" fill="#2c5282">Pod 1</text>
                  <text x="160" y="210" textAnchor="middle" fontSize="10" fill="#2c5282">Django App</text>
                  
                  <rect x="240" y="160" width="80" height="80" rx="5" fill="#bee3f8" stroke="#4299e1" />
                  <text x="280" y="190" textAnchor="middle" fontSize="12" fill="#2c5282">Pod 2</text>
                  <text x="280" y="210" textAnchor="middle" fontSize="10" fill="#2c5282">Django App</text>
                </g>
                
                {/* MySQL Deployment */}
                <g>
                  <rect x="460" y="120" width="240" height="140" rx="10" fill="#e6fffa" stroke="#38b2ac" strokeWidth="2" />
                  <text x="580" y="145" textAnchor="middle" fontWeight="bold" fill="#234e52">MySQL Deployment</text>
                  
                  <rect x="520" y="160" width="120" height="80" rx="5" fill="#b2f5ea" stroke="#38b2ac" />
                  <text x="580" y="190" textAnchor="middle" fontSize="12" fill="#234e52">MySQL Pod</text>
                  <text x="580" y="210" textAnchor="middle" fontSize="10" fill="#234e52">Single Instance</text>
                </g>
                
                {/* PVC */}
                <g>
                  <rect x="520" y="310" width="120" height="60" rx="5" fill="#fffaf0" stroke="#dd6b20" strokeWidth="2" />
                  <text x="580" y="335" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7b341e">PVC</text>
                  <text x="580" y="355" textAnchor="middle" fontSize="10" fill="#7b341e">mysql-single</text>
                  
                  <line x1="580" y1="240" x2="580" y2="310" stroke="#dd6b20" strokeWidth="2" strokeDasharray="4,4" />
                </g>
                
                {/* Services */}
                <g>
                  <rect x="100" y="300" width="240" height="60" rx="5" fill="#ebf4ff" stroke="#3182ce" strokeWidth="2" />
                  <text x="220" y="325" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2a4365">Load Balancer Service</text>
                  <text x="220" y="345" textAnchor="middle" fontSize="10" fill="#2a4365">loginservice (External IP)</text>
                  
                  <rect x="460" y="380" width="240" height="60" rx="5" fill="#ebf4ff" stroke="#3182ce" strokeWidth="2" />
                  <text x="580" y="405" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2a4365">ClusterIP Service</text>
                  <text x="580" y="425" textAnchor="middle" fontSize="10" fill="#2a4365">mysql-svc (Internal)</text>
                </g>
                
                {/* Connections */}
                <line x1="220" y1="260" x2="220" y2="300" stroke="#3182ce" strokeWidth="2" />
                <line x1="580" y1="260" x2="580" y2="380" stroke="#3182ce" strokeWidth="2" />
                <path d="M340,200 Q 400,200 460,200" stroke="#3182ce" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <text x="400" y="180" textAnchor="middle" fontSize="12" fill="#2a4365">Database Connection</text>
                
                {/* External access */}
                <path d="M220,300 Q 220,400 50,400" stroke="#3182ce" strokeWidth="3" fill="none" />
                <text x="100" y="420" textAnchor="middle" fontSize="12" fill="#2a4365">External Traffic</text>
              </svg>
            </div>
            
            {/* Key concepts for Task 1 */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Persistence Concepts in Task 1</h3>
                <p className="text-gray-700 text-sm mb-3">Task 1 introduces <strong>stateful workloads</strong> through the following key components:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Persistent Volume Claim (PVC)</strong>: Requests durable storage that persists beyond pod lifecycles. When the MySQL pod restarts, it retains all data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Volume Mounts</strong>: Maps the PVC to the container's file system at /var/lib/mysql where MySQL stores its data files.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>ConfigMap</strong>: Stores initialization SQL for creating the database, mounted to the startup directory.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Application Integration in Task 1</h3>
                <p className="text-gray-700 text-sm mb-3">The Django application connects to MySQL through:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Database Settings</strong>: Django's settings.py configured to connect to the MySQL service using its ClusterIP service name.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>InitContainer</strong>: Runs before the main container to ensure database migrations are applied and users are created.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Service Discovery</strong>: Kubernetes DNS allows pods to find the database using consistent service names regardless of IP changes.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Implementation sequence */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-2">Task 1 Implementation Sequence</h3>
              <ol className="space-y-1 text-sm text-gray-600 list-decimal pl-5">
                <li>Create Persistent Volume Claim (mysql-pvc.yaml)</li>
                <li>Create MySQL service (mysql-service.yaml)</li>
                <li>Create MySQL ConfigMap with initialization SQL (mysql-config.yaml)</li>
                <li>Deploy MySQL with PVC and ConfigMap (mysql-deployment.yaml)</li>
                <li>Configure Django database settings to use MySQL</li>
                <li>Create initialization container in Django deployment</li>
                <li>Deploy Django application with MySQL connection (deployment.yaml)</li>
                <li>Expose application via LoadBalancer service (service.yaml)</li>
              </ol>
            </div>
            
            {/* Limitations */}
            <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">Limitations of Task 1 Architecture</h3>
              <ul className="space-y-1 text-sm text-red-600 list-disc pl-5">
                <li>Single point of failure - if MySQL pod fails, the entire application is unavailable</li>
                <li>Limited scalability - can't horizontally scale MySQL for read operations</li>
                <li>Performance bottleneck - all read and write operations go to the same instance</li>
                <li>No high availability - maintenance requires downtime</li>
                <li>Limited to ~2-3 requests/second under load testing</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Task 2 Tab */}
      {activeTab === 'task2' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Task 2: MySQL Replication Architecture</h2>
          
          <div className="flex flex-col">
            {/* Architecture diagram */}
            <div className="mx-auto w-full max-w-4xl border border-gray-200 rounded-lg p-4 bg-slate-50 mb-6">
              <svg viewBox="0 0 800 600" className="w-full">
                {/* Kubernetes cluster border */}
                <rect x="50" y="50" width="700" height="500" rx="20" fill="#f7fafc" stroke="#cbd5e0" strokeWidth="2" strokeDasharray="5,5" />
                <text x="400" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#4a5568">Kubernetes Cluster (AKS)</text>
                
                {/* Django Deployment */}
                <g>
                  <rect x="100" y="120" width="240" height="200" rx="10" fill="#ebf8ff" stroke="#4299e1" strokeWidth="2" />
                  <text x="220" y="145" textAnchor="middle" fontWeight="bold" fill="#2c5282">Django Deployment (Scaled)</text>
                  
                  <rect x="120" y="160" width="80" height="70" rx="5" fill="#bee3f8" stroke="#4299e1" />
                  <text x="160" y="185" textAnchor="middle" fontSize="12" fill="#2c5282">Pod 1</text>
                  <text x="160" y="205" textAnchor="middle" fontSize="10" fill="#2c5282">Django App</text>
                  
                  <rect x="240" y="160" width="80" height="70" rx="5" fill="#bee3f8" stroke="#4299e1" />
                  <text x="280" y="185" textAnchor="middle" fontSize="12" fill="#2c5282">Pod 2</text>
                  <text x="280" y="205" textAnchor="middle" fontSize="10" fill="#2c5282">Django App</text>
                  
                  <rect x="120" y="240" width="80" height="70" rx="5" fill="#bee3f8" stroke="#4299e1" />
                  <text x="160" y="265" textAnchor="middle" fontSize="12" fill="#2c5282">Pod 3</text>
                  <text x="160" y="285" textAnchor="middle" fontSize="10" fill="#2c5282">Django App</text>
                  
                  <rect x="240" y="240" width="80" height="70" rx="5" fill="#bee3f8" stroke="#4299e1" />
                  <text x="280" y="265" textAnchor="middle" fontSize="12" fill="#2c5282">Router</text>
                  <text x="280" y="285" textAnchor="middle" fontSize="8" fill="#2c5282">db_for_read()</text>
                  <text x="280" y="295" textAnchor="middle" fontSize="8" fill="#2c5282">db_for_write()</text>
                </g>
                
                {/* StatefulSet */}
                <g>
                  <rect x="460" y="120" width="240" height="280" rx="10" fill="#e6fffa" stroke="#38b2ac" strokeWidth="2" />
                  <text x="580" y="145" textAnchor="middle" fontWeight="bold" fill="#234e52">MySQL StatefulSet</text>
                  
                  {/* Leader */}
                  <rect x="490" y="160" width="180" height="80" rx="5" fill="#b2f5ea" stroke="#38b2ac" strokeWidth="2" />
                  <text x="580" y="180" textAnchor="middle" fontSize="12" fill="#234e52">mysql-0 (Leader)</text>
                  <text x="580" y="200" textAnchor="middle" fontSize="10" fill="#234e52">Handles Writes</text>
                  <text x="580" y="220" textAnchor="middle" fontSize="9" fill="#234e52">server-id=1, log-bin=enabled</text>
                  
                  {/* Follower 1 */}
                  <rect x="490" y="250" width="180" height="60" rx="5" fill="#b2f5ea" stroke="#38b2ac" strokeDasharray="5,2" />
                  <text x="580" y="270" textAnchor="middle" fontSize="12" fill="#234e52">mysql-1 (Follower)</text>
                  <text x="580" y="290" textAnchor="middle" fontSize="10" fill="#234e52">Handles Reads (replica=true)</text>
                  
                  {/* Follower 2 */}
                  <rect x="490" y="320" width="180" height="60" rx="5" fill="#b2f5ea" stroke="#38b2ac" strokeDasharray="5,2" />
                  <text x="580" y="340" textAnchor="middle" fontSize="12" fill="#234e52">mysql-2 (Follower)</text>
                  <text x="580" y="360" textAnchor="middle" fontSize="10" fill="#234e52">Handles Reads (replica=true)</text>
                </g>
                
                {/* Persistent Volumes */}
                <g>
                  <rect x="460" y="420" width="70" height="40" rx="5" fill="#fffaf0" stroke="#dd6b20" strokeWidth="2" />
                  <text x="495" y="445" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7b341e">data-mysql-0</text>
                  
                  <rect x="545" y="420" width="70" height="40" rx="5" fill="#fffaf0" stroke="#dd6b20" strokeWidth="2" />
                  <text x="580" y="445" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7b341e">data-mysql-1</text>
                  
                  <rect x="630" y="420" width="70" height="40" rx="5" fill="#fffaf0" stroke="#dd6b20" strokeWidth="2" />
                  <text x="665" y="445" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7b341e">data-mysql-2</text>
                  
                  <line x1="495" y1="240" x2="495" y2="420" stroke="#dd6b20" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="580" y1="310" x2="580" y2="420" stroke="#dd6b20" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="665" y1="350" x2="665" y2="420" stroke="#dd6b20" strokeWidth="1" strokeDasharray="4,4" />
                </g>
                
                {/* Services */}
                <g>
                  {/* LoadBalancer service */}
                  <rect x="100" y="350" width="240" height="50" rx="5" fill="#ebf4ff" stroke="#3182ce" strokeWidth="2" />
                  <text x="220" y="380" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2a4365">Load Balancer Service</text>
                  
                  {/* Headless service for StatefulSet */}
                  <rect x="460" y="490" width="240" height="40" rx="5" fill="#ebf4ff" stroke="#3182ce" strokeWidth="2" />
                  <text x="580" y="510" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2a4365">mysql (Headless Service, ClusterIP: None)</text>
                  
                  {/* Read service */}
                  <rect x="100" y="410" width="240" height="50" rx="5" fill="#ebf4ff" stroke="#3182ce" strokeWidth="2" />
                  <text x="220" y="435" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2a4365">mysql-read</text>
                  <text x="220" y="450" textAnchor="middle" fontSize="9" fill="#2a4365">Selects pods with replica=true label</text>
                </g>
                
                {/* Connections and data flow */}
                <line x1="220" y1="320" x2="220" y2="350" stroke="#3182ce" strokeWidth="2" />
                <path d="M340,200 Q 410,180 490,200" stroke="#d53f8c" strokeWidth="3" fill="none" />
                <text x="410" y="165" textAnchor="middle" fontSize="10" fill="#d53f8c">Write Operations</text>
                
                <path d="M340,280 Q 400,320 460,300" stroke="#805ad5" strokeWidth="3" fill="none" />
                <text x="400" y="330" textAnchor="middle" fontSize="10" fill="#805ad5">Read Operations</text>
                
                <path d="M580,240 Q 620,270 580,250" stroke="#d53f8c" strokeWidth="2" fill="none" strokeDasharray="3,2" />
                <path d="M580,240 Q 540,270 580,320" stroke="#d53f8c" strokeWidth="2" fill="none" strokeDasharray="3,2" />
                <text x="635" y="265" textAnchor="middle" fontSize="10" fill="#d53f8c">Replication</text>
                
                {/* External access */}
                <path d="M220,350 Q 220,470 50,470" stroke="#3182ce" strokeWidth="3" fill="none" />
                <text x="100" y="490" textAnchor="middle" fontSize="12" fill="#2a4365">External Traffic</text>
                
                {/* Job */}
                <rect x="580" y="70" width="120" height="35" rx="5" fill="#fed7d7" stroke="#e53e3e" strokeWidth="2" />
                <text x="640" y="90" textAnchor="middle" fontSize="10" fill="#e53e3e">mysql-migration Job</text>
                <path d="M640,105 Q 610,120 580,145" stroke="#e53e3e" strokeWidth="1" fill="none" strokeDasharray="3,2" />
              </svg>
            </div>
            
            {/* Key concepts for Task 2 */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">StatefulSet & Replication Concepts</h3>
                <p className="text-gray-700 text-sm mb-3">Task 2 implements <strong>leader-follower replication</strong> through:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>StatefulSet</strong>: Manages pods with stable, unique network identifiers and persistent storage. Unlike Deployments, pods are created sequentially and have predictable names (mysql-0, mysql-1, mysql-2).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Headless Service</strong>: Creates DNS entries for each pod (mysql-0.mysql, mysql-1.mysql) allowing direct addressing of specific instances.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Binary Log Replication</strong>: MySQL's built-in replication where changes to the leader are recorded in binary logs and replayed on followers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">4</span>
                    <span><strong>Read/Write Splitting</strong>: Directs write operations to the leader and distributes read operations across followers for improved performance.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">Database Routing in Django</h3>
                <p className="text-gray-700 text-sm mb-3">The application intelligently routes database operations using:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Multiple Database Connections</strong>: Configures separate database connections for default (write) and replica (read) operations in Django settings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Database Router</strong>: Custom router class that implements <code>db_for_read()</code> and <code>db_for_write()</code> methods to direct queries to appropriate databases.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Service Selection</strong>: Read queries go to mysql-read service which distributes across followers, write queries go directly to mysql-0.mysql.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Implementation sequence */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-700 mb-2">Task 2 Implementation Sequence</h3>
              <ol className="space-y-1 text-sm text-gray-600 list-decimal pl-5">
                <li>Create MySQL configuration ConfigMap with replication settings</li>
                <li>Create headless service for StatefulSet (write_svc.yaml)</li>
                <li>Create service for read operations, targeting replicas (read-svc.yaml)</li>
                <li>Create MySQL StatefulSet with replication configuration</li>
                <li>Wait for StatefulSet pods to be ready (sequential creation)</li>
                <li>Label replica pods for read service selection</li>
                <li>Create database initialization job (job.yaml)</li>
                <li>Create database router in Django application</li>
                <li>Update Django database settings for separate read/write connections</li>
                <li>Deploy updated Django application</li>
              </ol>
            </div>
            
            {/* Performance benefits */}
            <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-700 mb-2">Performance Benefits of Task 2 Architecture</h3>
              <ul className="space-y-1 text-sm text-green-600 list-disc pl-5">
                <li>Read scalability - Read operations distributed across multiple follower instances</li>
                <li>Improved throughput - From ~2-3 requests/sec to ~7+ requests/sec under load testing</li>
                <li>Reduced latency - Read queries experience lower average response times</li>
                <li>Write isolation - Write operations don't compete with reads on the same instance</li>
                <li>Higher availability - Application can continue with read operations even if a single follower fails</li>
                <li>Maintenance flexibility - Followers can be updated one by one without complete downtime</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Key Concepts Tab */}
      {activeTab === 'concepts' && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Key Concepts & Theory</h2>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Concept cards */}
            <div 
              className={`bg-indigo-50 p-4 rounded-lg cursor-pointer transition-all duration-200 ${expandedConcepts['stateful'] ? 'ring-2 ring-indigo-400' : 'hover:bg-indigo-100'}`}
              onClick={() => toggleConcept('stateful')}
            >
              <h3 className="font-bold text-indigo-800 flex items-center">
                <span>Stateful vs. Stateless Workloads</span>
                <span className="ml-auto">{expandedConcepts['stateful'] ? '−' : '+'}</span>
              </h3>
              
              {expandedConcepts['stateful'] && (
                <div className="mt-3 text-sm text-indigo-900">
                  <p className="mb-2"><strong>Stateless workloads</strong> don't store data persistently and can be replaced at any time without data loss. Each request is processed independently without relying on previous interactions.</p>
                  
                  <p className="mb-2"><strong>Stateful workloads</strong> maintain data that must be preserved between restarts. They require:</p>
                  
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Persistent storage that survives pod termination</li>
                    <li>Stable network identity for consistent addressing</li>
                    <li>Ordered deployment and scaling operations</li>
                  </ul>
                  
                  <p className="mb-2">In Kubernetes, stateless applications typically use <strong>Deployments</strong>, while stateful applications use <strong>StatefulSets</strong>.</p>
                  
                  <p>This project demonstrates the transition from a mostly stateless architecture (Task 1) to a fully stateful architecture (Task 2) with data replication and high availability.</p>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-purple-50 p-4 rounded-lg cursor-pointer transition-all duration-200 ${expandedConcepts['persistence'] ? 'ring-2 ring-purple-400' : 'hover:bg-purple-100'}`}
              onClick={() => toggleConcept('persistence')}
            >
              <h3 className="font-bold text-purple-800 flex items-center">
                <span>Kubernetes Storage & Persistence</span>
                <span className="ml-auto">{expandedConcepts['persistence'] ? '−' : '+'}</span>
              </h3>
              
              {expandedConcepts['persistence'] && (
                <div className="mt-3 text-sm text-purple-900">
                  <p className="mb-2">Kubernetes offers several abstractions for storage management:</p>
                  
                  <ul className="space-y-2 mb-3">
                    <li><strong>Volumes</strong>: Provide temporary or persistent storage for pods, with lifecycle tied to the pod.</li>
                    
                    <li><strong>Persistent Volumes (PV)</strong>: Storage resources in the cluster provisioned by administrators or dynamically.</li>
                    
                    <li><strong>Persistent Volume Claims (PVC)</strong>: Requests for storage by users that can be fulfilled by PVs.</li>
                    
                    <li><strong>Storage Classes</strong>: Define different types of storage with different performance characteristics.</li>
                  </ul>
                  
                  <p className="mb-2">In Task 1, we use a single PVC for the MySQL pod. In Task 2, we use <strong>volumeClaimTemplates</strong> in the StatefulSet, which automatically creates a unique PVC for each pod with a predictable naming pattern (data-mysql-0, data-mysql-1, etc.).</p>
                  
                  <p>This ensures each MySQL instance has its own dedicated storage that persists across restarts and reschedules, maintaining data integrity in the replication setup.</p>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-blue-50 p-4 rounded-lg cursor-pointer transition-all duration-200 ${expandedConcepts['statefulset'] ? 'ring-2 ring-blue-400' : 'hover:bg-blue-100'}`}
              onClick={() => toggleConcept('statefulset')}
            >
              <h3 className="font-bold text-blue-800 flex items-center">
                <span>StatefulSets & Ordered Deployment</span>
                <span className="ml-auto">{expandedConcepts['statefulset'] ? '−' : '+'}</span>
              </h3>
              
              {expandedConcepts['statefulset'] && (
                <div className="mt-3 text-sm text-blue-900">
                  <p className="mb-2"><strong>StatefulSets</strong> are specialized workload resources designed for applications that require:</p>
                  
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Stable, unique network identifiers</li>
                    <li>Stable, persistent storage</li>
                    <li>Ordered, graceful deployment and scaling</li>
                    <li>Ordered, automated rolling updates</li>
                  </ul>
                  
                  <p className="mb-2">Key characteristics of StatefulSets:</p>
                  
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li><strong>Predictable Pod Names</strong>: Pods get ordinal indices (mysql-0, mysql-1) instead of random names.</li>
                    <li><strong>DNS Names</strong>: Each pod gets a DNS entry like mysql-0.mysql for direct addressing.</li>
                    <li><strong>Sequential Operations</strong>: Pods are created, updated, and deleted in order.</li>
                    <li><strong>Automated PVC Management</strong>: Creates PVCs using volumeClaimTemplates.</li>
                  </ul>
                  
                  <p>In our MySQL replication setup, this ordering is crucial: mysql-0 must be available before mysql-1 and mysql-2 can initialize replication from it. The ordinal index is also used to determine the pod's role (0 = leader, others = followers).</p>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-teal-50 p-4 rounded-lg cursor-pointer transition-all duration-200 ${expandedConcepts['replication'] ? 'ring-2 ring-teal-400' : 'hover:bg-teal-100'}`}
              onClick={() => toggleConcept('replication')}
            >
              <h3 className="font-bold text-teal-800 flex items-center">
                <span>MySQL Replication & Read/Write Splitting</span>
                <span className="ml-auto">{expandedConcepts['replication'] ? '−' : '+'}</span>
              </h3>
              
              {expandedConcepts['replication'] && (
                <div className="mt-3 text-sm text-teal-900">
                  <p className="mb-2"><strong>MySQL Replication</strong> is a process where data from one MySQL database server (the leader/master) is copied automatically to one or more other servers (followers/slaves).</p>
                  
                  <p className="mb-2">The replication process works through:</p>
                  
                  <ol className="list-decimal pl-5 space-y-1 mb-3">
                    <li><strong>Binary Logging</strong>: The leader records all changes to data in a binary log.</li>
                    <li><strong>Replication Thread</strong>: Each follower has an I/O thread that requests these binary logs.</li>
                    <li><strong>SQL Thread</strong>: The follower executes the received events to replicate the changes.</li>
                  </ol>
                  
                  <p className="mb-2"><strong>Read/Write Splitting</strong> distributes database operations:</p>
                  
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li><strong>Write Operations</strong>: Always directed to the leader to ensure consistency.</li>
                    <li><strong>Read Operations</strong>: Distributed across followers to scale read capacity.</li>
                  </ul>
                  
                  <p className="mb-2">Benefits include:</p>
                  
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Higher read throughput (multiple servers can serve read queries)</li>
                    <li>Reduced load on the leader (more resources for write operations)</li>
                    <li>Improved fault tolerance (reads can continue if a single follower fails)</li>
                    <li>Potential for geographic distribution (followers can be in different regions)</li>
                  </ul>
                  
                  <p>Our implementation uses Django's database router to determine which database connection to use for each operation, automatically directing writes to the leader and reads to the followers.</p>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-red-50 p-4 rounded-lg cursor-pointer transition-all duration-200 ${expandedConcepts['services'] ? 'ring-2 ring-red-400' : 'hover:bg-red-100'}`}
              onClick={() => toggleConcept('services')}
            >
              <h3 className="font-bold text-red-800 flex items-center">
                <span>Kubernetes Service Types & Discovery</span>
                <span className="ml-auto">{expandedConcepts['services'] ? '−' : '+'}</span>
              </h3>
              
              {expandedConcepts['services'] && (
                <div className="mt-3 text-sm text-red-900">
                  <p className="mb-2">Kubernetes Services abstract how a set of Pods are accessed over the network. In our project, we use multiple service types:</p>
                  
                  <ol className="list-decimal pl-5 space-y-2 mb-3">
                    <li>
                      <strong>ClusterIP Service</strong> (mysql-svc in Task 1):
                      <ul className="list-disc pl-5 mt-1">
                        <li>Internal-only access within the cluster</li>
                        <li>Stable IP address that doesn't change</li>
                        <li>Load balances across all matching pods</li>
                      </ul>
                    </li>
                    
                    <li>
                      <strong>Headless Service</strong> (mysql in Task 2):
                      <ul className="list-disc pl-5 mt-1">
                        <li>No ClusterIP assigned (clusterIP: None)</li>
                        <li>Creates individual DNS records for each pod</li>
                        <li>Enables direct pod-to-pod communication</li>
                        <li>Required for StatefulSets to have stable network identities</li>
                      </ul>
                    </li>
                    
                    <li>
                      <strong>Selector Service</strong> (mysql-read in Task 2):
                      <ul className="list-disc pl-5 mt-1">
                        <li>Uses label selectors to target specific pods</li>
                        <li>Only selects pods with replica=true label</li>
                        <li>Automatically load balances reads across followers</li>
                      </ul>
                    </li>
                    
                    <li>
                      <strong>LoadBalancer Service</strong> (loginservice in both tasks):
                      <ul className="list-disc pl-5 mt-1">
                        <li>Exposes application externally using cloud provider's load balancer</li>
                        <li>Assigns external IP for client access</li>
                      </ul>
                    </li>
                  </ol>
                  
                  <p>This service architecture enables proper traffic routing for both internal database communication and external application access while maintaining the separation between read and write operations.</p>
                </div>
              )}
            </div>
            
            <div 
              className={`bg-yellow-50 p-4 rounded-lg cursor-pointer transition-all duration-200 ${expandedConcepts['performance'] ? 'ring-2 ring-yellow-400' : 'hover:bg-yellow-100'}`}
              onClick={() => toggleConcept('performance')}
            >
              <h3 className="font-bold text-yellow-800 flex items-center">
                <span>Performance Optimization Concepts</span>
                <span className="ml-auto">{expandedConcepts['performance'] ? '−' : '+'}</span>
              </h3>
              
              {expandedConcepts['performance'] && (
                <div className="mt-3 text-sm text-yellow-900">
                  <p className="mb-2">The performance improvements in Task 2 come from several database optimization techniques:</p>
                  
                  <ol className="list-decimal pl-5 space-y-2 mb-3">
                    <li>
                      <strong>Read/Write Splitting</strong>:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Separates read and write workloads onto different servers</li>
                        <li>Allows optimization of each server for its specific workload</li>
                        <li>Prevents reads from blocking writes and vice versa</li>
                      </ul>
                    </li>
                    
                    <li>
                      <strong>Horizontal Scaling for Reads</strong>:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Adds more read capacity by adding more follower instances</li>
                        <li>Distributes read queries across multiple servers</li>
                        <li>Particularly effective for read-heavy workloads</li>
                      </ul>
                    </li>
                    
                    <li>
                      <strong>Connection Pooling</strong>:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Reuses database connections rather than creating new ones</li>
                        <li>Reduces connection overhead and improves response times</li>
                        <li>Django implements basic connection pooling automatically</li>
                      </ul>
                    </li>
                    
                    <li>
                      <strong>Load Distribution</strong>:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Kubernetes services automatically distribute traffic</li>
                        <li>Prevents any single server from becoming a bottleneck</li>
                      </ul>
                    </li>
                  </ol>
                  
                  <p className="mb-2">These optimizations resulted in measurable performance improvements:</p>
                  
                  <ul className="list-disc pl-5 mb-2">
                    <li>Increased throughput from ~2-3 requests/second to ~7+ requests/second</li>
                    <li>Reduced average response time</li>
                    <li>Better scalability for handling concurrent users</li>
                  </ul>
                  
                  <p>For even higher performance, additional techniques like query optimization, indexing, caching layers (Redis/Memcached), and connection poolers could be implemented.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Learning Progression Summary</h3>
            
            <div className="overflow-hidden bg-white shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concept</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task 1 (Basic)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task 2 (Advanced)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Kubernetes Workload</td>
                    <td className="px-6 py-4 text-gray-500">Deployment</td>
                    <td className="px-6 py-4 text-gray-500">StatefulSet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Storage Management</td>
                    <td className="px-6 py-4 text-gray-500">Single PVC</td>
                    <td className="px-6 py-4 text-gray-500">volumeClaimTemplates</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Network Addressing</td>
                    <td className="px-6 py-4 text-gray-500">ClusterIP Service</td>
                    <td className="px-6 py-4 text-gray-500">Headless Service + DNS</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Database Architecture</td>
                    <td className="px-6 py-4 text-gray-500">Single Instance</td>
                    <td className="px-6 py-4 text-gray-500">Leader-Follower Replication</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Data Operations</td>
                    <td className="px-6 py-4 text-gray-500">Combined Read/Write</td>
                    <td className="px-6 py-4 text-gray-500">Read/Write Splitting</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Database Configuration</td>
                    <td className="px-6 py-4 text-gray-500">Single Connection</td>
                    <td className="px-6 py-4 text-gray-500">Multiple Databases + Router</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Fault Tolerance</td>
                    <td className="px-6 py-4 text-gray-500">Single Point of Failure</td>
                    <td className="px-6 py-4 text-gray-500">Partial Redundancy</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Performance</td>
                    <td className="px-6 py-4 text-gray-500">~2-3 requests/sec</td>
                    <td className="px-6 py-4 text-gray-500">~7+ requests/sec</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;