import React from 'react'

const login = () => {


  function validateForm() {
    // Validate reCAPTCHA
    var response = grecaptcha.getResponse();
    if (response.length === 0)
    {
      alert("Please complete the reCAPTCHA!");
      return false;
    }
    return true;
  }
  return (
    <div>

      <header class="header">
        <section class="flex">
          <a href="home.html" class="logo">Educa.</a>

          <form action="search.html" method="post" class="search-form">
            <input
              type="text"
              name="search_box"
              required
              placeholder="search courses..."
              maxlength="100"
            />
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
          <a href="about.html"
          ><i class="fas fa-question"></i><span>about</span></a
          >
          <a href="courses.html"
          ><i class="fas fa-graduation-cap"></i><span>courses</span></a
          >
          <a href="teachers.html"
          ><i class="fas fa-chalkboard-user"></i><span>teachers</span></a
          >
          <a href="contact.html"
          ><i class="fas fa-headset"></i><span>contact us</span></a
          >
        </nav>
      </div>

      <section class="form-container">
        <form
          action="home.html"
          method="post"
          enctype="multipart/form-data"
          onsubmit="return validateForm()"
        >
          <h3>login now</h3>
          <p>your email <span>*</span></p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxlength="50"
            class="box"
          />
          <p>your password <span>*</span></p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxlength="20"
            class="box"
          />
          <div
            class="g-recaptcha"
            data-sitekey="6LfoN0UpAAAAAG5LP76OoC5NUzFsKBM81B4PDSF4"
          ></div>

          <input type="submit" value="login new" name="submit" class="btn" />
        </form>
      </section>

      <footer class="footer">
        &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights
        reserved!
      </footer>

    </div>
  )
}

export default login