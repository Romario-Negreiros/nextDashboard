import { useState, useEffect } from 'react'

import type { Dispatch, SetStateAction } from 'react'

type Response<I> = [I, Dispatch<SetStateAction<I>>]

const usePersistedState = <I>(key: string, initialState: I): Response<I> => {
  const [state, setState] = useState<I>(() => {
    const savedState = localStorage.getItem(key)
    if (savedState !== null) {
      return JSON.parse(savedState)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [
    state,
    setState
  ]
}

export default usePersistedState
