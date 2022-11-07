import React from 'react'
import Navigationbar from './Navigationbar'
import crypto from '../assets/crypto.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2 .png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import Transaction from './Transaction'
import '../style/home.css'
import Footermain from './Footermain'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='homeBg h-screen'>
        <Navigationbar />
        <div className='flex mt-10'>
          <div className='text-white py-5 pl-20 pr-2 flex flex-col justify-center items-center'>
            <h1 className='txtglow'>Welcome to CrypTRADE!
              <p> -The Cryptocurrency transaction system </p></h1>
            <p className='font-bold text-2xl'>Check out! <p className=' font-thin text-lg'>Now use Crypto at online stores, payment gateways,etc.</p></p>
            <button class="homeBtn px-4">Start Now!</button>
          </div>
          <img src={crypto} className='homeImg' alt='img'></img>
        </div>
        <h1 className='font-bold text-4xl text-blue-900 text-center mt-32 mb-10'>Learn and Discover more about CrypTRADE and Cryptocurrency:</h1>
        <div className='flex justify-around mb-20'>
          <div className="flex flex-col space-y-4  my-12 ">
            <div className='flex  items-center space-x-5'>
              <img src={icon1} alt="icon" className='h-24 w-24'></img>
              <p className='text-xl font-semibold'>Cryptocurrency is Secure. </p>
            </div>
            <div className='flex  items-center space-x-5'>
              <img src={icon2} alt="icon" className='h-24 w-24'></img>
              <p className='text-xl font-semibold'> Built using Blockchain. </p>
            </div>
            <div className='flex  items-center space-x-5'>
              <img src={icon3} alt="icon" className='h-24 w-24'></img>
              <p className='text-xl font-semibold'>System is Decentralised. </p>
            </div>
            <div className='flex  items-center space-x-5'>
              <img src={icon4} alt="icon" className='h-24 w-24'></img>
              <p className='text-xl font-semibold'>No intermediary bodies </p>
            </div>
          </div>
          <div className=" mb-12 mt-10 ">
            <ReactPlayer url="https://www.youtube.com/watch?v=1YyAzVmP9xQ" controls />
            <p className=" font-bold font-mono text-2xl mt-3  text-red-900" >🎯 You can also watch this video from simplilearn!</p>
          </div>
        </div>
        <div className=' flex formBg justify-center items-center px-10  space-x-4'>
          <Transaction />
          <p className='text-4xl m-2  text-white font-bold homeTxt'>Fill in this form to proceed for the transaction...!<p className='text-white mt-4 font-thin text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur perferendis repellendus voluptatibus enim unde. Adipisci exercitationem amet reiciendis laboriosam. Atque sunt velit, quis consequatur consectetur sint minus dolores esse labore harum impedit repellendus alias quaerat commodi eos, veniam vel officiis veritatis sapiente quasi earum praesentium! Est impedit, voluptates quo temporibus a fugit tenetur porro, odit officiis eum totam blanditiis sint provident doloribus obcaecati hic sunt autem animi. Natus labore, quam reprehenderit eum rem perferendis ad at ea tempore, doloribus explicabo harum. Totam eum enim cum voluptas nulla non. Dolorem vel iste qui asperiores culpa voluptate voluptates veritatis nisi et.</p></p>
        </div>
        <div className='flex flex-col justify-center items-center m-16 space-y-2'>
          <p className='text-blue-900 text-3xl font-bold font-mono '>😁 Thankyou for using Cryptrade! Do provide us your valuable feedback ! 😁 </p>
          <Link to='/feedback' className="no-underline"><button className="homeBtn w-32 py-2">Sure</button> </Link>
        </div>
        <Footermain />
      </div>
    </>
  )
}
