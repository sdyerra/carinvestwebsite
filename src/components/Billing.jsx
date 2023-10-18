import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img style={{borderRadius: '5%'}}
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Why Cars? </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        As a child, I always had a toy car in my hand; now, I find myself behind the steering wheel. Realizing that cars, as we know them, are disappearing is a saddening thought. I aspire to unite people who appreciate these beautiful machines for what they truly represent.
        </p>
      </div>  
    </section>
  )
}

export default Billing
