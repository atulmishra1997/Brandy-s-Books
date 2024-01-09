import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark>
    <div className="w-full px-4 lg:px-24">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title title="Company" />
          <Footer.LinkGroup col>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/shop">Shop</Footer.Link>
            <Footer.Link href="/shop">Sell Your Book</Footer.Link>
            <Footer.Link href="/blog">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="help center" />
          <Footer.LinkGroup col>
            <Footer.Link href="https://www.linkedin.com/in/atulmishra1997/">LinkedIn</Footer.Link>
            <Footer.Link href="https://twitter.com/brandys_vines1">Twitter</Footer.Link>
            <Footer.Link href="https://www.facebook.com/profile.php?id=100091441811251">Facebook</Footer.Link>
            <Footer.Link href="mailto:atulmishra1997@hotmail.com">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="download" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">iOS</Footer.Link>
            <Footer.Link href="#">Android</Footer.Link>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between rounded-md">
        <Footer.Copyright href="#" by="Atul Mishra™" year={2023} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.facebook.com/profile.php?id=100091441811251" icon={BsFacebook} />
          <Footer.Icon href="https://www.instagram.com/atul_mishra1997/" icon={BsInstagram} />
          <Footer.Icon href="https://twitter.com/brandys_vines1" icon={BsTwitter} />
          <Footer.Icon href="https://github.com/atulmishra1997/" icon={BsGithub} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter