import React from 'react'

const courses = () => {
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

         <section class="courses">

            <h1 class="heading">our courses</h1>

            <div class="box-container">

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-2.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-1.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete HTML tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-3.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-2.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete CSS tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-4.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-3.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete JS tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-5.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-4.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete Boostrap tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-6.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-5.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete JQuery tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-7.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-6.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete SASS tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-8.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-7.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete PHP tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-9.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-8.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete MySQL tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

               <div class="box">
                  <div class="tutor">
                     <img src="images/pic-1.jpg" alt="" />
                     <div class="info">
                        <h3>john deo</h3>
                        <span>21-10-2022</span>
                     </div>
                  </div>
                  <div class="thumb">
                     <img src="images/thumb-9.png" alt="" />
                     <span>10 videos</span>
                  </div>
                  <h3 class="title">complete react tutorial</h3>
                  <a href="playlist.html" class="inline-btn">view playlist</a>
               </div>

            </div>

         </section>














         <footer class="footer">

            &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved!

         </footer>

      </div>
   )
}

export default courses