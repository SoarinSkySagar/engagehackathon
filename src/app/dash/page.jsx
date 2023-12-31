"use client";

import React from 'react'
import {BsFillFileCheckFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {GrDocumentText} from 'react-icons/gr'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {LuSettings} from 'react-icons/lu'
import Link from "next/link";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {TbCheckupList} from 'react-icons/tb'
import {Link as Limk} from 'next/link';
import { signOut, useSession } from "next-auth/react";
import styles from "../../components/navbar/navbar.module.css";



export default function Dashboard() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    const response = await signOut();

    if (response.ok) {
      // Sign-out was successful
      console.log('User signed out');
      // Redirect to the home page
      window.location.href = '/';
    } else {
      // Sign-out failed
      console.error('Sign-out failed:', response.error);
    }
  };


  return (
    <div className='px-16 py-8 overflow-hidden h-screen'>
      <div className='flex'>
        <div className='font-semibold text-black'>
          <div>Welcome back,</div>
          <div className='text-4xl'>User</div>
        </div>
        <div className='ml-auto flex items-center'>
          <button className='flex items-center gap-2 bg-blue-500 text-lg font-bold hover:bg-blue-700 text-white py-4 px-11 rounded-lg '>
            <BsFillFileCheckFill/> <div><Link href="/dash/form">
        Health Checkup
      </Link></div>
          </button>
          <button className={`flex items-center gap-2 bg-red-500 text-lg hover:bg-red-700 text-white font-bold py-4 px-11 ml-4 rounded-lg ${styles.logout}`} onClick={handleSignOut}>
            <FiLogOut/> <div>Logout</div>
          </button>
        </div>
      </div>
      <div className='h-screen flex pt-8'>
      <div className='grid grid-cols-3 grid-rows-3 gap-4 w-full h-5/6'>
      <div className='col-span-2 row-span-1 rounded-2xl overflow-hidden cursor-pointer' style={{backgroundImage:"url('/checkup.png')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>            <div className='bg-red-400 min-w-max min-h-full bg-opacity-30 text-black font-bold text-4xl flex items-center justify-center'>
                <TbCheckupList/>Previous Health Checkups
            </div>
        </div>

        <div className='col-span-1 row-span-2 rounded-2xl overflow-hidden cursor-pointer' style={{backgroundImage:"url('/map (1).png')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>
        <div className='bg-blue-600 min-w-max min-h-full bg-opacity-30 text-black font-semibold text-4xl flex items-center justify-center'>
        <Link href="/dash/docfinder"> <MdOutlineHealthAndSafety/>Health Centres Nearby
      </Link>
            </div>
        </div>
        <div className='col-span-1 row-span-1 bg-green-500 rounded-2xl flex items-center justify-center text-black font-semibold text-4xl'>
            <CgProfile/>Your Profile
        </div>
        <div className='col-span-1 row-span-1 overflow-hidden rounded-2xl ' style={{backgroundImage:"url('/records.png')", backgroundSize: "cover", backgroundPosition: "center", height: "100%"}}>
            <div className='bg-yellow-400 min-w-max min-h-full bg-opacity-30 text-black font-bold text-4xl flex items-center justify-center'>
                <GrDocumentText/>Medical Records
            </div>
        </div>
        <div className='col-span-2 row-span-1 bg-orange-500 rounded-2xl flex items-center justify-center text-black font-semibold text-4xl'>
          <BsFillTelephoneFill/> Contact Us
        </div>
        <div className='col-span-1 row-span-1 rounded-2xl bg-orange-300 flex items-center justify-center text-black font-semibold text-4xl'>
            <LuSettings/>Settings
        </div> 
      </div>
    </div>
    </div>
  );
}