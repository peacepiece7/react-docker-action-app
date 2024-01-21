import React, { useEffect, useMemo } from 'react'
import changeTextColor from '@/utils/gradient'

import dayjs from 'dayjs'

import styles from './index.module.css'
import { DATE_FORMAT } from '@/constants'

export default function Title() {
  // https://day.js.org/docs/en/display/format
  const today = useMemo(() => dayjs().format(DATE_FORMAT), [])

  useEffect(() => {
    // title gradient관련 설정입니다.
    Array.from(document.querySelectorAll('.gradient-cover p')).map((el, i) => {
      if (i === 0) el.setAttribute('data-before', 'FastCampus To Do List')
      else if (i === 1) el.setAttribute('data-before', today)
    })
    // '.gradient-cover p' 의 색깔을 2초마다 변경합니다.
    // React.strict모드에서는 두 번 동작하니까 주의해주세요.
    changeTextColor('.gradient-cover p', 2000)
  }, [])

  return (
    <h1 className={[styles.header, 'gradient'].join(' ')}>
      <div className='gradient-cover'>
        <p>FastCampus To Do List</p>
      </div>
      <div className='gradient-cover'>
        <p>{today}</p>
      </div>
    </h1>
  )
}
