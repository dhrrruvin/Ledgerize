import { Col, Container, Row } from "react-bootstrap"
import { BlogData } from "./data"
import { Link } from "react-router-dom";

interface BlogsProps {
     blogsData: BlogData[];
}

const Blog = ({ blogsData }: BlogsProps) => {
     return (
          <section className="position-relative py-xl-4 py-3 features-3">
               <Container>
                    <Row className="justify-content-center">
                         <Col className="text-center">
                              <h1 className="display-5 fw-medium">Useful Reading</h1>
                              <p className="text-muted mx-auto">Few articles to read to know more about cryptocurrency</p>
                         </Col>
                    </Row>
                    <Row className="mt-5">
                         {(blogsData || []).map((blog, index) => {
                              return (
                                   <Col lg={4} key={index.toString()}>
                                        <div className="mb-4" data-aos="fade-up" data-aos-duration="300">
                                             <div className="crypto-blog-box position-relative">
                                                  <span className="ribbon bg-orange fw-medium">{blog.title}</span>
                                                  <img src={blog.image} alt="crypto" className="img-fluid d-block shadow rounded" />
                                             </div>
                                             <p className="text-muted mt-3 mb-0 fs-14">
                                                  {blog.date} <b>·</b> {blog.time}
                                             </p>
                                             <h4 className="mt-1">
                                                  <Link to="#" className="text-dark">
                                                       {blog.description}
                                                  </Link>
                                             </h4>
                                        </div>
                                   </Col>
                              );
                         })}
                    </Row>
               </Container>
          </section>
     )
}

export default Blog