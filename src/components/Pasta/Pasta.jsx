import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../Card/Card'

export default function Pasta() {

  const { list, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta`)


  return (
    <Card list={list} loading={loading} />
  )
}