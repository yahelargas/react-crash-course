import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'

const JobPage = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=> {
        const fetchjob = async () => {
            try {
                console.log(id);
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
              } 
            catch (error) {
                console.log("Error fetching data", error);
              }
            finally{
                setLoading(false)
              }
        }
        fetchjob();
    }
    ,[])

  return (
    loading ? <Spinner/> : <h1>{job.title}</h1>
  )
}

export default JobPage