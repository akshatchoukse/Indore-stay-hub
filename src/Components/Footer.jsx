import React from 'react'

function Footer() {
  return (
    <div className='h-[100vh] w-[100%] bg-[#f6f4f1] px-[35px] py-[35px] font-serif'>
      <div className='h-[15vh] w-[100%] leading-[1]  flex  justify-between'>
        <div>
          <div className='uppercase text-[30px] text-[#404a5b] space-x-1.5'><span>i</span><span>n</span><span>d</span><span>o</span><span>r</span><span>e</span></div>
          <div className='flex items-center justify-center text-[13px]'>STAY HUB</div>
        </div>
        <div className='h-[15vh] bg-[url("/logo.png")] w-[8%] bg-cover bg-no-repeat'></div>

      </div>
      <div className='h-[0.1vh] w-[100%] bg-[#404a5b]'></div>
      <div className='h-[60vh] w-[100%] text-[#404a5b] pt-10 flex items-center justify-between'>
        <div className='h-[55vh] flex flex-col gap-2 w-[20%]'>
          <h1 className='font-bold'>Indore StayHub</h1>
          <label className='mt-5'>About</label><br></br>
          <label>Contact</label><br></br>
          <label>Properties</label><br></br>
          <label>Gallery</label>
        </div>
        <div className='h-[55vh] flex flex-col gap-2 w-[20%]'>
          <h1 className='font-bold'>More Information</h1>
          <label className='mt-5'>Term</label><br></br>
          <label>Privacy Policy</label><br></br>
          <label>Cookies Policy</label>
        </div>
        <div className='h-[55vh] flex flex-col gap-2 w-[20%]'>
          <h1 className='font-bold'>Follow Us</h1>
          <label className='mt-5'>Instagram</label><br></br>
          <label>Facebook</label><br></br>
          <label>Linkedin</label>
        </div>
        <div className='h-[55vh] flex flex-col w-[20%]'>
          <h1 className='font-bold'>Get In Touch</h1>
          <label className='mt-5'>CONTACT US</label><br></br>
          <label>Reservations</label><br></br>
          <a href="mailto:choukseakshat@gmail.com">
            <label>choukseakshat@gmail.com</label>
          </a><br />
          <label>General Query</label>
          <a href="tel:+919111177718">
            <label>+91 9111177718</label>
          </a>

        </div>
      </div>
    <div className='h-[5vh] text-[#404a5b] text-[13px] w-[100%] flex items-center justify-between'>
      <div>Copyright @2025 Indore StayHub.</div>
      <div>Privacy Policy  Terms & Conditions</div>
    </div>
    </div>
  )
}

export default Footer