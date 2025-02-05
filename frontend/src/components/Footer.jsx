import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <p className="text-balance text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <a
              href='https://www.linkedin.com/in/anusha-malladi-284222316/'
              target='_blank'
              className="font-medium underline underline-offset-4"
            >
              Anusha
            </a>
            . The source code is available on -{" "}
            <a
              href='https://github.com/manushakumars/netflix'
              target="_blank"
              rel='noreferrer'
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex-1 text-center md:text-right">
          <Link to="/about" className="font-medium underline underline-offset-4">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

