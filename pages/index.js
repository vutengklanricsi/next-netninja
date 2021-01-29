import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>dormire cem cwe fjwefnlfklwfennwfeklwefő wel</p>
      <p>dormire cem cwe fjwefnlfklwfennwfeklwefő wel</p>
      <Link href="./ninjas"><a>See Ninja Listing</a></Link>
      <Footer />
    </div>
  );
}
