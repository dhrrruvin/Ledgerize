import FeatherIcon from "feather-icons-react"
import { Button, Card, CardBody, Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ClientMember } from "./data";

interface TestimonialProps {
     clientMembers: ClientMember[];
};

const Testimonial = ({ clientMembers }: TestimonialProps) => {
     return (
          <section
               className="section mt-5 py-4 py-sm-8 bg-gradient4 position-relative overflow-hidden"
               data-aos="fade-up"
               data-aos-duration="600"
          >
               <div className="divider top d-none d-sm-block"></div>
               <Container className="testimonials-3">
                    <Row className="align-items-center">
                         <Col>
                              <h1 className="display-5 fw-medium">Kind words from excellent clients</h1>
                         </Col>
                         <Col xs="auto" className="text-sm-end pt-2 pt-sm-0">
                              <div className="navigations">
                                   <Button variant="link" className="text-normal p-0 swiper-custom-prev">
                                        <FeatherIcon icon="arrow-left" className="icon-dual" />
                                   </Button>
                                   <Button variant="link" className="text-normal p-0 swiper-custom-next">
                                        <FeatherIcon icon="arrow-right" className="icon-dual" />
                                   </Button>
                              </div>
                         </Col>
                    </Row>
                    <Row className="mt-3 mt-sm-5">
                         <Col>
                              <div className="slider">
                                   <Swiper
                                        spaceBetween={50}
                                        slidesPerView={2}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper: any) => console.log(swiper)}
                                        autoplay={{
                                             delay: 5000,
                                             disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay]}
                                   >
                                        {(clientMembers || []).map((clientMember, index) => {
                                             return (
                                                  <SwiperSlide key={index.toString()}>
                                                       <Card className="mb-0 shadow border">
                                                            <CardBody className="p-md-5">
                                                                 <p className="mb-4 mt-0">
                                                                      {clientMember.review}
                                                                 </p>
                                                                 <div className="d-flex text-align-start">
                                                                      <img className="me-2 rounded-circle" src={clientMember.avatar} alt="" height="36" />
                                                                      <div className="flex-grow-1">
                                                                           <h6 className="m-0">{clientMember.name}</h6>
                                                                           <p className="my-0 text-muted fs-13">{clientMember.designation}</p>
                                                                      </div>
                                                                 </div>
                                                            </CardBody>
                                                       </Card>
                                                  </SwiperSlide>

                                             )
                                        })}
                                   </Swiper>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     )
}

export default Testimonial