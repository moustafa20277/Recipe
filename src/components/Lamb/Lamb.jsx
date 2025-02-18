import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../Card/Card'

export default function Lamb() {

  const { list, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb`)


  return (
    <Card list={list} loading={loading} />
  )
}