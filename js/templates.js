// Js custom templates ---Avoiding redandant codes.

// Topbar 

class Topbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Topbar Section -->
<div class="topbar">
      <div class="container">
          <div class="row">
              <!-- Left-aligned text with a brief message -->
              <div class="col-md-6 text-left">
                  <p>info@eurosatgroup.com | +256 700 274 249 | +256 753 660 000</p>
              </div>
  
              <!-- Right-aligned social icons and login/register dropdown -->
              <div class="col-md-6 text-right">
                  <ul class="list-inline">
                      <!-- Social media icons -->
                      <li>
                         <!-- <a class="social" href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                          <a class="social" href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>  -->
                          <a class="social" aria-label="Chat on WhatsApp" href="https://wa.me/+256700274249" aria-label="Whatsapp"><i class="fa fa-whatsapp"></i></a>
                      </li>
  
                      <!-- Dropdown for Login and Register -->
                      <li class="dropdown">
                          <!-- Provide the url to the ERP login route -->
                          <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fa fa-lock"></i> Sign Up
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
        `
    }
}
customElements.define('top-bar', Topbar)

// Header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Header Section -->
<header class="header ">
    <div class="container">
        <!-- Hover menu and navigation bar -->
        <div class="hovermenu ttmenu">
            <nav class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <!-- Toggle button for mobile navigation -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="fa fa-bars"></span>
                    </button>

                    <!-- Logo with navigation link -->
                    <div class="logo">
                        <a class="navbar-brand" href="index.html">
                            <img src="images/edusat-logo.png" alt="EduSat Logo">
                        </a>
                    </div>
                </div>

                <!-- Collapsible navigation menu -->
                <div class="navbar-collapse collapse">
                    <!-- Main navigation links -->
                    <ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="page-features.html">Features</a></li>
                        <li><a href="page-contact.html">Contact</a></li>
                        <li><a href="page-request-demo.html">Request Demo</a></li>
                    </ul>

                    <!-- Right-aligned navigation link (Register Now button) -->
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="btn btn-primary" href="#">
                                <i class="fa fa-sign-in"></i> Log in
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</header>
        `
    }
}
customElements.define('site-header', Header);

// End Bar
class Endbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
        <!-- Copyright Section -->
<section class="copyright">
    <div class="container">
        <div class="row">
            <!-- Left-aligned: Attribution to the source (Templates Hub) -->
            <div class="col-md-6 text-left">
                <p>
                    <a target="_blank" href="https://www.eurosatgroup.com/" aria-label="Visit Eurosat Group">
                        A product of Eurosat Group of Companies Ltd
                    </a>
                </p>
            </div>
            <div class="col-md-6 text-right">
                <p>
                    <a target="_blank" href="#">
                       All rights reserverd
                    </a>
                </p>
            </div>
        </div>
    </div>
</section>
        `
    }
}
customElements.define('end-bar', Endbar)

// Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer Section -->
<footer class="dark footer section">
    <div class="container">
        <div class="row">
            <!-- About LearnPLUS Widget -->
            <div class="col-md-3 col-md-6 col-xs-12">
                <div class="widget">
                    <div class="widget-title">
                        <h4>About Eurosat</h4>
                        <hr>
                    </div>
                    <p>Eurosat Group provides the highest quality in Enterprise Resource Planning systems and services to meet the demand of Academic Institutions today.                    </p>
                    <a href="https://www.eurosatgroup.com/" class="btn btn-default" aria-label="Read more about Eurosat Group">Read More</a>
                </div>
            </div>

            <!-- Contact Details Widget -->
            <div class="col-md-3 col-md-6 col-xs-12">
                <div class="widget">
                    <div class="widget-title">
                        <h4>Contact Details</h4>
                        <hr>
                    </div>
                    <ul class="contact-details">
                        <li><i class="fa fa-link"></i> <a href="https://www.eurosatgroup.com/" target="_blank" aria-label="Visit our website">www.eurosatgroup.com</a></li>
                        <li><i class="fa fa-envelope"></i> <a href="mailto:info@eurosatgroup.com" aria-label="Send email to info@eurosatgroup.com</a></li>
                        <li><i class="fa fa-phone"></i> +256 700 274249</li>
                        <li><i class="fa fa-fax"></i> +256 753 660000</li>
                        <li><i class="fa fa-home"></i> Plot 2A, Ssembeguya Road, Keti Falawo, Kawempe - Kampala. Uganda</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

        `
    }
}
customElements.define('site-footer', Footer)

// Why Us
class WhyUS extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Features Section -->
<section class="white section">
    <div class="container">
        <!-- Section Title -->
        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h4>Why Choose Edusat ERP</h4>
                    <p>Simple, efficient, and secure</p>
                </div>
            </div>
        </div>

        <!-- Feature List -->
        <div class="row service-center">
            <!-- Feature 1: Cirriculum Customization-->
            <div class="col-md-4 col-sm-6">
                <div class="feature-list border-radius">
                    <i>95%</i>
                    <p><strong>User Satisfaction</strong></p> 
                     <p>School owners, administrators, teachers and parents report inreased satisfaction with Edusat ERP</p>
                    </div>
            </div>

            <!-- Feature 2: Tearch and staff -->
            <div class="col-md-4 col-sm-6">
                <div class="feature-list border-radius">
                    <i>50%</i>
                    <p><strong>50% Time Saving</strong></p>
                    <p>Reduced administrative workloads by up to 50% with automated processes</p>
                </div>
            </div>

            <!-- Feature 3: Student Mngt -->
            <div class="col-md-4 col-sm-6">
                <div class="feature-list border-radius">
                    <i>30%</i>
                    <p><strong>Cost Saving</strong></p>            
                    <p>Save up to 30% on operational costs with efficient resource management</p>
                    </div>
            </div>
        </div>
    </div>
</section>
        `
    }
}
customElements.define('why-us', WhyUS)

// Our clients
class OurClients extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Our Clients Section -->
<section class="grey section">
    <div class="container">
        <!-- Section Title -->
        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h4>Our Clients</h4>
                    <p>Universities That Love Working With Us and Our Teachers</p>
                </div>
            </div>
        </div>

        <!-- Client Logos Slider -->
        <div class="row">
            <div class="client-logos-container">
                <div class="client-logos">
                    <div class="client-logo">
                        <img src="upload/school8.png" alt="Client 1" class="img-responsive img-thumbnail" aria-label="Client 1">
                    </div>
                    <div class="client-logo">
                        <img src="upload/school7.png" alt="Client 2" class="img-responsive img-thumbnail" aria-label="Client 2">
                    </div>
                    <div class="client-logo">
                        <img src="upload/school6.png" alt="Client 3" class="img-responsive img-thumbnail" aria-label="Client 3">
                    </div>
                    <div class="client-logo">
                        <img src="upload/school5.png" alt="Client 4" class="img-responsive img-thumbnail" aria-label="Client 4">
                    </div>
                    <div class="client-logo">
                        <img src="upload/school4.png" alt="Client 5" class="img-responsive img-thumbnail" aria-label="Client 5">
                    </div>
                    <div class="client-logo">
                        <img src="upload/school3.png" alt="Client 6" class="img-responsive img-thumbnail" aria-label="Client 6">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        `
    }
}
customElements.define('our-clients', OurClients)

// // Who we are 
// class WhoWeAre extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <!-- About Us Section -->
// <section class="grey section">
//     <!-- Image Section -->
//     <div class="row-fluid">
//         <div class="col-md-6 myimg">
//             <!-- Optional background image or content for 'myimg' can be added here -->
//         </div>
//     </div>

//     <!-- Main Content Section -->
//     <div class="container">
//         <div class="row">
//             <!-- Offset column for text content -->
//             <div class="col-md-6 col-md-offset-6">
//                 <div class="section-container nopadding">
//                     <!-- Rotating Text Section -->
//                     <div class="textrotate">
//                         <!-- Slider with information about the company -->
//                         <ul class="bxslider">
//                             <!-- Slide 1: WHO WE ARE -->
//                             <li>
//                                 <div class="big-title">
//                                     <p class="lead">Vivamus quis sapien cura</p>
//                                     <h3><span>WHO</span> WE ARE</h3>
//                                     <div class="border-title"></div>
//                                 </div>
//                                 <p>Phasellus nec dolor. Sed ornare semper ipsum. Sed pede orci volutpat sed congue vels gravida non lacus. Vivamus quis sed metus quisque gravida. Quisque blandit sem esed erat. Maecenas porttitor neque eu sem. Nullam lectus neque, blandit quis mattis quis varius eu eros. Vivamus ads metus. Mauris at tellus at sapien.</p>
//                                 <a href="#" class="btn btn-default" title="Learn more about us">Learn More</a>
//                             </li>

//                             <!-- Slide 2: WHAT WE DO -->
//                             <li>
//                                 <div class="big-title">
//                                     <p class="lead">Vivamus quis sapien cura</p>
//                                     <h3><span>WHAT</span> WE DO</h3>
//                                     <div class="border-title"></div>
//                                 </div>
//                                 <p>Phasellus nec dolor. Sed ornare semper ipsum. Sed pede orci volutpat sed congue vels gravida non lacus. Vivamus quis sed metus quisque gravida. Quisque blandit sem esed erat. Maecenas porttitor neque eu sem. Nullam lectus neque, blandit quis mattis quis varius eu eros. Vivamus ads metus. Mauris at tellus at sapien.</p>
//                                 <a href="#" class="btn btn-default" title="Request a quote">Get a Quote</a>
//                             </li>

//                             <!-- Slide 3: OUR MISSION -->
//                             <li>
//                                 <div class="big-title">
//                                     <p class="lead">Vivamus quis sapien cura</p>
//                                     <h3><span>OUR</span> MISSION</h3>
//                                     <div class="border-title"></div>
//                                 </div>
//                                 <p>Phasellus nec dolor. Sed ornare semper ipsum. Sed pede orci volutpat sed congue vels gravida non lacus. Vivamus quis sed metus quisque gravida. Quisque blandit sem esed erat. Maecenas porttitor neque eu sem. Nullam lectus neque, blandit quis mattis quis varius eu eros. Vivamus ads metus. Mauris at tellus at sapien.</p>
//                                 <a href="#" class="btn btn-default" title="Contact us for more information">Contact Us</a>
//                             </li>
//                         </ul>
//                     </div> <!-- End of textrotate -->
//                 </div> <!-- End of section-container -->
//             </div> <!-- End of column with offset -->
//         </div> <!-- End of row -->
//     </div> <!-- End of container -->
// </section>
//         `
//     }
// }
// customElements.define('who-we-are', WhoWeAre)

// Contact detailes
class ContactDetails extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Contact Details Section -->
<div class="col-md-3 col-sm-3 col-xs-12 content-widget">
    <div class="widget-title">
        <h4>Contact Details</h4>
        <hr>
    </div>

    <!-- Contact Information List -->
    <div class="contact-list">
        <ul class="contact-details">
            <!-- Website Link -->
            <li>
                <i class="fa fa-link" aria-hidden="true"></i>
                <a href="https://www.yoursite.com" target="_blank" rel="noopener noreferrer" title="Visit our website">www.yoursite.com</a>
            </li>
            <!-- Email Address -->
            <li>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <a href="mailto:info@yoursite.com" title="Email us">info@yoursite.com</a>
            </li>
            <!-- Phone Number -->
            <li>
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>+90 123 45 67</span>
            </li>
            <!-- Fax Number -->
            <li>
                <i class="fa fa-fax" aria-hidden="true"></i>
                <span>+90 123 45 68</span>
            </li>
            <!-- Physical Address -->
            <li>
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>INC 22 Elizabeth Str. Melbourne, Victoria 8777</span>
            </li>
        </ul>
    </div>
</div>
        `
    }
}
customElements.define('contact-details', ContactDetails)
