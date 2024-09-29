function importWatWeServe() {
    const watWeServeHtml = ` <section class="float-left w-100 what-we-serve-con position-relative main-box padding-top padding-bottom">
            <img alt="vector" class="vector4 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector4.png">
            <img alt="vector" class="vector5 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector5.png">
            <div class="container wow bounceInUp" data-wow-duration="2s">
                <div class="row">
                    <div class="col-lg-5">
                        <h4 class="mustard-text text-uppercase">What We Serve</h4>
                        <h2 class="text-uppercase text-right">Top Values <br> For You!</h2>
                    </div>
                    <div class="col-xl-10 col-12 mr-auto ml-auto serve-outer text-center">
                        <div class="server-box var1">
                            <img class="img-fluid" src="assets/images/serve-icon1.png" alt="icon">
                            <h4>Lot of Choices</h4>
                            <p class="mb-0">Choose from a variety of destinations and experiences tailored just for you.</p>
                            <!-- server box -->
                        </div>
                        <div class="server-box var2">
                            <img class="img-fluid" src="assets/images/serve-icon2.png" alt="icon">
                            <h4>Best Tour Guide</h4>
                            <p class="mb-0">Discover the best spots with our expert, friendly guides.</p>
                            <!-- server box -->
                        </div>
                        <div class="server-box var3">
                            <img class="img-fluid" src="assets/images/serve-icon3.png" alt="icon">
                            <h4>Easy Booking </h4>
                            <p class="mb-0">Book your trip quickly and easily with our simple process.</p>
                            <!-- server box -->
                        </div>
                        <!-- server outer -->
                    </div>
                    <!-- row -->
                </div>
                <!-- container -->
            </div>
            <!-- what we serve con -->
        </section>`;
    const container = document.getElementById("lucky-watWeServe-container");
    if (container) {
      container.innerHTML = watWeServeHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importWatWeServe();
  });
  {/* // To be used in any HTML page: */}
{/* //   export in any html page = <div id="lucky-watWeServe-container"></div> */}
 {/* <script src="assets/component/watWeServe.js"></script> */}