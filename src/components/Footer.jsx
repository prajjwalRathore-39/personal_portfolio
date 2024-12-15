const Footer = () => {
  return (
    <>
      <div className="flex justify-between py-5 bg-gray-100 px-72">
        <div>
          <p>
            @2024 Prajjwal Singh Rathore <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="space-x-5">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacypolicy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/licensing" className="hover:underline">
            Licensing
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
