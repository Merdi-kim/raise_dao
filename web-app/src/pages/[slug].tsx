import React, { useEffect, useState } from 'react'
import DetailsPageComponent from '@/components/DetailsPage'
import { CollectionRecordResponse } from '@polybase/client'
import { db } from '@/lib/database'
import { useRouter } from 'next/router'

const DetailsPage = () => {

  const [data, setData] = useState<CollectionRecordResponse<any>[]>([])
  const [id, setId] = useState('')
  const router = useRouter()

  const fetchData = async() => {
    const collectionReference = db.collection("Proposal")
    const { id } = router.query
    //@ts-ignore
    setId(id)
    if(!id) return router.push('/home')
    try{
      const record = await collectionReference.record(`${id}`).get()
      const { data } = record
      setData(data)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    < DetailsPageComponent data={data} proposalId={id}/> 
  ) 
}

export default DetailsPage