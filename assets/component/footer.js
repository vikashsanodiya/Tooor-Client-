function importFooter() {
    const footerHtml = `
    <section class="float-left w-100 position-relative main-box footer-con">
<img alt="vector" class="vector8 img-fluid position-absolute" src="assets/images/vector8.png">
<div class="container">
    <div class="partner-con">
        <ul class="mb-0 list-unstyled d-flex align-items-center justify-content-between">
            <li>
                <figure class="mb-0">
                    <img class="img-fluid" src="assets/images/partner-logo-1.png" alt="icon">
                </figure>
            </li>
            <li>
                <figure class="mb-0">
                    <img class="img-fluid" src="assets/images/partner-logo-2.png" alt="icon">
                </figure>
            </li>
            <li class="img-mb">
                <figure class="mb-0">
                    <img class="img-fluid" src="assets/images/partner-logo-3.png" alt="icon">
                </figure>
            </li>
            <li>
                <figure class="mb-0">
                    <img class="img-fluid" src="assets/images/partner-logo-4.png" alt="icon">
                </figure>
            </li>
            <li>
                <figure class="mb-0">
                    <img class="img-fluid" src="assets/images/partner-logo-5.png" alt="icon">
                </figure>
            </li>
            <li>
                <figure class="mb-0">
                    <img class="img-fluid" src="assets/images/partner-logo-6.png" alt="icon">
                </figure>
            </li>
        </ul>
        <!-- partner con -->
    </div>
    <div class="middle-portion">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 footer-logo-con">
                <a href="index.html">
                    <figure class="footer-logo">
                        <img src="assets/images/lucky-logo-black.svg" class="img-fluid" alt="">
                    </figure>
                </a>
                <p class="text-size-16 footer-text">At Lucky Tour & Travels, we are dedicated to crafting exceptional travel experiences for our clients. Since our inception, we’ve been committed to offering top-notch services, ensuring every journey is memorable.</p>
                <figure class="mb-0 payment-icon">
                    <img src="assets/images/payment-card.png" class="img-fluid" alt="">
                </figure>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-6 col-12 d-lg-block d-none">

            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                <div class="links">
                    <h4 class="heading">Quick Links</h4>
                    <hr class="line">
                    <ul class="list-unstyled mb-0">
                        <li><a href="index.html" class="text-size-16 text text-decoration-none">Home</a></li>
                        <li><a href="about.html" class="text-size-16 text text-decoration-none">AboutUs</a></li>
                        <li><a href="booking.html" class="text-size-16 text text-decoration-none">Booking</a></li>
                        <li><a href="destinations.html" class="text-size-16 text text-decoration-none mb-0">Destinations</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-sm-block">
                <div class="icon">
                    <h4 class="heading">Get in Touch</h4>
                    <hr class="line">
                    <ul class="list-unstyled mb-0">
                        <li class="text-size-16 text"><span class="d-inline-block">Email:</span> <a href="mailto:info@luckytravles.com" class="mb-0 text text-decoration-nonetext-size-16">info@luckytravles.com</a></li>
                        <li class="text-size-16 text"><span class="d-inline-block">Booking:</span> <a href="tel:+917828722723" class="mb-0 text text-decoration-nonetext-size-16">+91 78287 22723</a></li>
                        <li class="text-size-16 text1"><span class="d-inline-block">Mobile:</span> <a href="tel:+919977239993" class="mb-0 text text-decoration-nonetext-size-16">+91 99772 39993</a></li>
                        <li class="text-size-16 text1"><span class="d-inline-block">Address:</span> <a href="" class="mb-0 text text-decoration-nonetext-size-16">1/1 Desai Nagar Ujjain Madhya Pradesh 456010.</a></li>
                        <li class="social-icons">
                            <div class="circle"><a href="https://www.facebook.com/login/"><i
                class="fa-brands fa-square-facebook"></i></a></div>
                            <div class="circle"><a href="https:///www.instagram.com"><i
                class="fa-brands fa-square-instagram"></i></a></div>
                <div class="circle"><a href="https:///www.instagram.com"><i
                    class="fa-brands fa-square-whatsapp"></i></a></div>
                         

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-con">
        <div class="row">
            <div class="col-12">
                <p class="text-size-16">Copyright ©2024 floobyte.com All Rights Reserved
                </p>
            </div>
        </div>
        <!-- copyright con -->
    </div>
    <!-- container -->
</div>
<!-- footer con -->
</section>
    
    `;
    const container = document.getElementById("lucky-footer-container");
    if (container) {
      container.innerHTML = footerHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importFooter();
  });
  
  // To be used in any HTML page:
//   export in any html page = <div id="lucky-footer-container"></div>
/* <script src="assets/component/footer.js"></script>*/