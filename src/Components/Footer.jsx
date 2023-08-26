import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineCodepen, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <footer class="bg-red-50">
      <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-red-600">
            <i className="fa-solid fa-f text-3xl"></i>
          </div>

          <ul class="mt-8 flex justify-start items-center gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="https://faried-elrewany-portfolio.netlify.app/"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">Portfolio</span>
                Personal Website
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/faried-elrewany/"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">LinkedIn</span>
                <AiFillLinkedin />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/faried-elrewany"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">GitHub</span>
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                href="https://codepen.io/faried-elrewany"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:opacity-75"
              >
                <span class="sr-only">codePen</span>
                <AiOutlineCodepen className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p class="font-medium text-gray-900">Services</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  1on1 Coaching
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Company Review
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  HR Consulting
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-gray-900">Company</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  About
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Meet the Team
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-gray-900">Helpful Links</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-medium text-gray-900">Legal</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Accessibility
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Returns Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Refund Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
