function importTopBar() {
    const topBarHtml = 
          `<div class="w-100 float-left top-bar-con main-box">
              <div class="container">
                  <div class="top-bar-inner-con d-flex align-items-center justify-content-between">
                      <div class="left-con">
                          <a href="mailto:info@luckytourntravels.com"><i class="fa-solid fa-envelope"></i> info@luckytourntravels.com</a>
                          <!-- left con -->
                      </div>
                      <div class="right-con">
                          <a href="tel:+919109106321"><i class="fa-solid fa-square-phone"></i> +91 9109106321</a>
                          <!-- right con -->
                      </div>
                      <!-- top bar inner con -->
                  </div>
                  <!-- container -->
              </div>
              <!-- top bar con -->
          </div>`;
    const container = document.getElementById("top-bar-container");
    if (container) {
      container.innerHTML = topBarHtml;
    }
  }
  
  window.addEventListener("load", function () {
    importTopBar();
  });
  
  // To be used in any HTML page:
//   export in any html page = <div id="top-bar-container"></div>
  