import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '@/lib/firebase/init';

export default function Page(){
  const [data, setData ] = useState({})
  useEffect(() => {
      const dataRef = ref(db, `data`);
      const unsubscribe = onValue(dataRef, (snapshot) => {
        setData(snapshot.val())
      });
  
      return () => unsubscribe();
  }, []);
  
  return(
    <div>data</div>
  )
}
