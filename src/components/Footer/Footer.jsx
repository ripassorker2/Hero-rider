import React from "react";

const Footer = () => {
   return (
      <footer class="relative bg-blueGray-200 pt-8 pb-6 bg-gray-900 text-gray-100">
         <div class="px-4 py-5 mx-auto max-w-screen-xl w-full ">
            <div class="flex flex-wrap text-left lg:text-left">
               <div class="w-full lg:w-6/12 ">
                  <h4 class="text-3xl fonat-semibold text-blueGray-700">
                     Let's keep in touch!
                  </h4>
                  <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                     Find us on any of these platforms, we respond 1-2 business
                     days.
                  </h5>
               </div>
               <div class="w-full lg:w-6/12 px-4">
                  <div class="flex flex-wrap items-top mb-6">
                     <div class="w-full lg:w-4/12 px-4 ml-auto">
                        <span class="block uppercase  text-sm font-semibold mb-2">
                           Useful Links
                        </span>
                        <ul class="list-unstyled">
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://www.creative-tim.com/presentation?ref=njs-profile"
                              >
                                 About Us
                              </a>
                           </li>
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://blog.creative-tim.com?ref=njs-profile"
                              >
                                 Blog
                              </a>
                           </li>
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://www.github.com/creativetimofficial?ref=njs-profile"
                              >
                                 Github
                              </a>
                           </li>
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                              >
                                 Free Products
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div class="w-full lg:w-4/12 px-4">
                        <span class="block uppercase  text-sm font-semibold mb-2">
                           Other Resources
                        </span>
                        <ul class="list-unstyled">
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                              >
                                 MIT License
                              </a>
                           </li>
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://creative-tim.com/terms?ref=njs-profile"
                              >
                                 Terms &amp; Conditions
                              </a>
                           </li>
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://creative-tim.com/privacy?ref=njs-profile"
                              >
                                 Privacy Policy
                              </a>
                           </li>
                           <li>
                              <a
                                 class="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                                 href="https://creative-tim.com/contact-us?ref=njs-profile"
                              >
                                 Contact Us
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <hr class="my-3 " />
            <div class="flex flex-wrap items-center md:justify-between justify-center">
               <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                  <div class="text-sm  font-semibold py-1">
                     Copyright © 2023 Hero Rider by Ripas Sorker Rfiat .
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
