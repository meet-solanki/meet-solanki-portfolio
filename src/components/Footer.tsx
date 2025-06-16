
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-portfolio-primary mb-4">MS</div>
          <p className="text-gray-400 mb-6">
            BCA Student & Aspiring Full Stack Developer passionate about technology and learning.
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Meet Solanki. Built with ❤️ using Lovable
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
