import { useState, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import FinishPurchase from './FinishPurchase';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const FinishPurchaseView = () => {





  const cart = JSON.parse(localStorage.getItem('cart'))



  return (
    <>
      <FinishPurchase cart={cart} />
    </>


  )
}

export default FinishPurchaseView