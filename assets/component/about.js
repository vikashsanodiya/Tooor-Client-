function importAboutUs() {
    const AboutUsHtml = `
<section class="float-left w-100 about-travel-con position-relative main-box padding-top padding-bottom">
<img alt="vector" class="vector5 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector5.png">
<img alt="vector" class="vector6 img-fluid position-absolute" src="assets/images/vector6.png">
<div class="container wow bounceInUp" data-wow-duration="2s">
    <div class="row">
        <div class="col-lg-6">
            <div class="about-travel-img-con position-relative">
                <figure class="about-img"><img class="img-fluid" alt="image" src="assets/images/about-travel-img1.jpg">
                </figure>
                <figure class="about-img2"><img class="img-fluid" alt="image" src="assets/images/about-travel-img2.jpg">
                </figure>
                <div class="best-destination position-absolute"><a href="https://www.youtube.com/"><i
          class="fa-brands fa-youtube d-block"></i>Find
        Your Best
        <br>
        Destination</a>
                </div>
                <!-- about travel img con -->
            </div>
            <!-- col -->
        </div>
        <div class="col-lg-6">
            <div class="about-travel-content">
                <h4 class="text-uppercase">About Lucky Tour & Travels</h4>
                <h2>India's Best Travel Agency Since 2015.</h2>
                <p>At Lucky Tour & Travels, we are dedicated to crafting exceptional travel experiences for our clients. Since our inception, we’ve been committed to offering top-notch services, ensuring every journey is memorable.</p>
                <ul class="list-unstyled p-0 listing">
                    <li class="position-relative"><i class="fa-solid fa-check mr-3"></i>Expertly curated trips to suit all preferences.</li>
                    <li class="position-relative"><i class="fa-solid fa-check mr-3"></i>Seamless travel planning from start to finish. </li>
                    <li class="position-relative mb-0"><i class="fa-solid fa-check mr-3"></i>Unparalleled customer support every step of the way. </li>
                    <!-- list unstyled -->
                </ul>
                <ul class="list-unstyled p-0 m-0 d-flex align-items-center about-count">
                    <li><span class="d-inline-block counter">9 </span><span class="mb-0 plus1 d-inline-block">+</span> <br> Year
                        <br> Experience
                    </li>
                    <li><span class="d-inline-block counter">355 </span><span class="mb-0 plus1 d-inline-block">+</span> <br> Destination
                        <br> Collaboration
                    </li>
                    <li><span class="d-inline-block counter">17</span><span class="mb-0 plus1 d-inline-block">k+</span>
                        <br>Happy
                        <br> Customers
                    </li>
                </ul>
                <div class="green-btn d-inline-block">
                    <a href="destinations.html" class="d-inline-block">Find Tours</a>
                </div>
                <!-- about travel content -->
            </div>
            <!-- col -->
        </div>
        <!-- row -->
    </div>
    <!-- container -->
</div>
<!-- about travel con -->
</section>`;
    const container = document.getElementById("lucky-AboutUs-container");
    if (container) {
      container.innerHTML = AboutUsHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importAboutUs();
  });

  {/* // To be used in any HTML page: */}
{/* //   export in any html page = <div id="lucky-AboutUs-container"></div> */}
 {/* <script src="assets/component/footer.js"></script> */}

