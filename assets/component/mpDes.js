function importMpDestination() {
    const mpDestiHtml = ` <section class="float-left w-100 travel-tour-con position-relative">
        <div class="color-overlay position-relative padding-top padding-bottom main-box">
            <div class="container wow bounceInUp" data-wow-duration="2s">
                <img alt="vector" class="vector7 wow bounceInUp img-fluid position-absolute" data-wow-duration="2s" src="assets/images/vector7.png">
                <div class="heading-content text-center position-relative">
                    <h4 class="text-uppercase">Explore wonderful experience</h4>
                    <h2 class="text-white">Visit Popular Destinations <br> in the Madhya Pradesh</h2>
                </div>
                <ul class="nav nav-tabs text-center align-items-center justify-content-center" id="myTab1" role="tablist">
                    <!-- get Dynamically  -->
                </ul>
                <div class="tab-content" id="myTabContent1">
                    <!-- Tab contents will be generated here dynamically -->
                </div>
                
                <!-- container -->
            </div>
            <!-- color overlay -->
        </div>
        <!-- travel tour con -->
    </section>`;
    const container = document.getElementById("lucky-mpDestination-container");
    if (container) {
      container.innerHTML = mpDestiHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importMpDestination();
  });
   
//   {/* // To be used in any HTML page: */}
// {/* //   export in any html page = <div id="lucky-mpDestination-container"></div> */}
//  {/* <script src="assets/component/footer.js"></script> */}