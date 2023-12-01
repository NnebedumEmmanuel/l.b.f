import React from 'react'

const BlogSpa = () => {
  return (
    <div class="sermon sermon-single padding--top padding--bottom bg-light">
        <div class="container">
            <div class="section__wrapper">
                <div class="row g-4">
                    <div class="col-lg-9 col-12">
                        <div class="sermon__item">
                            <div class="sermon__inner">
                                <div class="sermon__thumb">
                                    <img src="assets/images/sermon/08.jpg" alt="sermon thumb" />
                                    <div class="sermon__thumb-metapost">
                                        <ul class="sermon__content-metapost">
                                            <li><i class="far fa-calendar"></i> 10 Jan 2022</li>
                                            <li><i class="fas fa-user"></i> Admin</li>
                                        </ul>
                                        <ul class="sermon__content-social">
                                            <li><a href="#"><i class="fas fa-video"></i></a></li>
                                            <li><a href="#"><i class="fas fa-headphones-alt"></i></a></li>
                                            <li><a href="#"><i class="fas fa-file-alt"></i></a></li>
                                            <li><a href="#"><i class="fas fa-image"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="sermon__content">
                                    <h3>Seamlessly embrace distributed portals when as maintainable platforms.</h3>
                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                                </div>
                            </div>
                        </div>
                        <div class="blog">
                            <div class="blog__comments">
                                <div class="section__header">
                                    <h2>4 Comments</h2>
                                </div>
                                <div class="blog__comments-details">
                                    <ul>
                                        <li>
                                            <div class="blog__comments-thumb">
                                                <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                            </div>
                                            <div class="blog__comments-content">
                                                <h6>Mr Jake</h6>
                                                <span>On January 10, 2022 at 9:49 am</span>
                                                <a href="#" class="blog__comments-edit">Edit</a>
                                                <p>Hi, this is a comment. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.</p>
                                                <a href="#" class="text-btn"><span><i class="fas fa-reply-all"></i> Reply</span></a>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div class="blog__comments-thumb">
                                                        <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                                    </div>
                                                    <div class="blog__comments-content">
                                                        <h6>Mr Jahirul</h6>
                                                        <span>On January 10, 2022 at 9:49 am</span>
                                                        <a href="#" class="blog__comments-edit">Edit</a>
                                                        <p>Enthusiastical actualize turnkey channel via real-time market. Progressively restore play supply chains after tactical technologies. </p>
                                                        <a href="#" class="text-btn"><span><i class="fas fa-reply-all"></i> Reply</span></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="blog__comments-thumb">
                                                <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                            </div>
                                            <div class="blog__comments-content">
                                                <h6>Mr Jake</h6>
                                                <span>On January 10, 2022 at 9:49 am</span>
                                                <a href="#" class="blog__comments-edit">Edit</a>
                                                <p>Enthusiastical actualize turnkey channel via real-time market. Progressively restore play supply chains after tactical technologies. </p>
                                                <a href="#" class="text-btn"><span><i class="fas fa-reply-all"></i> Reply</span></a>
                                            </div>
                                            <ul>
                                                <li>
                                                    <div class="blog__comments-thumb">
                                                        <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                                    </div>
                                                    <div class="blog__comments-content">
                                                        <h6>Mr Jahirul</h6>
                                                        <span>On January 10, 2022 at 9:49 am</span>
                                                        <a href="#" class="blog__comments-edit">Edit</a>
                                                        <p>Enthusiastical actualize turnkey channel via real-time market. Progressively restore play supply chains after tactical technologies. </p>
                                                        <a href="#" class="text-btn"><span><i class="fas fa-reply-all"></i> Reply</span></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="blog__respond">
                                <div class="section__header">
                                    <h2>Leave a Comment</h2>
                                </div>
                                <div class="blog__respond-details">
                                    <form action="#">
                                        <input name="name" type="text" value="" placeholder="Name" />
                                        <input name="email" type="text" value="" placeholder="Email" />
                                        <input name="url" type="text" value="" placeholder="Subject" class="w-100" />
                                        <textarea id="comment-reply" name="comment" rows="10" placeholder="Type Here Your Comment"></textarea>
                                        <p class="comment-form-cookies-consent w-100">
                                            <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" />
                                            <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <button type="submit" class="default-btn move-right"><span>Submit</span></button>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-12">
                        <div class="sidebar">
                            <div class="sidebar__search">
                                <div class="section__header">
                                    <h2>Search Now</h2>
                                </div>
                                <div class="section__wrapper">
                                    <form>
                                        <input type="text" placeholder="Search" />
                                        <button type="submit"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="sidebar__tab">
                                <div class="section__header">
                                    <h2>Post Tag</h2>
                                </div>
                                <div class="section__wrapper">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="post-tab" data-bs-toggle="tab" data-bs-target="#post" type="button" role="tab" aria-controls="post" aria-selected="true">Recent Post</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="comment-tab" data-bs-toggle="tab" data-bs-target="#comment" type="button" role="tab" aria-controls="comment" aria-selected="false">Comments</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="post" role="tabpanel" aria-labelledby="post-tab">
                                            <div class="footer__post">
                                                <div class="section__wrapper">
                                                    <div class="footer__post-item">
                                                        <div class="footer__post-inner">
                                                            <div class="footer__post-thumb">
                                                                <a href="blog-single.html"><img src="assets/images/footer/post/01.jpg" alt="footer post" /></a>
                                                            </div>
                                                            <div class="footer__post-content">
                                                                <a href="blog-single.html"><h6>Collaboratively Coordinate.</h6></a>
                                                                <p><i class="far fa-calendar-alt"></i> 10 January, 2022</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="footer__post-item">
                                                        <div class="footer__post-inner">
                                                            <div class="footer__post-thumb">
                                                                <a href="blog-single.html"><img src="assets/images/footer/post/02.jpg" alt="footer post" /></a>
                                                            </div>
                                                            <div class="footer__post-content">
                                                                <a href="blog-single.html"><h6>Quickly Develop Exceptional</h6></a>
                                                                <p><i class="far fa-calendar-alt"></i> 10 January, 2022</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="footer__post-item">
                                                        <div class="footer__post-inner">
                                                            <div class="footer__post-thumb">
                                                                <a href="blog-single.html"><img src="assets/images/footer/post/03.jpg" alt="footer post" /></a>
                                                            </div>
                                                            <div class="footer__post-content">
                                                                <a href="blog-single.html"><h6>Why you need Peace WordPress Theme?</h6></a>
                                                                <p><i class="far fa-calendar-alt"></i> 10 January, 2022</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="comment" role="tabpanel" aria-labelledby="comment-tab">
                                            <div class="blog__comments-details">
                                                <ul>
                                                    <li>
                                                        <div class="blog__comments-thumb">
                                                            <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                                        </div>
                                                        <div class="blog__comments-content">
                                                            <h6>Mr Jake</h6>
                                                            <p>Donec sollici tudin mole stie male sua da. Vest ibulum ante.........</p>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div class="blog__comments-thumb">
                                                                    <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                                                </div>
                                                                <div class="blog__comments-content">
                                                                    <h6>Mr Jahirul</h6>
                                                                    <p>Donec sollici tudin mole stie male sua da. Vest ibulum ante.........</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div class="blog__comments-thumb">
                                                            <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                                        </div>
                                                        <div class="blog__comments-content">
                                                            <h6>Mr Jake</h6>
                                                            <p>Donec sollici tudin mole stie male sua da. Vest ibulum ante.........</p>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div class="blog__comments-thumb">
                                                                    <img src="assets/images/blog/author/none.jpg" alt="blog-thumb" />
                                                                </div>
                                                                <div class="blog__comments-content">
                                                                    <h6>Mr Jahirul</h6>
                                                                    <p>Donec sollici tudin mole stie male sua da. Vest ibulum ante.........</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar__tag">
                                <div class="footer__tags">
                                    <div class="section__header">
                                        <h2>Post Tag</h2>
                                    </div>
                                    <div class="section__wrapper">
                                        <ul>
                                            <li><a href="#">Christian</a></li>
                                            <li><a href="#">Hindu</a></li>
                                            <li><a href="#">Magazine</a></li>
                                            <li><a href="#">Muslims</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">SEO</a></li>
                                            <li><a href="#">Themes</a></li>
                                            <li><a href="#">WordPress</a></li>
                                            <li><a href="#">Web Development</a></li>
                                            <li><a href="#">Design</a></li>
                                            <li><a href="#">Photography</a></li>
                                            <li><a href="#">Media</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar__catagory">
                                <div class="section__header">
                                    <h2>Categories</h2>
                                </div>
                                <div class="section__wrapper">
                                    <ul>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Muslim</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Culture</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Sports</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>News</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Gallery</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>International</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Local</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Social</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Cristian</a></li>
                                        <li><a href="#"><i class="fas fa-chevron-right"></i>Crime</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSpa
