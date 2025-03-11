import FeatherIcon from "feather-icons-react"
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap"
import FormInput from "../Form/FormInput"
import { Link } from "react-router-dom"
import { useState } from "react";
import emailjs from 'emailjs-com';
import { Bounce, toast, ToastContainer } from "react-toastify";

interface ContactUsProps {
     ref: React.RefObject<HTMLDivElement | null>;
}

interface FormData {
     name: string;
     contactNumber: string;
     email: string;
     serviceType: string;
     websiteCompanyName: string;
     description: string;
}

// interface Error {
//      name: string;
//      contactNumber: string;
//      email: string;
// }

const ContactUs = ({ ref }: ContactUsProps) => {

     const [mailLoading, setIsMainSending] = useState(false);

     const [formData, setFormData] = useState<FormData>({
          name: '',
          contactNumber: '',
          email: '',
          serviceType: '',
          websiteCompanyName: '',
          description: ''
     });

     const handleSelect = (eventKey: any) => {
          setFormData(prev => ({ ...prev, serviceType: eventKey.target.value }))
     };

     // const [error, setError] = useState<Error>({
     //      name: '',
     //      contactNumber: '',
     //      email: '',
     // });

     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
          const form = event.currentTarget
          form.setCustomValidity('')
          if (form.checkValidity() === false) {
               if (form.validity.patternMismatch) {
                    form.setCustomValidity('Please fill in this field.')
               }
          }
          form.reportValidity()
     };

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setIsMainSending(true)

          const customerTemplateParams = {
               to_name: formData.name,
               to_email: formData.email
          };

          const companyTemplateParams = {
               contact: formData.contactNumber,
               from_name: formData.name,
               from_email: formData.email,
               message: formData.description,
               service_type: formData.serviceType ? formData.serviceType : 'Virtual Bookkeeping'
          }

          const promise1 = emailjs.send(
               process.env.REACT_APP_EMAILJS_SERVICEID!,
               process.env.REACT_APP_EMAILJS_USER_TEMPLATEID!,
               customerTemplateParams,
               process.env.REACT_APP_EMAILJS_USERID
          )

          const promise2 = emailjs.send(
               process.env.REACT_APP_EMAILJS_SERVICEID!,
               process.env.REACT_APP_EMAILJS_COMPANY_TEMPLATEID!,
               companyTemplateParams,
               process.env.REACT_APP_EMAILJS_USERID
          )

          const emailPromise = Promise.allSettled([promise1, promise2])

          emailPromise.finally(() => {
               setIsMainSending(false)
          })

          toast.promise(emailPromise, {
               pending: 'Your email is being set. Please wait a moment.',
               success: 'Your email has been sent successfully.',
               error: 'Unable to send email. Please try again after some time.',
          })
     };

     const naturesOfWork = [
          "Virtual Bookkeeping",
          "Setup Xero / QBO / MYOB",
          "Accounts Payable & Receivable",
          "Reconciliation",
          "Financial Reporting",
          "Payroll Management",
          "Other"
     ]

     return (
          <>
               <section ref={ref} id="contactus" className="section pt-lg-7 pb-lg-4 pt-4 pb-3 position-relative">
                    <Container className="testimonial">
                         <Row className="align-items-center">
                              <Col lg={6} data-aos="fade-right" data-aos-duration="600">
                                   <h1 className="display-5 fw-medium mt-0">Get started today</h1>
                                   <p>
                                        "Accledgwise  Your Trusted Offshore Partner for Professional Bookkeeping Services, Tailored to Meet the Unique Accounting Needs of Your Business or Family.
                                   </p>
                                   <p>
                                        Share your requirements and concerns with us, and we’ll provide a free quote for regular or one-time services. Contact us today!
                                   </p>
                                   <div className="mt-5 text-muted">Email me at</div>
                                   <div>
                                        <h4 className="mt-0 fw-medium">
                                             <Link
                                                  target="_blank"
                                                  to="#"
                                                  onClick={() => (window.location.href = 'mailto:info@accledgwise.com')}
                                             >
                                                  info@accledgwise.com
                                             </Link>
                                        </h4>
                                   </div>
                                   <div className="mt-5 text-muted">Social</div>
                                   <ul className="list-inline mt-1">
                                        <li className="list-inline-item me-3">
                                             <Link target="_blank" to="https://www.linkedin.com/in/accledgwise-bookkeeping-llp-923134354/">
                                                  <FeatherIcon icon="linkedin" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                             <Link target="_blank" to="https://x.com/accledgwise">
                                                  <FeatherIcon icon="x" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                             <Link to="https://www.instagram.com/accledgwise/" target="_blank">
                                                  <FeatherIcon icon="instagram" className="icon-xs icon-dual" />
                                             </Link>
                                        </li>
                                        {/* <li className="list-inline-item me-3">
                                             <Link to="#">
                                                  <FeatherIcon icon="instagram" className="icon-xs icon-dual" />
                                             </Link>
                                        </li> */}
                                   </ul>
                              </Col>
                              <Col lg={6} data-aos="fade-left" data-aos-duration="900" className="p-0">
                                   <Form onSubmit={handleSubmit} autoComplete="off">
                                        <Row>
                                             <Col lg={6}>
                                                  <FormInput
                                                       type="text"
                                                       name="name"
                                                       id="name"
                                                       placeholder="Your Name"
                                                       value={formData.name}
                                                       onChange={handleInputChange}
                                                       containerClass={'mb-3'}
                                                       required
                                                       pattern=".*\S.*"
                                                       autoComplete="off"
                                                  />
                                             </Col>
                                             <Col lg={6}>
                                                  <FormInput
                                                       type="tel"
                                                       name="contactNumber"
                                                       id="contactNumber"
                                                       placeholder="Contact Number"
                                                       value={formData.contactNumber}
                                                       onChange={handleInputChange}
                                                       containerClass={'mb-3'}
                                                       required
                                                       pattern=".*\S.*"
                                                       autoComplete="off"
                                                  />
                                             </Col>
                                        </Row>
                                        <Row>
                                             <Col lg={6}>
                                                  <FormInput
                                                       type="email"
                                                       name="email"
                                                       id="email"
                                                       placeholder="Your email"
                                                       value={formData.email}
                                                       onChange={handleInputChange}
                                                       containerClass={'mb-3'}
                                                       required
                                                       autoComplete="off"
                                                  />
                                             </Col>
                                             <Col lg={6}>
                                                  <Form.Select
                                                       value={formData.serviceType}
                                                       onChange={handleSelect}
                                                       defaultValue={''}
                                                       className='mb-3'
                                                  >
                                                       <option value={''}>Nature of work</option>
                                                       {
                                                            naturesOfWork.map((item, index) => (
                                                                 <option value={item} key={index}>{item}</option>
                                                            ))
                                                       }
                                                  </Form.Select>
                                             </Col>
                                        </Row>
                                        <Row>
                                             <Col>
                                                  <FormInput
                                                       type="text"
                                                       name="websiteCompanyName"
                                                       id="website/company"
                                                       placeholder="Website / Company"
                                                       value={formData.websiteCompanyName}
                                                       onChange={handleInputChange}
                                                       containerClass={'mb-3'}
                                                       autoComplete="off"
                                                  />
                                             </Col>
                                        </Row>
                                        <Row>
                                             <Col>
                                                  <FormInput
                                                       type="textarea"
                                                       name="description"
                                                       id="message"
                                                       placeholder="Add your work requirement"
                                                       value={formData.description}
                                                       onChange={handleInputChange}
                                                       rows={5}
                                                       containerClass={'mb-3'}
                                                  />
                                             </Col>
                                        </Row>
                                        <div className="mb-0 text-end" style={{ paddingInline: '12px' }}>
                                             <Button variant="primary" type="submit" disabled={mailLoading}>
                                                  Submit
                                             </Button>
                                        </div>
                                   </Form>
                              </Col>
                         </Row>
                    </Container>
               </section>
               <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
               />
          </>
     )
}

export default ContactUs