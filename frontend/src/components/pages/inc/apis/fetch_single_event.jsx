
import React, { useState, useEffect } from 'react';
import { BACKEND_URL, BACKEND_URL_IMAGE } from '../../../../constants';
import Common from '../../../inc/Common';
import { Button } from 'react-bootstrap';
import "./css/event.css";
import "./css/eventvariables.css";
import DemoAvatar from "../../../images/demo_user_avatar.jpg"


const SingleEventdata = (props) => {

	const {
		location: { state },
	} = props;

	const post = state?.post


	const [commentData, setCommentData] = useState({
		name: '',
		email: '',
		message: '',
		event: post?.id,
	});

	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch(`${BACKEND_URL}/event-comments?event=${post?.id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setComments(data.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [post?.id]);

	const addComment = () => {
		if (commentData.name === '' || commentData.email === '' || commentData.message === '') {
			alert('Please fill the form completely');
			return;
		}

		fetch(`${BACKEND_URL}/event-comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: {
					...commentData,
				},
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setCommentData({
					name: '',
					email: '',
					message: '',
					event: post?.id,
				});
				setComments([...comments, data.data]);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleChange = (e) => {
		const newData = { ...commentData };
		newData[e.target.id] = e.target.value;
		setCommentData(newData);
	};

	const formatter = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	});


	const [replyData, setReplyData] = useState({
		name: '',
		reply: '',
		event_comment: post?.id,
	});

	const [replies, setReplies] = useState([]);

	useEffect(() => {
		fetch(`${BACKEND_URL}/comment-replies?populate=*`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setReplies(data.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [post?.id]);

	const addReply = () => {
		if (replyData.name === '' || replyData.reply === '') {
			alert('Please fill the form completely');
			return;
		}

		fetch(`${BACKEND_URL}/comment-replies`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: {
					...replyData,
				},
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setReplyData({
					name: '',
					reply: '',
					event_comment: post?.id,
				});
				setReplies([...replies, data.data]);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleReplyChange = (e) => {
		const newDatar = { ...replyData };
		newDatar[e.target.id] = e.target.value;
		setReplyData(newDatar);
	};

	// console.log(post);
	return (
		<>
			<Common />
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

								</div>{/* End Single Post Content */}
								{/* ======= Comments ======= */}
								<div className="comments">
									<h5 className="comment-title py-4">{comments.length} Comments</h5>
									{comments.map((comment) => (
										<div className="comment d-flex" key={comment.id}>
											<div className="flex-shrink-0">
												<div className="avatar avatar-sm rounded-circle">
													{/* <img className="avatar-img" src="assets/img/person-2.jpg" alt="" /> */}
													<img class="avatar-img rounded-circle shadow-1-strong" src={DemoAvatar} alt="Demo User Avatar" width="65" height="65" />
												</div>
											</div>
											<div className="flex-shrink-1 ms-2 ms-sm-3">
												<div className="comment-meta d-flex">
													<h6 className="me-2">{comment?.attributes?.name}</h6>
													<span className="text-muted">{formatter.format(new Date(comment?.attributes?.createdAt))}</span>
												</div>

												<br />
												<div className="comment-body">{comment?.attributes?.message}</div>
												<br />
												{replies.filter((reply) => {
													console.log(reply);
													return reply.attributes?.event_comment?.data?.id === comment.id;
												}).map((reply) => (
													<div key={reply.id}>
														<div class="d-flex flex-start mt-4">
															<div className="flex-shrink-0">
																<div className="me-3 avatar avatar-sm rounded-circle">
																	{/* <img className="avatar-img" src="assets/img/person-2.jpg" alt="" /> */}
																	<img class="avatar-img rounded-circle shadow-1-strong" src={DemoAvatar} alt="Demo User Avatar" width="65" height="65" />
																</div>
															</div>
															<div class="flex-grow-1 flex-shrink-1">
																<div>
																	<div class="d-flex justify-content-between align-items-center">
																		<p class="mb-1">
																			{reply?.attributes?.name} <span class="small">- {formatter.format(new Date(reply?.attributes?.createdAt))}</span>
																		</p>
																	</div>
																	<p class="small mb-0">
																		{reply?.attributes?.reply}
																	</p>
																</div>
															</div>
														</div>
													</div>
												))};
												<br />
												<div className="float-end">
													<Button>
														<a href="#!"><i class="fas fa-reply fa-xs text-light"></i><span class="small text-light"> reply</span></a>
													</Button>
												</div>
												<br />
												{/* ======= Replies Form ======= */}
												<div className="row justify-content-center mt-5">
													<div className="col-lg-12">
														<div className="row">
															<div className="col-lg-6 mb-3">
																<label htmlFor="comment-name"><strong>Name</strong></label>
																<input type="text" onChange={(e) => handleReplyChange(e)} className="form-control" id="name" placeholder="Enter your name" />
															</div>
															<div className="col-12 mb-3">
																<label htmlFor="comment-message"><strong>Input Reply</strong></label>
																<textarea onChange={(e) => handleReplyChange(e)} className="form-control" id="reply" placeholder="Enter your message" cols={30} rows={10} defaultValue={""} />
															</div>
															<br />
															<div className="col-12">
																<button type="submit" className="btn btn-primary" defaultValue="Post reply" onClick={() => {
																	addReply();
																}}><i class="fas fa-reply fa-xs text-light"></i><span class="small text-light"> reply</span></button>
															</div>
														</div>
													</div>
												</div>{/* End reply Form */}
												<br />
												<br />
												<br />
											</div>
										</div>
									))}
								</div>


								{/* End Comments */}
								{/* ======= Comments Form ======= */}
								<div className="row justify-content-center mt-5">
									<div className="col-lg-12">
										{/* <input type="hidden" id="event" name="event" value={post?.id} /> */}
										<h5 className="comment-title">{post?.attributes?.title}</h5>
										<div className="row">
											<div className="col-lg-6 mb-3">
												<label htmlFor="comment-name">{post?.attributes?.name}</label>
												<input type="text" onChange={(e) => handleChange(e)} className="form-control" id="name" placeholder="Enter your name" />
											</div>
											<div className="col-lg-6 mb-3">
												<label htmlFor="comment-email">{post?.attributes?.email}</label>
												<input type="text" onChange={(e) => handleChange(e)} className="form-control" id="email" placeholder="Enter your email" />
											</div>
											<div className="col-12 mb-3">
												<label htmlFor="comment-message">{post?.attributes?.comment}</label>
												<textarea onChange={(e) => handleChange(e)} className="form-control" id="message" placeholder="Enter your message" cols={30} rows={10} defaultValue={""} />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary" defaultValue="Post comment" onClick={() => {
													addComment();
												}}>Submit</button>
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
										{/* <li className="nav-item" role="presentation">
											<button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false">Latest</button>
										</li> */}
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
