import { NextResponse } from 'next/server';

export async function POST(request) {
 try {
   const body = await request.json();
   const { data } = body;

   return NextResponse.json(data);
 } catch (error) {
   console.error('Error :', error);
   return NextResponse.json({ 
     success: false, 
     error: error.message || 'An error occurred'
   }, { status: 500 });
 }
}
