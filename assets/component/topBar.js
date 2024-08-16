function importNavBar() {
    const navBarHtml = 
          ` <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="index.html">
                        <figure class="mb-0">
                            <img src="assets/images/lucky-logo.svg" alt="logo-icon">
                        </figure>
                    </a>

                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link p-0" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link p-0" href="about.html">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link p-0" href="destinations.html">Destination</a>
                                
                                
                            </li>
                             </li><li class="nav-item">
                                <a class="nav-link p-0" href="gallery.html">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link p-0" href="booking.html">Booking</a>
                            </li><li class="nav-item">
                                <a class="nav-link p-0" href="contact.html">Contact</a>
                            </li>
                        </ul>
                        <div class="header-contact">
                            <ul class="list-unstyled mb-0">
                                <li><a href="https://wa.me/7828722723?text=Hi,%20I%20am%20interested%20in%20booking.%20Can%20we%20talk%20about%20it." class="live-chat-btn d-inline-block"><i class="fa-solid fa-map-location-dot"></i>
                    Book Now</a></li>
                                <!-- list unstyled -->
                            </ul>
                            <!-- header contact -->
                        </div>
                        <!--  -->
                    </div>
                </nav>`;
    const container = document.getElementById("lucky-navbar-container");
    if (container) {
      container.innerHTML = navBarHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importNavBar();
  });
  
  // To be used in any HTML page:
//   export in any html page = <div id="lucky-navbar-container"></div>
/* <script src="assets/component/topBar.js"></script>*/
