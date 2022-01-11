import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

//imports of pages and components
import Header from "./components/Header";
import Reviews from "./pages/Reviews";
import Review from "./pages/Review";
import Footer from "./components/Footer";
import NewReview from "./pages/NewReview";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Fragment>
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Reviews />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/reviews/:reviewId" element={<Review />} />
              <Route path="/newreview" element={<NewReview />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </>
      </Fragment>
    </Router>
  );
};
export default App;
