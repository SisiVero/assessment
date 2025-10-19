function Home() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-Primary mb-2">Welcome to Your Dashboard</h1>
        <p className="text-Gray">Get an overview of your business performance and key metrics.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-White p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-Gray mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold text-Primary">$45,231</p>
          <p className="text-sm text-green-600 mt-1">+12% from last month</p>
        </div>
        
        <div className="bg-White p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-Gray mb-2">Active Users</h3>
          <p className="text-2xl font-bold text-Primary">2,345</p>
          <p className="text-sm text-green-600 mt-1">+8% from last month</p>
        </div>
        
        <div className="bg-White p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-Gray mb-2">Transactions</h3>
          <p className="text-2xl font-bold text-Primary">1,234</p>
          <p className="text-sm text-red-600 mt-1">-3% from last month</p>
        </div>
        
        <div className="bg-White p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-Gray mb-2">Conversion Rate</h3>
          <p className="text-2xl font-bold text-Primary">3.2%</p>
          <p className="text-sm text-green-600 mt-1">+0.5% from last month</p>
        </div>
      </div>
      
      <div className="bg-White p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold text-Primary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-Secondary rounded-lg hover:bg-Secondary transition-colors text-left">
            <h3 className="font-medium text-Primary mb-1">View Analytics</h3>
            <p className="text-sm text-Gray">Check your detailed analytics</p>
          </button>
          
          <button className="p-4 border border-Secondary rounded-lg hover:bg-Secondary transition-colors text-left">
            <h3 className="font-medium text-Primary mb-1">Manage Revenue</h3>
            <p className="text-sm text-Gray">Track your revenue streams</p>
          </button>
          
          <button className="p-4 border border-Secondary rounded-lg hover:bg-Secondary transition-colors text-left">
            <h3 className="font-medium text-Primary mb-1">CRM Dashboard</h3>
            <p className="text-sm text-Gray">Manage customer relationships</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;