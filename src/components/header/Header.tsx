import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import styles from './Header.module.scss'
import { NotificationsNone, SettingsOutlined } from '@mui/icons-material'

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div>
        <TextField
          id="outlined-basic"
          placeholder="Search..."
          variant="outlined"
          // className={styles.search}
          sx={{
            '.MuiOutlinedInput-root': {
              borderRadius: '10px',
              boxShadow: '0px 0px 18px 0px #0000001A',
              width: '300px',
              backgroundColor: '#fff',
              border: 'none',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="/assets/searchIcon.png" alt="search" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={styles.endOptions}>
        <span className={styles.icon}>
          <NotificationsNone />
        </span>
        <span className={styles.icon}>
          <SettingsOutlined />
        </span>
      </div>
    </div>
  )
}
