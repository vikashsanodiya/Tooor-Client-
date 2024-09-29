function importReview() {
    const reviewHtml = `<section class="float-left w-100 review-testimonial-con position-relative">
<div class="color-overlay position-relative padding-top padding-bottom main-box">
    <div class="container wow bounceInUp" data-wow-duration="2s">
        <img alt="vector" class="vector7 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector7.png">
        <div class="heading-content text-center position-relative">
            <h4 class="text-uppercase">Review & Testimonials</h4>
            <h2 class="text-white">What Our Customers Are <br> Saying About Us</h2>
        </div>
        <div id="lucky-testimonial-carousel" class="owl-carousel"></div>
    </div>
</div>
</section>
`;
    const container = document.getElementById("lucky-review-container");
    if (container) {
      container.innerHTML = reviewHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importReview();
  });
  
  // To be used in any HTML page:
//   export in any html page = <div id="lucky-review-container"></div>
/* <script src="assets/component/footer.js"></script>*/




{/* function importFooter() {
    const footerHtml = ``;
    const container = document.getElementById("lucky-footer-container");
    if (container) {
      container.innerHTML = footerHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importFooter();
  });
   */}
  {/* // To be used in any HTML page: */}
{/* //   export in any html page = <div id="lucky-footer-container"></div> */}
 {/* <script src="assets/component/footer.js"></script> */}