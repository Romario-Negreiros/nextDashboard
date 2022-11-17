import React from 'react'

type Response<I> = [I, React.Dispatch<React.SetStateAction<I>>]

const usePersistedState = <I>(key: string, initialState: I): Response<I> => {
  const [state, setState] = React.useState<I>(() => {
    const savedState = localStorage.getItem(key)
    if (savedState !== null) {
      return JSON.parse(savedState)
    } else {
      return initialState
    }
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [
    state,
    setState
  ]
}

export default usePersistedState
