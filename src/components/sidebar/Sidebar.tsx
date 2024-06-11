'use client'

import React, { useState } from 'react'
import { Dashboard, Groups } from '@mui/icons-material'
import styles from './sidebar.module.scss'

const adminSideBarOption = [
  { title: 'Dashboard', icon: <Dashboard /> },
  { title: 'Manage Client', icon: <Groups /> },
]

export default function Sidebar() {
  const [selected, setSelected] = useState('Dashboard')
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h1>
          <span>Bd</span>LMS
        </h1>
      </div>
      <div className={styles.options}>
        {adminSideBarOption.map((option, i) => (
          <div
            key={i}
            className={styles.option}
            onClick={() => setSelected(option.title)}
            style={{ boxShadow: selected !== option.title && 'none' }}
          >
            {option.icon}
            <p>{option.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
