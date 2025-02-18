import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../Card/Card'

export default function Seafood() {

  const { list, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)


  return (
    <Card list={list} loading={loading} />
  )
}