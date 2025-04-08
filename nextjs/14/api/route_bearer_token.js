import { admin } from '@/lib/firebase/admin';
import { NextResponse } from 'next/server';

export async function POST(request) {

  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ 
      success: false, 
      error: 'Missing or invalid authorization token' 
    }, { status: 401 });
  }


  try {
    const idToken = authHeader.split('Bearer ')[1];
    const user = await admin.auth().verifyIdToken(idToken);
    const body = await request.json();
    
    console.log(user)
    console.log(body)






    
   return NextResponse.json(user);
 } catch (error) {
   console.error('Error :', error);
   return NextResponse.json({ 
     success: false, 
     error: error.message || 'An error occurred'
   }, { status: 500 });
 }
}
