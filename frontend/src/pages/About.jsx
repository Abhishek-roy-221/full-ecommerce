import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Forever is your one-stop online destination for fashion, lifestyle, and everyday essentials, bringing together style, quality, and affordability in one place. We believe shopping should be seamless and enjoyable, which is why we offer carefully curated collections, secure payments, fast delivery, and easy returns.</p>
<p>At Forever, our goal is not just to sell products but to create a trusted shopping experience that inspires confidence and keeps you coming back — because style and trust should last Forever.</p>
<b className='text-gray-800'>Our Mission</b>
<p>At Forever, our mission is to make quality fashion and lifestyle products accessible to everyone by combining style, affordability, and convenience. We aim to deliver a seamless shopping experience that saves time, builds trust, and adds value to our customers’ lives. With a focus on customer satisfaction, innovation, and reliability, we strive to create a platform where shopping is not just about buying — it’s about enjoying a journey that lasts Forever.</p>
</div>
      </div>
      <div className='text-xl py-4'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Quality Assurance:</b>
<p className='text-gray-600'>At Forever, quality is at the heart of everything we do. Every product listed on our platform goes through a strict selection process to ensure it meets our standards of durability, comfort, and style.</p>
</div>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Convenience:</b>
<p className='text-gray-600'>At Forever, we make shopping simple, fast, and hassle-free. With an easy-to-navigate website, secure payment options, quick delivery, and a smooth return process, we ensure that your shopping experience is as effortless as possible. Wherever you are, whenever you want — Forever brings quality products right to your doorstep with just a few clicks.</p>
</div>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Exceptional Customer Service:</b>
<p className='text-gray-600'>At Forever, we believe that great products deserve equally great service. Our dedicated support team is always ready to assist you at every step — from browsing and ordering to delivery and returns. We prioritize clear communication, quick resolutions, and personalized assistance to ensure your shopping experience is smooth and worry-free.</p>
</div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
