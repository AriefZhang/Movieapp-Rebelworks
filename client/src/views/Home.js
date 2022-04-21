import '../assets/Home.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncFetchMovies } from '../redux/actions/movie'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncFetchMovies())
  }, [])
  return (
    <div>
      <h1>INI HOME</h1>
    </div>
  )
}