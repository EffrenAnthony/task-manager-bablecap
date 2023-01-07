import { useEffect, useState } from "react"

function useLocalStorage(itemName:string, initialValue:any) {
  const [item, setItem] = useState(initialValue)
  // const [sincronizeItem, setSincronizeItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = window.localStorage.getItem(itemName)
      if(localStorageItem) {
        setItem(JSON.parse(localStorageItem))
      } else {
        setItem(initialValue)
        setError('Item not found')
      }
      setLoading(false)
      // setSincronizeItem(true)
    // }, Math.floor(Math.random() * 5000) + 1000);
    }, 1000);
  }, [])

  const saveItem = (newItem:any) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    error,
    saveItem,
    loading
  }

}

export default useLocalStorage