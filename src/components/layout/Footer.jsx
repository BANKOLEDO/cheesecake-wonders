
export default function Footer() {
  return (
    <footer className="w-full flex bg-red-900 flex-col space-y-2 text-primary-foreground pb-2">
        <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-center space-y-6 lg:space-y-0 text-primary-foreground py-6">
          <ul className="flex flex-row items-center justify-center gap-8">
            <li>
              <a href=""><img src="/images/facebook.svg" alt="facebook-icon"  className="icon-width"/></a>
            </li>
            <li>
              <a href=""><img src="/images/instagram.svg" alt="instagram-icon" className="icon-width"/></a>
            </li>
            <li>
              <a href=""><img src="/images/twitter.svg" alt="twitter-icon" className="icon-width"/></a>
            </li>
            <li>
              <a href=""><img src="/images/youtube.svg" alt="youtube-icon" className="icon-width"/></a>
            </li>
        </ul>
        <div className="text-center font-bold">
            <p className="text-xs xsm:text-sm md:text-lg">© 2025 Cheesecake Wonders. All rights reserved.</p>
        </div>
      </div>
      <p className="text-xs md:text-sm text-center mt-2 lg:mt-0">Built with &#10084; by <a href="https://x.com/dev_olabanks" target="blank">@dev_olabanks</a>.</p>
    </footer>
  );
}