"use client";
import { getConcerts } from '@/controller/concerts';
import React, { useEffect, useState } from 'react'
import ConcertList from './ConcertList';
import { getProfile } from '@/controller/login';

const Page = () => {
  const [concerts, setConcerts] = useState<any[]>([]);
  const [userProfile, setUserProfile ] = useState(null);

  const fetchConcerts = async () => {
    try {
      const concerts = await getConcerts();
      setConcerts(concerts);
    } catch {
      console.log("Fail to fatch!");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchConcerts();
      (async ()=> {
        const userToken = localStorage.getItem("userToken") as string
        const userProfile = await getProfile(userToken);
        setUserProfile(userProfile);
      })();
    }
  }, []);
  
  return (
    <ConcertList concerts={concerts} fetchConcerts={fetchConcerts} userProfile={userProfile} />
  )
}

export default Page