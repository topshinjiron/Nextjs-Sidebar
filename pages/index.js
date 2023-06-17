import Head from 'next/head';
import { useState } from 'react';
import { SideBar } from '../components/sidebar'

export default function Home() {

  // const [sidebarType, setSidebarType] = useState('common')
  const [sidebarType, setSidebarType] = useState('delivery')

  return (
    <>
      <SideBar type={sidebarType} />
    </>
  )
}
