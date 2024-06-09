"use client"
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { modalState } from '../atom/modalAtom'

export default function Comment() {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      <h1>Comment Modal</h1>
      {open && <h1>The Modal is Open</h1>}
    </div>
  )
}
