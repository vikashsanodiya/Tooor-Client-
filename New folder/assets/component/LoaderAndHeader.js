function importLoderAndHeader() {
    const loderAndHeaderHtml = ` 
    <div class="container">
                <div class="top-bar-inner-con d-flex align-items-center justify-content-between">
                    <div class="left-con">
                        <a href="mailto:info@luckytravels.com"><i class="fa-solid fa-envelope"></i> info@luckytravels.com</a>
                        <!-- left con -->
                    </div>
                    <div class="right-con"><a href="tel:+919109106321"><i class="fa-solid fa-phone"></i>+917828722723</a>
                        <!-- right con -->
                    </div>
                    <!-- top bar inner con -->
                </div>
                <!-- container -->
            </div>`;
    const container = document.getElementById("lucky-loderAndHeader-container");
    if (container) {
      container.innerHTML = loderAndHeaderHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importLoderAndHeader();
  });

  {/* // To be used in any HTML page: */}
{/* //   export in any html page = <div id="lucky-loderAndHeader-container"></div> */}
 {/* <script src="assets/component/footer.js"></script> */}