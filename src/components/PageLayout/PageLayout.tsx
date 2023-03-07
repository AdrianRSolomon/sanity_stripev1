import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mx-auto px-2 py-6 relative ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
