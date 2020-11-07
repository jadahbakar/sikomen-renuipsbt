import React from 'react'
import './Switcher.css'
import cx from 'classnames'

const Swither = ({ rounded = false, isToogled, onToogle }) => {
  const sliderCX = cx('slider', { rounded: rounded })

  return (
    <>
      <label className='switch'>
        <input type='checkbox' checked={isToogled} onChange={onToogle} />
        <span className={sliderCX} />
      </label>
    </>
  )
}

export default Swither
