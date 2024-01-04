import React from 'react'

const about = () => {
    return (
        <div>

            <header class="header">

                <section class="flex">

                    <a href="home.html" class="logo">Educa.</a>

                    <form action="search.html" method="post" class="search-form">
                        <input type="text" name="search_box" required placeholder="search courses..." maxlength="100" />
                        <button type="submit" class="fas fa-search"></button>
                    </form>

                    <div class="icons">
                        <div id="menu-btn" class="fas fa-bars"></div>
                        <div id="search-btn" class="fas fa-search"></div>
                        <div id="user-btn" class="fas fa-user"></div>
                        <div id="toggle-btn" class="fas fa-sun"></div>
                    </div>

                    <div class="profile">
                        <img src="images/pic-1.jpg" class="image" alt="" />
                        <h3 class="name">shaikh anas</h3>
                        <p class="role">studen</p>
                        <a href="profile.html" class="btn">view profile</a>
                        <div class="flex-btn">
                            <a href="login.html" class="option-btn">login</a>
                            <a href="register.html" class="option-btn">register</a>
                        </div>
                    </div>

                </section>

            </header>

            <div class="side-bar">

                <div id="close-btn">
                    <i class="fas fa-times"></i>
                </div>

                <div class="profile">
                    <img src="images/pic-1.jpg" class="image" alt="" />
                    <h3 class="name">shaikh anas</h3>
                    <p class="role">studen</p>
                    <a href="profile.html" class="btn">view profile</a>
                </div>

                <nav class="navbar">
                    <a href="home.html"><i class="fas fa-home"></i><span>home</span></a>
                    <a href="about.html"><i class="fas fa-question"></i><span>about</span></a>
                    <a href="courses.html"><i class="fas fa-graduation-cap"></i><span>courses</span></a>
                    <a href="teachers.html"><i class="fas fa-chalkboard-user"></i><span>teachers</span></a>
                    <a href="contact.html"><i class="fas fa-headset"></i><span>contact us</span></a>
                </nav>

            </div>

            <section class="about">

                <div class="row">

                    <div class="image">
                        <img src="images/about-img.svg" alt="" />
                    </div>

                    <div class="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat tenetur.</p>
                        <a href="courses.html" class="inline-btn">our courses</a>
                    </div>

                </div>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-graduation-cap"></i>
                        <div>
                            <h3>+10k</h3>
                            <p>online courses</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-user-graduate"></i>
                        <div>
                            <h3>+40k</h3>
                            <p>brilliant students</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-chalkboard-user"></i>
                        <div>
                            <h3>+2k</h3>
                            <p>expert tutors</p>
                        </div>
                    </div>

                    <div class="box">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <h3>100%</h3>
                            <p>job placement</p>
                        </div>
                    </div>

                </div>

            </section>

            <section class="reviews">

                <h1 class="heading">student's reviews</h1>

                <div class="box-container">

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src="images/pic-2.jpg" alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src="images/pic-3.jpg" alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src="images/pic-4.jpg" alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src="images/pic-5.jpg" alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src="images/pic-6.jpg" alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur. Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero facilis fuga. Eligendi eaque molestiae modi?</p>
                        <div class="student">
                            <img src="images/pic-7.jpg" alt="" />
                            <div>
                                <h3>john deo</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>




            <footer class="footer">

                &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!

            </footer>
        </div>
    )
}

export default about