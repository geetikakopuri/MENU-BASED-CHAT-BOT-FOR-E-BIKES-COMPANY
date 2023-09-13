var data = 
{
  chatinit: {
    title: ["Hello <span class='emoji'> &#128075;</span>", "If you need assistance, we're always here.","Please use only the buttons to navigate through the conversation 😀"],
    options: ["Enquire <span class='emoji'> &#128269;</span>", "TestRide <span class='emoji'>&#128757;</span>", "Battery<span class='emoji'> &#128267;</span>", "Service & Support <span class='emoji'> &#128736;</span>"]
  },
  enquire: {
    title: ["Please select category"],
    options: ['Models','Price','Contact Us'],
    url: {}
  },
  models:{
    title:['click on each model to know more'],
    options:['BGC12iMax',' BGD15','BGB8'],
    url:{}
  },
  price:{
    title:["Follow the Below link:"],
    options:[],
    url:{
    more:"https://www.zigwheels.com/scooters/BGauss",
    link:["#"]
  }
  },
  contact:{
    title:[],
    options:[],
    url:{
      more:"http://www.vihaanelectrix.in/contact.php",
      link:["#"]
        }
  },
bgc12imax:{
  title:['follow the following link'],
  options:[],
  url:{
    more:"https://www.bgauss.com/c12-overview/",
    link:["#"]
  }
},
bgd15:{
  title:['follow the following link'],
  options:[],
  url:{
    more:"https://www.bgauss.com/d15-model/",
    link:["#"]
  }
},
bgb8:{
  title:['follow the following link'],
  options:[],
  url:{
    more:"https://www.bgauss.com/b8-overview/",
    link:["#"]
  }
},
  battery: {
    title: ["Please select a category"],
    options: ['Warranty of Battery', 'Lifetime of Battery', 'Usage Safety of Battery'],
    url: {}
  },
  testride: {
    title: ["Sure! If you want to schedule the test ride, select any of the nearest locations!"],
    options: ['Maddilapalem','Gajuwaka','Pendurthi'],
    url: {}
  },
  warranty:{
    title:["WARRANTY POLICY:","1. Only valid for the first owner.","2. Dealership completes registration card at delivery.","3. Battery warranty: 36 months or 30,000 km, 70% capacity retention(Terms & Conditions apply)"],
    options:['Usage Safety of Battery','Lifetime of Battery'],
    url:{}
  },
  lifetime:{
    title:["The LIFETIME of the Battery:","- BGauss electric scooter's Lithium-ion battery charges fully in just 5-6 hours, providing sufficient power for a day's commute."," - These batteries are known for their long-lasting performance, lasting around 5-8 years or a minimum of 2,000 charging cycles with proper usage."],
    options:['Warranty of Battery','Usage Safety of Battery'],
    url:{}
  },
  //safety of battery
  usage:{
    title:["- Full charge time: 5-6 hours"," - Charger is sealed; avoid opening.","- Charge the battery every 30 days when not in use."],
    options:['lifetime of Battery','Warranty of Battery'],
    url: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWMaW0yUbtvRC5pb8B6cZ_oMFbpkysHh-Z6qFGoP9wKomxZt0QkxZaC1AueP2rLgPfQg&usqp"
    ]
  },
  service:
  {
    title:["These are the services provided by Vihaan Electrix"],
    options:['General Services','OnRoad Services'],
    url:{}
  }


};
document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
  var startIcon = document.getElementById("startIcon");
  if (startIcon.classList.contains("fa-commenting-o")) {
    document.getElementById("test").style.display = "block";
    startIcon.classList.remove("fa-commenting-o");
    startIcon.classList.add("fa-window-close");
    initChat();
  } else {
    location.reload();
  }
}


function initChat() {
  j = 0;
  cbot.innerHTML = '';
  for (var i = 0; i < len1; i++) {
    setTimeout(handleChat, (i * 500));
  }
  setTimeout(function () { 
    showOptions(data.chatinit.options)
  }, ((len1 + 1) * 500))
}

var j = 0;
function handleChat() {
  console.log(j);
  var elm = document.createElement("p");
  elm.innerHTML = data.chatinit.title[j];
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
  j++;
  handleScroll();
}
function showOptions(options) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = '<div>' + options[i] + '</div>';
    opt.innerHTML = inp;       
    opt.setAttribute("class", "opt");
    opt.addEventListener("click", handleOpt);
    cbot.appendChild(opt);
    handleScroll();
  }
}
// Define a function to handle user input for the test ride section of vardata

// Add a flag to track if the user is scheduling a test ride
var isSchedulingTestRide = false;

// Function to handle user input for the test ride section
function handleTestRide() { 
   isSchedulingTestRide = true; 
 var msg = "Please select a location for the test ride:";
  handleDelay(msg);

  // Display the location options as buttons with styling
  for (var i = 0; i < data.testride.options.length; i++) {
    var locationBtn = document.createElement("button");
    locationBtn.setAttribute("class", "location-btn");
    locationBtn.innerText = data.testride.options[i];
    locationBtn.innerText = data.testride.options[i];
    locationBtn.style.margin = "0.3rem 0.5rem";
    locationBtn.style.padding = "5px 20px";
    locationBtn.style.fontSize = "16px";
    locationBtn.style.borderRadius = "20px 20px";
    locationBtn.style.backgroundColor ="transparent";
    locationBtn.style.color = "blue";
    locationBtn.style.textAlign="center";
    locationBtn.style.fontWeight="400px";
    locationBtn.style.alignItems="left";
    locationBtn.style.lineHeight="normal";
    locationBtn.style.borderBottomStyle="none";
    locationBtn.style.borderBottomWidth="0px";
    locationBtn.style.borderLeftColor="rgb(0, 52, 153)";
    locationBtn.style.borderLeftStyle="none";
    locationBtn.style.borderLeftWidth="0px";
    locationBtn.style.borderRightColor="rgb(0, 52, 153)";
    locationBtn.style.borderRightStyle="none";
    locationBtn.style.borderRightWidth="0px";
    locationBtn.style.borderTopColor="rgb(0, 52, 153)";
    locationBtn.style.borderTopLeftRadius="6px";
    locationBtn.style.borderTopRightRadius="6px";
    locationBtn.style.borderBottomLeftRadius="6px";
    locationBtn.style.borderBottomRightRadius="6px";
        locationBtn.style.borderTopStyle="none";
        locationBtn.style.borderTopWidth="0px";
        locationBtn.style.boxSizing="content-box";
        locationBtn.style.color="rgb(0, 52, 153)";
        locationBtn.style.borderColor= "blue";
        locationBtn.style.border=" 1px solid blue";
    
    locationBtn.style.fontFamily= "system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol";
    cbot.appendChild(locationBtn); 

    // Add event listener for location selection
    locationBtn.addEventListener("click", function () {
      var selectedLocation = this.innerText;
      this.remove();
      handleTestRideDetails(selectedLocation); // Pass the selected location as an argument
    });
  }

  handleScroll();
}


//   for (var i = 0; i < data.testride.options.length; i++) {
//     var locationBtn = document.createElement("button");
//     locationBtn.setAttribute("class", "location-btn");
//     locationBtn.innerText = data.testride.options[i];
//     locationBtn.style.margin = "0.3rem 0.5rem";
//     locationBtn.style.padding = "5px 20px";
//     locationBtn.style.fontSize = "16px";
//     locationBtn.style.borderRadius = "20px 20px";
//     locationBtn.style.backgroundColor ="transparent";
//     locationBtn.style.color = "blue";
//     locationBtn.style.textAlign="center";
//     locationBtn.style.fontWeight="400px";
//     locationBtn.style.alignItems="left";
//     locationBtn.style.lineHeight="normal";
//     locationBtn.style.borderBottomStyle="none";
//     locationBtn.style.borderBottomWidth="0px";
//     locationBtn.style.borderLeftColor="rgb(0, 52, 153)";
//     locationBtn.style.borderLeftStyle="none";
//     locationBtn.style.borderLeftWidth="0px";
//     locationBtn.style.borderRightColor="rgb(0, 52, 153)";
//     locationBtn.style.borderRightStyle="none";
//     locationBtn.style.borderRightWidth="0px";
//     locationBtn.style.borderTopColor="rgb(0, 52, 153)";
//     locationBtn.style.borderTopLeftRadius="6px";
//     locationBtn.style.borderTopRightRadius="6px";
//     locationBtn.style.borderTopStyle="none";
//     locationBtn.style.borderTopWidth="0px";
//     locationBtn.style.boxSizing="content-box";
//     locationBtn.style.color="rgb(0, 52, 153)";
//     locationBtn.style.borderColor= "blue";
//     locationBtn.style.border=" 1px solid blue";
//     locationBtn.style.fontFamily= system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//     cbot.appendChild(locationBtn); 

//     // Add event listener for location selection
//     locationBtn.addEventListener("click", function () {
//       var selectedLocation = this.innerText;
//       this.remove();
//       handleTestRideDetails(selectedLocation); // Pass the selected location as an argument
//     });
// }

//   handleScroll();

function handleTestRideDetails(location) {
  var detailsMsg = "Great! Please provide your details to schedule the test ride:";
  handleDelay(detailsMsg);

  // Display the form to collect user details
  var form = document.createElement("form");
  form.setAttribute("class", "test-ride-form");

  var form = document.createElement("form");

var table = document.createElement("table");

var locationRow = document.createElement("tr");
locationRow.innerHTML = `

  <td><input type="text" name="location" value="${location}" readonly></td>
`;
table.appendChild(locationRow);

var nameRow = document.createElement("tr");
nameRow.innerHTML = `

  <td><input type="text" name="name" placeholder="Full Name" required></td>
`;
table.appendChild(nameRow);

var phoneRow = document.createElement("tr");
phoneRow.innerHTML = `
 
  <td><input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}"></td>
`;
table.appendChild(phoneRow);

var emailRow = document.createElement("tr");
emailRow.innerHTML = `
  
  <td><input type="email" name="email" placeholder="Email Address" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"></td>
`;
table.appendChild(emailRow);

var dateRow = document.createElement("tr");
dateRow.innerHTML = `

  <td><input type="date" name="date" required></td>
`;
table.appendChild(dateRow);

var timeRow = document.createElement("tr");
timeRow.innerHTML = `
  
  <td><input type="time" name="time" required></td>
`;
table.appendChild(timeRow);

var submitRow = document.createElement("tr");
submitRow.innerHTML = `
  <td colspan="2"><button type="submit">Submit</button></td>
`;
table.appendChild(submitRow);

form.appendChild(table);

cbot.appendChild(form);



  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

     if (!form.checkValidity()) {
      // If the form is invalid, show an error message
      var errorMsg = "Please fill out all required fields.";
      handleDelay(errorMsg);
      return;
    }

 // Validate the email and phone number fields using regular expressions
 var emailInput = form.elements["email"];
 var phoneInput = form.elements["phone"];
 
 var emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
 var phonePattern = /^[0-9]{10}$/;

 if (!emailPattern.test(emailInput.value)) {
   var errorMsg = "Please enter a valid email address.";
   handleDelay(errorMsg);
   return;
 }

 if (!phonePattern.test(phoneInput.value)) {
   var errorMsg = "Please enter a valid 10-digit phone number.";
   handleDelay(errorMsg);
   return;
 }

    // Get the user's details from the form
    var formData = new FormData(form);

 // Custom validation for the time field
 var timeInput = form.elements["time"];
 var selectedTime = new Date(`2000-01-01T${timeInput.value}`);
 var startTime = new Date(`2000-01-01T10:00`);
 var endTime = new Date(`2000-01-01T17:00`);
// Custom validation for the date field
var dateInput = form.elements["date"];
var selectedDate = new Date(dateInput.value);

// Check if the selected date is a Sunday (day = 0)
if (selectedDate.getDay() === 0) {
  var errorMsg = "Test rides are not available on Sundays. Please choose another date.";
  handleDelay(errorMsg);
  return;
}
 if (selectedTime < startTime || selectedTime > endTime) {
   var errorMsg = "Please select a time between 10 AM and 5 PM.";
   handleDelay(errorMsg);
   return;
 }



     // Replace with the URL of your server-side script

    // Submit the form data using an AJAX request
    fetch('vihaan2.php', {
      method: "POST",
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(function(data) {
      if (data === 'success') {
        var successMsg = "Thank you for scheduling a test ride! We'll get in touch with you soon..";
        handleDelay(successMsg);
      } else {
        var errorMsg = "Sorry, there was an error scheduling your test ride. Please try again later.";
        handleDelay(errorMsg);
      }
    })
    .catch(function(error) {
      console.log('There was a problem with the fetch operation:', error.message);
    });
  })
;

  cbot.appendChild(form);
  handleScroll();
}

var isHandleservices = false;

    // Rest of the code remains unchanged

    //general services...
    function handleGeneralServices() {
      isHandleservices = true;
      var msg = "Please provide your details and select the type of service:";
      handleDelay(msg);

      // Remove existing options
      removeOptions();

      // Create a form to collect user details and service type
      var form = document.createElement("form");
      form.setAttribute("class", "general-services-form");

      var table = document.createElement("table");

      // Dropdown box for selecting the type of service
      var serviceTypeRow = document.createElement("tr");
      serviceTypeRow.innerHTML = `
      <td>
  <select name="serviceType" required>
    <option value="" disabled selected>Select Service Type</option>
    <option value="Scheduling General Service">Scheduling General Service</option>
    <option value="Feedback">Feedback</option>
    <option value="Issues">Issues</option>
    <option value="Other">Other</option>
  </select>
   
</td>
      `;
      table.appendChild(serviceTypeRow);

      // Name field
      var nameRow = document.createElement("tr");
      nameRow.innerHTML = `
      
        <td><input type="text" name="name" placeholder="Name" required></td>
      `;
      table.appendChild(nameRow);

      // Mobile number field
      var phoneRow = document.createElement("tr");
      phoneRow.innerHTML = `
      
        <td><input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}"></td>
      `;
      table.appendChild(phoneRow);

      // Email address field
      var emailRow = document.createElement("tr");
      emailRow.innerHTML = `
    
        <td><input type="email" name="email" placeholder="Email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"></td>
      `;
      table.appendChild(emailRow);

      // Bike model field
      var modelRow = document.createElement("tr");
      modelRow.innerHTML = `
      <td>
      <select name="serviceType" required>
        <option value="" disabled selected>Select model Type</option>
        <option value="BGC12iMAX">BGC12iMAX</option>
        <option value="BGD15">BGD15</option>
        <option value="BGB8">BGB8</option>
        <option value="Other">Other</option>
      </select>
    </td>

      `;
      table.appendChild(modelRow);

      // Additional comments (textarea) field
      var commentsRow = document.createElement("tr");
      commentsRow.innerHTML = `
        
        <td><textarea name="comments" placeholder="Please let us know your thougths or any problems you are facing(optional)" cols="25" rows="5"></textarea></td>
      `;
      table.appendChild(commentsRow);

      // Submit button
      var submitRow = document.createElement("tr");
      submitRow.innerHTML = `
        <td colspan="3"><button type="submit">Submit</button></td>
      `;
      table.appendChild(submitRow);

      form.appendChild(table);

      cbot.appendChild(form);

      // Add event listener for form submission
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        if (!form.checkValidity()) {
          // If the form is invalid, show an error message
          var errorMsg = "Please fill out all required fields.";
          handleDelay(errorMsg);
          return;
        }
// Validate the email and phone number fields using regular expressions
var emailInput = form.elements["email"];
var phoneInput = form.elements["phone"];

var emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
var phonePattern = /^[0-9]{10}$/;

if (!emailPattern.test(emailInput.value)) {
  var errorMsg = "Please enter a valid email address.";
  handleDelay(errorMsg);
  return;
}

if (!phonePattern.test(phoneInput.value)) {
  var errorMsg = "Please enter a valid 10-digit phone number.";
  handleDelay(errorMsg);
  return;
}
        // Get the user's details and service type from the form
        var formData = new FormData(form);

        // Submit the form data using an AJAX request
        fetch('vihaan3.php', {
          method: "POST",
          body: formData
        })
          .then(function (response) {
            if (response.ok) {
              return response.text();
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .then(function (data) {
            if (data === 'success') {
              var successMsg = "Thank you for choosing our services!.";
              handleDelay(successMsg);
            } else {
              var errorMsg = "Sorry, there was an error submitting your request. Please try again later.";
              handleDelay(errorMsg);
            }
          })
          .catch(function (error) {
            console.log('There was a problem with the fetch operation:', error.message);
          });
      });

      handleScroll();
    }
// Function to remove existing options from the chat box
function removeOptions() {
  var options = document.querySelectorAll(".opt");
  options.forEach(function (option) {
    option.remove();
  });
}
// Function to remove existing options from the chat box
function handleOnRoadServices() {
  var msg = "Please provide your details for On-Road Services:";
  handleDelay(msg);

  // Remove existing options
  removeOptions();

  // Create a form to collect user details
  var form = document.createElement("form");
  form.setAttribute("class", "on-road-services-form");

  var table = document.createElement("table");

  // Location field
  var locationRow = document.createElement("tr");
  locationRow.innerHTML = `
  
    <td><input type="text" name="location" placeholder="Current-Location" required></td>
  `;
  table.appendChild(locationRow);

  // Issue facing field
  var issueRow = document.createElement("tr");
  issueRow.innerHTML = `
  
    <td><input type="text" name="issue" placeholder="Issue Facing" required></td>
  `;
  table.appendChild(issueRow);

  var modelRow = document.createElement("tr");
      modelRow.innerHTML = `
      <td>
      <select name="serviceType" required>
        <option value="" disabled selected>Select model Type</option>
        <option value="BGC12iMAX">BGC12iMAX</option>
        <option value="BGD15">BGD15</option>
        <option value="BGB8">BGB8</option>
        <option value="Other">Other</option>
      </select>
    </td>

      `;
      table.appendChild(modelRow);

  // Name field
  var nameRow = document.createElement("tr");
  nameRow.innerHTML = `
    
    <td><input type="text" name="name" placeholder="Name" required></td>
  `;
  table.appendChild(nameRow);

  // Mobile number field
  var phoneRow = document.createElement("tr");
  phoneRow.innerHTML = `
  
    <td><input type="tel" name="phone" placeholder="Mobile Number" required pattern="[0-9]{10}"></td>
  `;
  table.appendChild(phoneRow);

  // Email address field
  var emailRow = document.createElement("tr");
  emailRow.innerHTML = `
  
    <td><input type="email" name="email" placeholder="Email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"></td>
  `;
  table.appendChild(emailRow);

  // Submit button
  var submitRow = document.createElement("tr");
  submitRow.innerHTML = `
    <td colspan="2"><button type="submit">Submit</button></td>
  `;
  table.appendChild(submitRow);

  form.appendChild(table);

  cbot.appendChild(form);

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    if (!form.checkValidity()) {
      // If the form is invalid, show an error message
      var errorMsg = "Please fill out all required fields.";
      handleDelay(errorMsg);
      return;
    }

    // Validate the email and phone number fields using regular expressions
    var emailInput = form.elements["email"];
    var phoneInput = form.elements["phone"];
    
    var emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    var phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(emailInput.value)) {
      var errorMsg = "Please enter a valid email address.";
      handleDelay(errorMsg);
      return;
    }

    if (!phonePattern.test(phoneInput.value)) {
      var errorMsg = "Please enter a valid 10-digit phone number.";
      handleDelay(errorMsg);
      return;
    }


    // Get the user's details from the form
    var formData = new FormData(form);

    // Submit the form data using an AJAX request
    fetch('vihaan4.php', {
      method: "POST",
      body: formData
    })
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(function (data) {
        if (data === 'success') {
          var successMsg = "You're welcome! Thank you for submitting your On-Road Services request. Our team will be in touch with you shortly to assist you further. If you have any urgent queries or need immediate assistance, please don't hesitate to contact us. We appreciate your trust in our services!.";
          handleDelay(successMsg);
        } else {
          var errorMsg = "Sorry, there was an error submitting your request. Please try again later.";
          handleDelay(errorMsg);
        }
      })
      .catch(function (error) {
        console.log('There was a problem with the fetch operation:', error.message);
      });
  });

  handleScroll();
}

function handleOpt() {
  console.log(this);
  var str = this.innerText;
  var textArr = str.split(" ");
  var findText = textArr[0];

  document.querySelectorAll(".opt").forEach(el => {
    el.remove();
  });
  var elm = document.createElement("p");
  elm.setAttribute("class", "test");
  var sp = '<span class="rep">' + this.innerText + '</span>';
  elm.innerHTML = sp;
  cbot.appendChild(elm);

  console.log(findText.toLowerCase());
  var tempObj = data[findText.toLowerCase()];

  if (findText.toLowerCase() === "testride") {
    handleTestRide();
  }
  else if (findText.toLowerCase() === "usage") {
    var usageTitle = tempObj.title[0];
    var usageImageUrl = tempObj.url[0];


     // Display the usage safety image
     var image = document.createElement("img");
     image.src = usageImageUrl;
     image.classList.add("usage-image");
     cbot.appendChild(image);

     //display message of battery->usage safety
     var usageMessage = document.createElement("div");
     usageMessage.classList.add("usage-message");

var paragraphs = tempObj.title;
for (var i = 0; i < paragraphs.length; i++) {
  var p = document.createElement("p");
  p.textContent = paragraphs[i];
  usageMessage.appendChild(p);
}

cbot.appendChild(usageMessage);
 

  
    // Show options if available
    if (tempObj.options.length > 0) {
      showOptions(tempObj.options);
    }
  }
else if (findText.toLowerCase() === "warranty")
{
  var warrentyTitle = tempObj.title[0];
  //display message of battery->warrenty
  
    
  var warrentyMessage = document.createElement("div");
 warrentyMessage.classList.add("warranty-message");

var paragraphs = tempObj.title;
for (var i = 0; i < paragraphs.length; i++) {
  var p = document.createElement("p");
  p.textContent = paragraphs[i];
  warrentyMessage.appendChild(p);
}

cbot.appendChild(warrentyMessage);
if (tempObj.options.length > 0) {
  showOptions(tempObj.options);
}
}
else if(findText.toLowerCase() === "lifetime")
{
  var lifetimeTitle = tempObj.title[0];
  //display message of battery->warrenty
  
    
  var lifetimeMessage = document.createElement("div");
 lifetimeMessage.classList.add("lifetime-message");

var paragraphs = tempObj.title;
for (var i = 0; i < paragraphs.length; i++) {
  var p = document.createElement("p");
  p.textContent = paragraphs[i];
  lifetimeMessage.appendChild(p);
}

cbot.appendChild(lifetimeMessage);
if (tempObj.options.length > 0) {
  showOptions(tempObj.options);
}
}
else if (findText.toLowerCase() === "general") {
    handleGeneralServices();
  }
  else if (findText.toLowerCase() === "onroad") {
    handleOnRoadServices();
  }
else {
  var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
  }
}


 
function handleDelay(title) {
  var elm = document.createElement("p");
  elm.innerHTML = title;
  elm.setAttribute("class", "msg");
  cbot.appendChild(elm);
}

function handleResults(title, options, url) {
  for (let i = 0; i < title.length; i++) {
    setTimeout(function () {
      handleDelay(title[i]);
    }, i * 500)
  }

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  }

  if (isObjectEmpty(url) == true) {
    console.log("having more options");
    setTimeout(function () {
      showOptions(options);
    }, title.length * 500)
  } else {
    console.log("end result");
    setTimeout(function () {
      handleOptions(options, url);
    }, title.length * 500)
  }
}

function handleOptions(options, url) {
  for (var i = 0; i < options.length; i++) {
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt");
    cbot.appendChild(opt);
  }
  var opt = document.createElement("span");
  var inp = '<a class="m-link" href="' + url.more + '">' + 'Click Here</a>';

  const isObjectEmpty = (url) => {
    return JSON.stringify(url) === "{}";
  }

  console.log(isObjectEmpty(url));
  console.log(url);
  opt.innerHTML = inp;
  opt.setAttribute("class", "opt link");
  cbot.appendChild(opt);
  handleScroll();
}

function handleScroll() {
  var elem = document.getElementById('chat-box');
  elem.scrollTop = elem.scrollHeight;
}


const chatIconContainer = document.getElementById("init");
const chatIcon = document.getElementById("startIcon");
let animationPaused = false;

// Function to toggle the animation play state
function toggleAnimation() {
  if (animationPaused) {
    chatIconContainer.style.animationPlayState = "running";
    chatIcon.style.animationPlayState = "running";
  } else {
    chatIconContainer.style.animationPlayState = "paused";
    chatIcon.style.animationPlayState = "paused";
  }
  animationPaused = !animationPaused;
}

// Function to pause the animation
function pauseAnimation() {
  chatIconContainer.style.animationPlayState = "paused";
  chatIcon.style.animationPlayState = "paused";
}

// Function to resume the animation
function resumeAnimation() {
  if (!animationPaused) {
    chatIconContainer.style.animationPlayState = "running";
    chatIcon.style.animationPlayState = "running";
  }
}

// Add event listener for mouse enter to pause the animation
chatIconContainer.addEventListener("mouseenter", pauseAnimation);

// Add event listener for mouse leave to resume the animation
chatIconContainer.addEventListener("mouseleave", resumeAnimation);