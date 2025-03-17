
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

// component
import AboutUs from "../AboutUs"
import ContactUs from "../ContactUs"
import Footer from "../Footer"
import Hero from "../Hero"
import TopNav from "../Navbar/TopNav"
import Resources from "../Resources"
import Services from "../Services"
import SoftwareSpecialization from "../SoftwareSpecialization"

// data
import { resourcesData } from "../Resources/data"
import { servicesData } from "../Services/data"
import { certificationsData, softwareSpecializationsData } from "../SoftwareSpecialization/data"
import { coreValuesData, whyLedgerizesData } from "../AboutUs/data"

const HomePage = () => {
     const location = useLocation()
     const homeRef = useRef<HTMLDivElement | null>(null);
     const aboutUsRef = useRef<HTMLDivElement | null>(null);
     const servicesRef = useRef<HTMLDivElement | null>(null);
     const softwareSpecializationRef = useRef<HTMLDivElement | null>(null);
     const resourcesRef = useRef<HTMLDivElement | null>(null);
     const blogRef = useRef<HTMLDivElement | null>(null);
     const contactUsRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          let id: any;
          if (location.pathname === '/home' && homeRef.current) {
               id = setTimeout(() => {
                    homeRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          else if (location.pathname === '/home/aboutus' && aboutUsRef.current) {
               id = setTimeout(() => {
                    aboutUsRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          else if (location.pathname === '/home/services' && servicesRef.current) {
               id = setTimeout(() => {
                    servicesRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          else if (location.pathname === '/home/softwareSpecialization' && softwareSpecializationRef.current) {
               id = setTimeout(() => {
                    softwareSpecializationRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          else if (location.pathname === '/home/resources' && resourcesRef.current) {
               id = setTimeout(() => {
                    resourcesRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          else if (location.pathname === '/home/blog' && blogRef.current) {
               id = setTimeout(() => {
                    blogRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          else if (location.pathname === '/home/contactus' && contactUsRef.current) {
               id = setTimeout(() => {
                    contactUsRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
               }, 300)
          }
          return (() => {
               clearTimeout(id)
          })
     }, [location, softwareSpecializationRef, servicesRef, aboutUsRef, contactUsRef, resourcesRef, homeRef])

     return (
          <div>
               <div className="header" ref={homeRef}>
                    {/* header */}
                    <TopNav />

                    {/* hero */}
                    <Hero />
               </div>

               {/* about us */}
               <AboutUs whyLedgerizesData={whyLedgerizesData} coreValuesData={coreValuesData} ref={aboutUsRef} />

               {/* services */}
               <Services servicesData={servicesData} ref={servicesRef} />

               {/* software specialization */}
               <SoftwareSpecialization
                    softwareSpecializationsData={softwareSpecializationsData}
                    certificationData={certificationsData}
                    ref={softwareSpecializationRef}
               />

               {/* resources */}
               <Resources resourcesData={resourcesData} ref={resourcesRef} />

               {/* Blogs */}
               {/* <Blog blogsData={blogsData} ref={blogRef} /> */}

               {/* contact us */}
               <ContactUs ref={contactUsRef} />

               {/* footer */}
               <Footer />
          </div>
     )
}

export default HomePage