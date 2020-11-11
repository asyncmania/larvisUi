import React, { useEffect, useState } from 'react'


export function useFetch(uri, options){
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)


   useEffect(() => {
     if(!uri) return
     fetch(uri, options)
     .then(data => data.json())
     .then(setData)
     .catch(setError) 
   }, [uri])

   return {
     loading,
     data,
     error
   }
}