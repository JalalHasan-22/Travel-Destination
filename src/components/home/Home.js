import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

function Home({ jsonData }) {
  return (
    <>
      <Header />
      {
        jsonData.map((entry) => (
          <Tours key={entry.id} name={entry.name} imgSrc={entry.image} />
        ))

        /* <Tours data={jsonData} /> */
      }
      <Footer />
    </>
  );
}

export default Home;
