import Link from "next/link";
import { cookies } from "next/headers"

//export const dynamic = "force-dynamic"
export const dynamic = "auto";

/*const Services = async ({ searchParams}) => { */
const Services = async ({ searchParams }) => {
  /*const myCookies = await cookies();
  console.log(myCookies);*/
  //await searchParams;


  /*const search = await searchParams;
  console.log(search);*/
  console.log("Running Services Component");
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
};

export default Services;