import AboutUs from "../AboutUs"
import BackToTop from "../BackToTop"
import Career from "../Career"
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
import { softwareSpecializationsData } from "../SoftwareSpecialization/data"
import { coreValuesData, whyLedgerizesData } from "../AboutUs/data"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

const HomePage = () => {
     const location = useLocation()
     const homeRef = useRef<HTMLDivElement | null>(null);
     const aboutUsRef = useRef<HTMLDivElement | null>(null);
     const servicesRef = useRef<HTMLDivElement | null>(null);
     const resourcesRef = useRef<HTMLDivElement | null>(null);
     const contactUsRef = useRef<HTMLDivElement | null>(null);

     useEffect(() => {
          if(location.pathname === '/home' && homeRef.current) {
               homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (location.pathname === '/home/aboutus' && aboutUsRef.current) {
               aboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if(location.pathname === '/home/services' && servicesRef.current) {
               servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if(location.pathname === '/home/resources' && resourcesRef.current) {
               resourcesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if(location.pathname === '/home/contactus' && contactUsRef.current) {
               contactUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
     }, [location, homeRef, aboutUsRef, servicesRef, resourcesRef, contactUsRef])

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
               <SoftwareSpecialization softwareSpecializationsData={softwareSpecializationsData} />

               {/* resources */}
               <Resources resourcesData={resourcesData} ref={resourcesRef} />

               {/* contact us */}
               <ContactUs ref={contactUsRef} />

               {/* footer */}
               <Footer />

               {/* back to top */}
               {/* <BackToTop variant='primary' /> */}
          </div>
     )
}

export default HomePage