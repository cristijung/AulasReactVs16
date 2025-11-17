'use client'; // <-- Esta diretiva OBRIGA a renderização no lado do cliente

import { useState } from 'react';

export default function SimpleCounter() {
  // usando o hook de estado (useState), que só funciona em Client Components
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(c => c + 1);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <p className="text-xl font-medium text-gray-700 mb-4">
        Contagem Atual: <span className="text-indigo-600 font-bold text-3xl">{count}</span>
      </p>
      
      {/* usando o event handler onClick, que exige a hidratação no cliente */}
      <button
        onClick={increment}
        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md 
                   hover:bg-indigo-700 transition duration-150 shadow-md"
      >
        Aumentar Contagem
      </button>
    </div>
  );
}