import { useState } from 'react';
import { Header } from './components/Header';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
      
      </main>
    </div>
  );
}
