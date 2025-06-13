import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Breadcumb from '../common/Breadcumb'
import { IoArrowForward } from 'react-icons/io5'
import { RxArrowTopRight } from 'react-icons/rx'
import img1 from "@/assets/about/1.png"

const AboutArea = () => {
   // const t = useTranslations("AboutPage")
   return (
      <section className="about-page">
         <Breadcumb>
         home <IoArrowForward /> about us
         </Breadcumb>
         <div className="who-we-are">
         <div className="leftSide">
            <div className="textBlock">
               WHO WE ARE
            </div>
            <div className="img">
               <Image src={img1} width={100} height={100} alt="" />
            </div>
         </div>
         <div className="rightSide">
            <div className=" ">
               <div className="header">
               Our Journey of Personal Growth and Development
               </div>
               <div className="content">
               Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
               </div>
            </div>
            <div className="statistics">
               <div className="stat">
               <div className="number">238+</div>
               <div className="text">HAPPY CLIENT</div>
               </div>
               <div className="stat">
               <div className="number">10+</div>
               <div className="text">YEAR EXPERIENCE</div>
               </div>
            </div>
         </div>
         </div>
         <div className="ppc">
         <div className="header">
            PROGRESSIVE PSYCHOLOGY CENTER
         </div>
         <div className="content">
            <div className="box1 box">
               <div className="textbox">
               <div className="header">
                  ONE-ON-ONE COACHING
               </div>
               <div className="content">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
               </div>
               </div>
            </div>
            <div className="box2 box">
               <div className="textbox">
               <div className="header">
                  ONE-ON-ONE COACHING
               </div>
               <div className="content">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
               </div>
               </div>
            </div>
            <div className="box3 box">
               <div className="textbox">
               <div className="header">
                  ONE-ON-ONE COACHING
               </div>
               <div className="content">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
               </div>
               </div>
            </div>
         </div>
         </div>
         <div className="bbfthc">
         <div className="header">
            Building A <br/>Brighter Future <br/>Through Holistic <br/>Coaching
         </div>
         <div className="content">
            <div className="box1">
               <div className="header">
               OUR VISION
               </div>
               <div className="content">
               Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
               </div>
            </div>
            <Image src={img1} width={100} height={100} alt="" className='img' />

            <div className="box2">
               <div className="header">
               OUR MISSION
               </div>
               <div className="content">
               Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
               </div>
            </div>
         </div>
         </div>
         <div className="mopp">
         <div className="our-team">
            Our Team
         </div>
         <div className="header">
            MEET OUR PROFESSIONAL PSYCHOLOGISTS
         </div>
         <div className="psychologists">
            <div className="psychologist-card">
               <div className="info">
               <div className="name">LOREM IPSUM</div>
               <div className="title">FOUNDER</div>
               <RxArrowTopRight className='linker'/>
               </div>
            </div>
            <div className="psychologist-card">
               <div className="info">
               <div className="name">LOREM IPSUM</div>
               <div className="title">FOUNDER</div>
               <RxArrowTopRight className='linker'/>
               </div>
            </div>
            <div className="psychologist-card">
               <div className="info">
               <div className="name">LOREM IPSUM</div>
               <div className="title">FOUNDER</div>
               <RxArrowTopRight className='linker'/>
               </div>
            </div>
            <div className="psychologist-card">
               <div className="info">
               <div className="name">LOREM IPSUM</div>
               <div className="title">FOUNDER</div>
               <RxArrowTopRight className='linker'/>
               </div>
            </div>
         </div>
         </div>
      </section>
   )
}

export default AboutArea
