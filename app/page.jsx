import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Gallery from "@/components/Gallery";
import HeaderWrapper from "@/components/HeaderWrapper";
import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderWrapper />
      {/*  <div className="p-4 text-center max-sm:p-8 max-sm:pt-18 flex items-center bg-gradient-to-r from-cyan-100 to-rose-100 justify-center flex-col">
        <Image
          src="/plane3.png"
          alt="plane image"
          width={2000}
          height={2000}
          className="w-150 ml-8 -mt-4 h-100"
        />
        <h1 className="text-4xl -mt-40 font-extrabold textmaroon">
          100 YEARS FLIGHT{" "}
          <span className="max-md:text-center ">CELEBRATION</span>
        </h1>{" "}
        <h3 className="text-2xl font-bold text-rose-950">
          <span className="italic">Hosted by</span>{" "}
          <b>CALIPHATE AVIATION SERVICES</b>
        </h3>{" "}
        <p className="italic font-semibold textmaroon">
          Commemorating the first aircraft landing in Kano, Nigeria – 1st
          November 1925
        </p>{" "}
        <p className="text-xl  font-bold textmaroon">
          Grand Opening: 30th October 2025
        </p>
      </div> */}
      <div className=" bg-gradient-to-r overflow-hidden h-screen from-cyan-200 flex items-center justify-center flex-col lg:flex-row lg:gap-14 to-rose-200 pb-37">
        <Image
          src="/hero3.png"
          alt="100 logo"
          width={2000}
          height={2000}
          className="w-70 lg:w-100 lg:h-80 object-contain h-70 mt-24"
        />

        <div className="mt-12">
          <Timer />
        </div>
      </div>
      {/* Highlight */}
      <section className="py-20 text-slate-800 text-center">
        <h2 className="text-3xl font-extrabold mb-12">Event Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4 max-w-6xl mx-auto lg:w-[80%] items-center justify-center flex-col">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-300 flex overflow-hidden items-center justify-center flex-col  w-full  h-100 rounded-2xl"
            >
              <Image
                src={item.image}
                alt="image"
                width={2000}
                height={2000}
                className="w-full h-[70%] object-cover -mt-8"
              />
              <div className="p-4">
                <h3
                  id="highlights"
                  className="text-2xl font-bold mb-3 flex items-center justify-center gap-2"
                >
                  {item.title}
                </h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Schedule */}
      <section
        id="schedule"
        className="flex flex-col items-center justify-center py-6 text-rose-950"
      >
        {" "}
        <h2 className="text-3xl font-extrabold mb-12">
          3-Days Event Schedule
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mx-auto gap-12 w-full lg:w-[80%] px-4">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-rose-950 rounded text-center p-2 text-white">
              📅 Day 1 – October 30, 2025
            </h3>
            <ul className="space-y-2 font-semibold">
              {" "}
              <li className="px-2 border-l-6 border-rose-950">
                Opening Ceremony & Welcome Address Historical Exhibition Launch
                Keynote: “100 Years of Aviation in Kano”
              </li>
            </ul>
          </div>{" "}
          <div>
            <h3 className="font-bold text-xl mb-4 bg-rose-950 rounded text-center p-2 text-white">
              📅 Day 2 – October 31, 2025
            </h3>
            <ul className="space-y-2">
              {" "}
              <li className="px-2 border-l-6 border-rose-950">
                Student Workshops & Demonstrations Panel: “Future of Aviation in
                Nigeria Industry Innovation Showcase Cultural Performance
              </li>
            </ul>
          </div>{" "}
          <div>
            <h3 className="font-bold text-xl mb-4 bg-rose-950 rounded text-center p-2 text-white">
              📅 Day 3 – November 1, 2025
            </h3>
            <ul className="space-y-2">
              {" "}
              <li className="px-2 border-l-6 border-rose-950">
                Static Aircraft Display & Airshow Pioneer Recognition Ceremony
                Business & Investment Forum Closing Ceremony & Fireworks
              </li>
            </ul>
          </div>{" "}
        </div>
      </section>
      {/* Form */}
      <div id="register">
        <Form />
      </div>

      <div className="flex w-full items-center justify-center flex-col px-3">
        <div className="md:w-[80%] flex flex-col items-center justify-center">
          <h2 id="organizers" className="text-3xl text-rose-950 font-bold">
            Organized By:
          </h2>
          <Image
            src="/logo3.png"
            alt="logo image"
            width={2000}
            height={2000}
            className="w-80 h-20 lg:w-150 lg:h-30"
          />
        </div>

        <div className="w-full flex items-center mt-18 flex-col justify-center">
          <h2 id="organizers" className="text-3xl text-rose-950 font-bold">
            Supported By:
          </h2>
          <Image
            src="/supported.png"
            alt="logo image"
            width={2000}
            height={2000}
            className="w-75 h-18 lg:w-150 lg:h-30"
          />
        </div>
      </div>
      <section className="py-20 text-slate-800 text-center flex flex-col items-center justify-center w-full">
        <h2
          id="sponsors"
          className="text-3xl text-rose-950 font-extrabold mb-12"
        >
          Our Sponsors
        </h2>
        <div className="grid max-sm:grid-cols-1 grid-cols-3 px-4 gap-4 max-w-6xl mx-auto lg:w-[80%] place-items-center">
          {sponsor.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-300 flex items-center justify-center flex-col  w-full lg:w-[250px] h-65 rounded-2xl p-4"
            >
              {" "}
              <span className="text-6xl mb-2">{item.icon}</span>
              <span></span>
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                {item.title}
              </h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-center flex-col px-3">
        <div className="md:w-[80%] flex flex-col items-center justify-center">
          <h2 id="updates" className="text-3xl text-rose-950 font-bold">
            Latest Updates
          </h2>
          <p className="text-xl text-slate-800 mt-2">
            Stay tuned for keynote announcements, exhibitor lists, and program
            details.
          </p>
        </div>
        <div className="md:w-[80%] flex flex-col items-center mt-6 justify-center">
          <h2 id="endorsements" className="text-3xl text-rose-950 font-bold">
            News
          </h2>
          <p className="text-xl text-slate-800 mt-2">
            Supported by the Nigerian Aviation Authority, Kano State Government,
            and international aviation organizations.
          </p>
        </div>
      </div>
      <div id="gallery">
        <Gallery />
      </div>

      <div className="flex items-center justify-center flex-col px-3">
        <div className="md:w-[80%] flex flex-col items-center justify-center">
          <h2 id="exhibitors" className="text-3xl text-rose-950 font-bold">
            Exhibitors
          </h2>
          <p className="text-xl text-slate-800 mt-2 leading-relaxed">
            Global aviation companies, innovators, and institutions showcasing
            their contributions to aviation history and future.
          </p>
        </div>
        <div
          id="contact"
          className="md:w-[80%] px-4 flex flex-col items-center mt-6 justify-center"
        >
          <h2 className="text-3xl text-rose-950 font-bold">Contact Us</h2>
          <p className="text-md text-slate-800 mt-2 font-bold">
            Email:{" "}
            <a
              className="text-blue-500"
              href="maito:nigeriafirstaircraftlanding100@gmail.com"
            >
              nigeriafirstaircraftlanding100@gmail.com
            </a>
            | Phone:{" "}
            <a className="text-blue-500" href="tel:+2347036336386">
              +234-7036336386
            </a>
          </p>
          <p className="text-md text-slate-800 mt-2 font-bold">
            Email:{" "}
            <a
              className="text-blue-500"
              href="maito:nigeriafirstaircraftlanding100@gmail.com"
            >
              info@caliphateaviation.com
            </a>
            | Phone:{" "}
            <a className="text-blue-500" href="tel:+2347036336386">
              +234-800-123-4567
            </a>
          </p>
          <p className="text-sm italic">
            First Aircraft Landing in Nigeria at Kano 100th Year Anniversary
            October 30th - November 1st, 2025 Powered by Caliphate Aviation
            Services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const cards = [
  {
    image: "/glr6.JPG",
    title: "Historical Exhibition",
    desc: " Historical background of the first aircraft landing in Nigeria at Kano. ",
  },
  {
    image: "/glr3.JPG",
    title: "Symposium",
    desc: " Aviation industry leaders’ discussion on aviation's role in economic growth, innovation, and Nigeria's global connectivity.  ",
  },
  {
    image: "/glr1.JPG",
    title: "Student Workshops",
    desc: "Interactive learning experiences for students, inspiring the next generation of aviators and aerospace professionals. ",
  },
  {
    image: "/glr7.jpg",
    title: "Honoring Pioneers",
    desc: " Recognizing Kano's aviation heroes and innovators for their historical contributions. ",
  },
  {
    image: "/jirage.jpg",
    title: "Static Aircarft Display",
    desc: " An open-air exhibition featuring real aircraft positioned on the ground for exploration and engagement with aviation professionals. ",
  },
  {
    image: "/glr5.JPG",
    title: "Airshow Live Aerial Performance",
    desc: "  Thrilling aerial maneuvers and aerobatics by military jets, private planes, and aerobatic teams. ",
  },
  {
    image: "/glr2.JPG",
    title: "Panel Discussion Aviation Insights",
    desc: "Dialogue with executives, regulators, historians, pilots, and investors exploring innovation, policy, and the future of aviation. ",
  },
  {
    image: "/glr4.JPG",
    title: "Competition",
    desc: "Unique opportunity to compete in three distinct categories: Kids Kiting, Cake Baking, and Inventive Thinking.",
  },
];
const sponsor = [
  {
    icon: "🏢",
    title: "Sponsor 1",
    desc: "Caliphate Aviation Handling Services",
  },
  {
    icon: "🏢",
    title: "Sponsor 2",
    desc: "Aglowair",
  },
  {
    icon: "🏢",
    title: "Sponsor 3",
    desc: "Aglow Aviation Support Services",
  },
];
