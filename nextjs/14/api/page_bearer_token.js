"use client"
import { auth } from "@/lib/firebase/init";

export default function AuthTokenPage(){
    const handleAuthToken = async ()=> {
        try {
            const token = await auth.currentUser.getIdToken()
            const response = await fetch('/api/auth-route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    displayName: 'Your Name'
                }),
            });

            const result = await response.json();
            console.log(result);
          } catch (err) {
            console.error(err);
          }
    }

    return(
        <div>
            <button 
                className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white"
                onClick={handleAuthToken}
            >
                Auth
            </button>
        </div>
    )
}
