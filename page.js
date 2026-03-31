import Header from "../../../vite-project/src/components/Header";
import ServiceItem from "../../../vite-project/src/components/ServiceItem";
import ServiceList from "../../../vite-project/src/components/ServiceList";

const Services = () => {
  const services = [
    "Web Development",
    "Mobile App Development",
    "Consulting Services",
    "Digital Marketing",
  ];

  return (
    <>
      <Header />
      <div>
        <h1>Our Services</h1>
        <ServiceList>
          {services.map((service) => (
            <ServiceItem key={service} serviceName={service} />
          ))}
        </ServiceList>
      </div>
    </>
  );
};

export default Services;