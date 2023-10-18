import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Start investing
         <br className='sm:block hidden'/>in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Provide us with your budget and your risk profile, and we will generate a list of options for you.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
        style={{borderRadius: '10%'}}
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
