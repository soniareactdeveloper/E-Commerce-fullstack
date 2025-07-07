const Footer = () => {
  return (
    <footer className="bg-white px-4 md:px-16 py-10 border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Brand and Address */}
        <div className="max-w-xs text-[#9F9F9F] text-sm">
          <h2 className="text-black font-bold text-xl mb-4">Funiro.</h2>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-10 text-sm">
          <div>
            <h4 className="text-[#9F9F9F] font-medium mb-4">Links</h4>
            <ul className="space-y-2 font-semibold text-black">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[#9F9F9F] font-medium mb-4">Help</h4>
            <ul className="space-y-2 font-semibold text-black">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full sm:w-[250px]">
            <h4 className="text-[#9F9F9F] font-medium mb-4">Newsletter</h4>
            <div className="flex border-b border-black">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 bg-transparent outline-none text-black text-sm placeholder:text-[#9F9F9F] pb-1"
              />
              <button className="text-black text-xs font-bold uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-sm text-[#9F9F9F] border-t border-gray-200 pt-4">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
