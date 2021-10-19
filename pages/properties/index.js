import Head from "next/head";
import Navbar from "../../components/Navbar";
import AllProperties from "../../components/AllProperties"
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
export default function Properties() {
  return (
    <div>
      <Head>
        <title>Properties | GG Investments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AllProperties />
      <Contact />
      <Footer />
    </div>
  );
}