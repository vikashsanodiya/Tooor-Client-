

function importSearchBar() {
    const searchBarHtml = ` <div class="container wow bounceInUp" data-wow-duration="2s">
                <ul class="nav nav-tabs text-center align-items-center justify-content-between" id="myTab" role="tablist">
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="hotel-tab" data-toggle="tab" data-target="#hotel" type="button" role="tab" aria-controls="hotel" aria-selected="true"> <img class="img-fluid d-block"
                src="assets/images/hotel-icon.png" alt="icon"> Hotels</button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="car-tab" data-toggle="tab" data-target="#car" type="button" role="tab" aria-controls="car" aria-selected="false"><img class="img-fluid d-block"
                src="assets/images/car-rental-icon.png" alt="icon"> Car
              Rentals</button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="flight-tab" data-toggle="tab" data-target="#flight" type="button" role="tab" aria-controls="flight" aria-selected="false"><img class="img-fluid d-block"
                src="assets/images/flight-icon.png" alt="icon"> Flights</button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="trip-tab" data-toggle="tab" data-target="#trip" type="button" role="tab" aria-controls="trip" aria-selected="false"><img class="img-fluid d-block"
                src="assets/images/trip-icon.png" alt="icon"> Tours</button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="cruise-tab" data-toggle="tab" data-target="#cruise" type="button" role="tab" aria-controls="cruise" aria-selected="false"><img class="img-fluid d-block"
                src="assets/images/cruise-icon.png" alt="icon"> Cruises</button>
                    </li> -->
                    <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="activity-tab" data-toggle="tab" data-target="#activity" type="button" role="tab" aria-controls="activity" aria-selected="false"><img class="img-fluid d-block"
                src="assets/images/activity-icon.png" alt="icon"> Activities</button>
                    </li> -->
                </ul>
                <div class="tab-content" id="myTabContent">
                    <!-- <div class="tab-pane fade show active" if you want alwalyasy active  past this -->
                    <div class="tab-pane fade" id="car" role="tabpanel" aria-labelledby="car-tab">
                        <div class="tab-inner-con text-left">
                            <div class="destination-con">
                                <label for="destination2">Destination</label>
                                <input type="text" class="form-control" placeholder="" id="destination2">
                                <!-- col -->
                            </div>
                            <div class="checkin-con">
                                <label for="checkin2">Check in</label>
                                <input type="date" class="form-control" id="checkin2" name="checkin" required="">
                                <!-- col -->
                            </div>
                            <div class="checkout-con">
                                <label for="checkout2">Check Out</label>
                                <input type="date" class="form-control" id="checkout2" name="checkout" required="">
                                <!-- col -->
                            </div>
                            <div class="adults-con">
                                <label for="adults2">Adults </label>
                                <select class="form-select" id="adults2" onchange="javascript: dynamicDropDown(this.options[this.selectedIndex].value);">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                                <!-- col -->
                            </div>
                            <div class="children-con">
                                <label for="children2">Children </label>
                                <select class="form-select" id="children2">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                                <!-- col -->
                            </div>
                            <!-- tab-inner-con -->
                        </div>
                        <div class="green-btn d-inline-block">
                            <a href="booking.html" class="d-inline-block">Search Now</a>
                        </div>
                        <!-- car tab -->
                    </div>
                    
                    <div class="tab-pane fade" id="trip" role="tabpanel" aria-labelledby="trip-tab">
                        <div class="tab-inner-con text-left">

                            <div class="destination-con">
                                <label for="destination4">Destination</label>
                                <input type="text" class="form-control" placeholder="" id="destination4">
                                <!-- col -->
                            </div>
                            <div class="checkin-con">
                                <label for="checkin4">Check in</label>
                                <input type="date" class="form-control" id="checkin4" name="checkin" required="">
                                <!-- col -->
                            </div>
                            <div class="checkout-con">
                                <label for="checkout4">Check Out</label>
                                <input type="date" class="form-control" id="checkout4" name="checkout" required="">
                                <!-- col -->
                            </div>
                            <div class="adults-con">
                                <label for="adults4">Adults </label>
                                <select class="form-select" id="adults4" onchange="javascript: dynamicDropDown(this.options[this.selectedIndex].value);">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                                <!-- col -->
                            </div>
                            <div class="children-con">
                                <label for="children4">Children </label>
                                <select class="form-select" id="children4">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                                <!-- col -->
                            </div>
                            <!-- tab-inner-con -->
                        </div>
                        <div class="green-btn d-inline-block">
                            <a href="booking.html" class="d-inline-block">Search Now</a>
                        </div>
                        <!-- trip tab -->
                    </div>
                    
                </div>
                <!-- container -->
            </div>`;
            const container = document.getElementById("lucky-search-container");
            if (container) {
              container.innerHTML = searchBarHtml;
            }
          }
          
          window.addEventListener("load", function () {
            importSearchBar();
          });
          
          // To be used in any HTML page:
        //   export in any html page = <div id="lucky-search-container"></div>
        /* <script src="assets/component/topBar.js"></script> */