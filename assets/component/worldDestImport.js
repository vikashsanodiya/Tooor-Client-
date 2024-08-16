function importWorldDes() {
    const worldDesHtml = ` <section class="float-left w-100 top-destinations-con position-relative padding-top padding-bottom main-box">
<img alt="vector" class="vector4 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector4.png">
<img alt="vector" class="vector5 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector5.png">
<div class="container top-destination-con1 wow bounceInUp" data-wow-duration="2s">
    <div class="heading-title text-center">
        <h4 class="text-uppercase">Top Destinations</h4>
        <h2 class="">Explore the Beauty of <br> The World</h2>
    </div>
    <div id="destinations-carousel" class="owl-carousel"></div>
</div>
</section>`;
    const container = document.getElementById("lucky-worldDes-container");
    if (container) {
      container.innerHTML = worldDesHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importWorldDes();
  });
  {/* // To be used in any HTML page: */}
{/* //   export in any html page = <div id="lucky-worldDes-container"></div> */}
 {/* <script src="assets/component/footer.js"></script> */}