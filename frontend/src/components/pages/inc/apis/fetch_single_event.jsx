
import React, { useState, useEffect } from 'react';
import { BACKEND_URL_IMAGE } from '../../../../constants';
import Common from '../../../inc/Common';
import "./css/event.css";
import "./css/eventvariables.css";


const SingleEventdata = (props) => {

   const {
      location: { state },
   } = props;

   const post = state?.post
   //  console.log(post);
   return (
      // <div className="row gy-4">
      //    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
      //       <div className="member">
      //          <img src={`${BACKEND_URL_IMAGE}${post?.attributes?.featured_image?.data?.attributes?.url}`} className="img-fluid" style={{ height: '280px', width: '350px', objectFit: 'cover' }} alt="" />
      //          <h4>{post?.attributes?.title}</h4>
      //          <span>{post?.attributes?.location}</span>
      //          <br />
      //          <span>{post?.attributes?.description}</span>
      //          {/* <div className="social">
      //           view more
      //           <a href><i className="bi bi-eye" /></a>
      //         </div> */}
      //       </div>
      //    </div>
      // </div>
      <>
      <Common/>
         <main id="main">
            <section className="single-post-content">
               <div className="container">
                  <div className="row">
                     <div className="col-md-9 post-content" data-aos="fade-up">
                        {/* ======= Single Post Content ======= */}
                        <div className="single-post">
                           <div className="post-meta">
                              <h1 className="mb-5">{post?.attributes?.title}</h1>
                              <span className="date">{post?.attributes?.location}</span> <span className="mx-1">•</span> <span>{post?.attributes?.event_date}</span> <span className="mx-1">•</span> <span>{post?.attributes?.event_time}</span></div>

                           <figure className="my-4">
                              <img src={`${BACKEND_URL_IMAGE}${post?.attributes?.featured_image?.data?.attributes?.url}`} className="img-fluid" style={{ maxHeight: '1080px', maxWidth: '905px', objectFit: 'cover' }} alt="" />
                              <figcaption>{post?.attributes?.event_image_caption}</figcaption>
                           </figure>
                           <p><span >{post?.attributes?.description}</span></p>
                          
                           <figure className="my-4">
                              <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid" />
                              <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit? </figcaption>
                           </figure>
                           <p>Quis molestiae, dolorem consequuntur labore perferendis enim accusantium commodi optio, sequi magnam ad consectetur iste omnis! Voluptatibus, quia officia esse necessitatibus magnam tempore reprehenderit quo aspernatur! Assumenda, minus dolorem repellendus corporis corrupti quia temporibus repudiandae in. Sit rem aut, consectetur repudiandae perferendis nemo alias, iure ipsam omnis quam soluta, nobis animi quis aliquam blanditiis at. Dicta nemo vero sequi exercitationem.</p>
                           <p>Architecto ex id at illum aperiam corporis, quidem magnam doloribus non eligendi delectus laborum porro molestiae beatae eveniet dolor odit optio soluta dolores! Eaque odit a nihil recusandae, error repellendus debitis ex autem ab commodi, maiores officiis doloribus provident optio, architecto assumenda! Nihil cum laboriosam eos dolore aliquid perferendis amet doloremque quibusdam odio soluta vero odit, ipsa, quisquam quod nulla.</p>
                           <p>Consequuntur corrupti fugiat quod! Ducimus sequi nemo illo ad necessitatibus amet nobis corporis et quasi. Optio cum neque fuga. Ad excepturi magnam quisquam ex voluptatibus vitae aut nam quidem doloribus, architecto perspiciatis sit consequatur pariatur alias animi expedita quas? Et doloribus voluptatibus perferendis qui fugiat voluptatum autem facere aspernatur quidem quae assumenda iste, sit similique, necessitatibus laborum magni. Ea, dolores!</p>
                           <p>Possimus temporibus rerum illo quia repudiandae provident sed quas atque. Ipsam adipisci accusamus iste optio illo aliquam molestias? Voluptatibus, veniam recusandae facilis nobis perspiciatis rem similique, nisi ad explicabo ipsa voluptatum, inventore molestiae natus adipisci? Fuga delectus quia assumenda totam aspernatur. Nobis hic ea rem, quaerat voluptate vero illum laboriosam omnis aspernatur labore, natus ex iusto ducimus exercitationem a officia.</p>
                        </div>{/* End Single Post Content */}
                        {/* ======= Comments ======= */}
                        <div className="comments">
                           <h5 className="comment-title py-4">2 Comments</h5>
                           <div className="comment d-flex mb-4">
                              <div className="flex-shrink-0">
                                 <div className="avatar avatar-sm rounded-circle">
                                    <img className="avatar-img" src="assets/img/person-5.jpg" alt="" />
                                 </div>
                              </div>
                              <div className="flex-grow-1 ms-2 ms-sm-3">
                                 <div className="comment-meta d-flex align-items-baseline">
                                    <h6 className="me-2">Jordan Singer</h6>
                                    <span className="text-muted">2d</span>
                                 </div>
                                 <div className="comment-body">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit aliquam eligendi repellendus excepturi quibusdam nobis esse accusantium.
                                 </div>
                                 <div className="comment-replies bg-light p-3 mt-3 rounded">
                                    <h6 className="comment-replies-title mb-4 text-muted text-uppercase">2 replies</h6>
                                    <div className="reply d-flex mb-4">
                                       <div className="flex-shrink-0">
                                          <div className="avatar avatar-sm rounded-circle">
                                             <img className="avatar-img" src="assets/img/person-4.jpg" alt="" />
                                          </div>
                                       </div>
                                       <div className="flex-grow-1 ms-2 ms-sm-3">
                                          <div className="reply-meta d-flex align-items-baseline">
                                             <h6 className="mb-0 me-2">Brandon Smith</h6>
                                             <span className="text-muted">2d</span>
                                          </div>
                                          <div className="reply-body">
                                             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                          </div>
                                       </div>
                                    </div>
                                    <div className="reply d-flex">
                                       <div className="flex-shrink-0">
                                          <div className="avatar avatar-sm rounded-circle">
                                             <img className="avatar-img" src="assets/img/person-3.jpg" alt="" />
                                          </div>
                                       </div>
                                       <div className="flex-grow-1 ms-2 ms-sm-3">
                                          <div className="reply-meta d-flex align-items-baseline">
                                             <h6 className="mb-0 me-2">James Parsons</h6>
                                             <span className="text-muted">1d</span>
                                          </div>
                                          <div className="reply-body">
                                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore sed eos sapiente, praesentium.
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="comment d-flex">
                              <div className="flex-shrink-0">
                                 <div className="avatar avatar-sm rounded-circle">
                                    <img className="avatar-img" src="assets/img/person-2.jpg" alt="" />
                                 </div>
                              </div>
                              <div className="flex-shrink-1 ms-2 ms-sm-3">
                                 <div className="comment-meta d-flex">
                                    <h6 className="me-2">Santiago Roberts</h6>
                                    <span className="text-muted">4d</span>
                                 </div>
                                 <div className="comment-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum in corrupti dolorum, quas delectus nobis porro accusantium molestias sequi.
                                 </div>
                              </div>
                           </div>
                        </div>{/* End Comments */}
                        {/* ======= Comments Form ======= */}
                        <div className="row justify-content-center mt-5">
                           <div className="col-lg-12">
                              <h5 className="comment-title">{post?.attributes?.title}</h5>
                              <div className="row">
                                 <div className="col-lg-6 mb-3">
                                    <label htmlFor="comment-name">Name</label>
                                    <input type="text" className="form-control" id="comment-name" placeholder="Enter your name" />
                                 </div>
                                 <div className="col-lg-6 mb-3">
                                    <label htmlFor="comment-email">Email</label>
                                    <input type="text" className="form-control" id="comment-email" placeholder="Enter your email" />
                                 </div>
                                 <div className="col-12 mb-3">
                                    <label htmlFor="comment-message">Message</label>
                                    <textarea className="form-control" id="comment-message" placeholder="Enter your name" cols={30} rows={10} defaultValue={""} />
                                 </div>
                                 <div className="col-12">
                                    <input type="submit" className="btn btn-primary" defaultValue="Post comment" />
                                 </div>
                              </div>
                           </div>
                        </div>{/* End Comments Form */}
                     </div>
                     <div className="col-md-3">
                        {/* ======= Sidebar ======= */}
                        <div className="aside-block">
                           <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected="false">Trending</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false">Latest</button>
                              </li>
                           </ul>
                           <div className="tab-content" id="pills-tabContent">
                              {/* Popular */}
                              <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                              </div> {/* End Popular */}
                              {/* Trending */}
                              <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab">
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                              </div> {/* End Trending */}
                              {/* Latest */}
                              <div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                                 <div className="post-entry-1 border-bottom">
                                    <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                                    <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                                    <span className="author mb-3 d-block">Jenny Wilson</span>
                                 </div>
                              </div> {/* End Latest */}
                           </div>
                        </div>
                        <div className="aside-block">
                           <h3 className="aside-title">Video</h3>
                           <div className="video-post">
                              <a href="https://www.youtube.com/watch?v=AiFfDjmd0jU" className="glightbox link-video">
                                 <span className="bi-play-fill" />
                                 <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid" />
                              </a>
                           </div>
                        </div>{/* End Video */}
                        <div className="aside-block">
                           <h3 className="aside-title">Categories</h3>
                           <ul className="aside-links list-unstyled">
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Business</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Culture</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Sport</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Food</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Politics</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Celebrity</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Startups</a></li>
                              <li><a href="category.html"><i className="bi bi-chevron-right" /> Travel</a></li>
                           </ul>
                        </div>{/* End Categories */}
                        <div className="aside-block">
                           <h3 className="aside-title">Tags</h3>
                           <ul className="aside-tags list-unstyled">
                              <li><a href="category.html">Business</a></li>
                              <li><a href="category.html">Culture</a></li>
                              <li><a href="category.html">Sport</a></li>
                              <li><a href="category.html">Food</a></li>
                              <li><a href="category.html">Politics</a></li>
                              <li><a href="category.html">Celebrity</a></li>
                              <li><a href="category.html">Startups</a></li>
                              <li><a href="category.html">Travel</a></li>
                           </ul>
                        </div>{/* End Tags */}
                     </div>
                  </div>
               </div>
            </section>
         </main>{/* End #main */}
      </>
   );
};
export default SingleEventdata;