'use client';

import { useState } from 'react';

export default function ClientPage() {
  const [responseMessage, setResponseMessage] = useState('');
  const data = 'Hello API World';

  const handleSend = async () => {
    try {
      const response = await fetch('/api/sample-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      const result = await response.json();
      console.log('API Response:', result);
      setResponseMessage(result.message || 'No message in response');
    } catch (err) {
      console.error('Error calling API:', err);
      setResponseMessage('Error calling API');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Sample Route Client Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSend}
      >
        Send to API
      </button>
      {responseMessage && (
        <p className="mt-4 text-green-600">Response: {responseMessage}</p>
      )}
    </div>
  );
}
