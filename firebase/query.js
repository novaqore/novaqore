useEffect(() => {
    const dataRef = ref(db, 'data');
    
    const dataQuery = query( dataRef, orderByChild('param'), equalTo(true));
    
    const unsubscribe = onValue(featuredQuery, (snapshot) => {
      console.log(snapshot.val());
    });

    return () => unsubscribe();
}, []);
