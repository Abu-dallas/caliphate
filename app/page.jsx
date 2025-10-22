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
      <Form />
      {/* Schedule */}
      <section
        id="schedule"
        className="flex flex-col items-center justify-center py-6 text-rose-950"
      >
        {" "}
        <h2 className="text-3xl font-extrabold mb-12">
          3-Days Event Schedule
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3  mx-auto gap-12 w-full lg:w-[80%] px-4">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-rose-950 rounded text-center p-2 text-white">
              📅 Day 1 – October 30, 2025
            </h3>
            <ul className="space-y-2">
              {" "}
              <li className="px-2 border-l-6 border-rose-950">
                Opening Ceremony & Welcome Address
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Launch of the Historical Exhibition
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Keynote Address: “100 Years of Aviation in Kano”
              </li>
              <li className="px-2">lecture on:</li>
              <li className="px-2 border-l-6 border-rose-950">
                Student Workshops & Demonstrations
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Cultural Performances
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Kids Kite Competition
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
                Student Workshops & Demonstrations
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Panel Session: “The Future of Aviation in Nigeria”
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Industry Innovation Showcase
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Cultural Performances
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
                Static Aircraft Display & Airshow
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Pioneer Recognition Ceremony
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Business & Investment Forum
              </li>
              <li className="px-2 border-l-6 border-rose-950">Competitions</li>
              <li className="px-2 border-l-6 border-rose-950">
                Cultural Performances
              </li>
              <li className="px-2 border-l-6 border-rose-950">
                Closing Ceremony & Farewell
              </li>
            </ul>
          </div>{" "}
        </div>
        <div className="md:w-[80%] flex flex-col items-center px-2 pl-3 mt-8 justify-center mb-6">
          <h2 id="exhibitors" className="text-3xl text-rose-950 font-bold">
            Exhibitors
          </h2>
          <Image
            src="/exhibitors.png"
            alt="logo image"
            width={2000}
            height={2000}
            className="object-contain "
          />
        </div>
      </section>
      {/* Form */}

      <div className="flex w-full items-center justify-center flex-col px-3">
        <div className="md:w-[70%]  flex flex-col items-center justify-center">
          <h2 id="organizers" className="text-3xl text-rose-950 font-bold">
            Organized By:
          </h2>
          <Image
            src="/organized.png"
            alt="logo image"
            width={2000}
            height={2000}
            className=""
          />
        </div>

        <div className="md:w-[60%] flex items-center mt-18 flex-col justify-center mb-4">
          <h2 id="organizers" className="text-3xl text-rose-950 font-bold mb-2">
            Supported By:
          </h2>
          <Image
            src="/SUPPORTERS.png"
            alt="logo image"
            width={2000}
            height={2000}
            className=""
          />
        </div>
        <div className="md:w-[60%] flex items-center mt-18 flex-col justify-center mb-12">
          <h2 id="sponsors" className="text-3xl text-rose-950 font-extrabold">
            Our Sponsors
          </h2>
          <Image
            src="/Sponsors.PNG"
            alt="logo image"
            width={2000}
            height={2000}
            className="h-[100px] w-[300px] md:h-[150px] md:w-[400px]"
          />
        </div>
      </div>
      {/* <section className="py-20 text-slate-800 text-center flex flex-col items-center justify-center w-full">
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
      </section>*/}

      <div className="flex items-center justify-center flex-col px-3">
        <div className="md:w-[80%] flex flex-col items-center justify-center">
          <h2 id="updates" className="text-3xl text-rose-950 font-bold">
            Latest Updates
          </h2>
          <p className="text-xl text-slate-800 mt-2 text-center">
            Stay tuned for keynote speaker announcements, exhibitor listings,
            and program details as the celebration draws nearer.
          </p>
        </div>
        <div className="md:w-[80%] flex flex-col items-center mt-6 justify-center">
          <h2 id="endorsements" className="text-3xl text-rose-950 font-bold">
            News
          </h2>
          <p className="text-xl text-slate-800 mt-2 text-center">
            Supported by the Nigerian Aviation Authority, Kano State Government,
            and international aviation organizations.
          </p>
        </div>
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="md:w-[80%] flex flex-col items-center justify-center px-2 pl-3">
          <h2 id="updates" className="text-3xl text-rose-950 font-bold mt-3">
            About Organisers
          </h2>
          <p className="text-xl text-slate-800 mt-2 text-center">
            <span className="font-semibold">
              Caliphate Aviation Training Center Kano
            </span>{" "}
            is equipped to deliver professional aviation courses and management
            support services, both independently and in collaboration with
            global partners. Moreover, Caliphate Aviation Training Center is a
            subsidiary of Caliphate Aviation Handling Services, a premier
            aviation service provider specializing in travel, tourism, and
            consultancy. The company operates a modern aviation training
            facility. Through its extensive industry network, the organization
            maintains strong affiliations with reputable institutions, including
            the African Aviation Aerospace University (AAAU) and the Nigerian
            College of Aviation Technology (NCAT). These collaborations, coupled
            with our certification by the Nigerian Civil Aviation Authority
            (NCAA) (NCAA/ATR/AS/ATL.023), underscore our commitment to
            excellence, adherence to regulatory standards, and capability to
            deliver high-quality aviation education and services.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col px-3">
        <div
          id="contact"
          className="md:w-[80%] px-4 flex flex-col md:items-center mt-6 justify-center"
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
          </p>
          <div className="text-md flex gap-2 max-sm:flex-col text-slate-800 mt-2 font-bold">
            Phone:{" "}
            <a
              className="text-blue-500 pr-2 border-r  border-slate-800"
              href="tel:+2348165126814 "
            >
              +234-816-512-6814
            </a>
            <a
              className="text-blue-500 pr-2 border-r border-slate-800"
              href="tel:+2347036336386"
            >
              +234-703-633-6386
            </a>
            <a className="text-blue-500" href="tel:+2348053559972 ">
              +234-805-355-9972
            </a>
          </div>
          <p className="text-sm italic mt-2">
            Join us in Celebrating a Century of Aviation History, Innovation,
            and Progress, as we Honor the First Aircraft Landing in Nigeria at
            Kano.
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
    desc: " A landmark exhibition narrating the historical background of the first aircraft landing in Nigeria at Kano, showcasing archival materials, artifacts, and stories of this defining moment in aviation history. ",
  },
  {
    image: "/glr3.JPG",
    title: "Symposium",
    desc: "the challenges and way forward in banking and travel, including how exchange rates affect travel and the repatriation challenges faced by airlines. ",
  },
  {
    image: "/glr1.JPG",
    title: "Student Workshops",
    desc: "Interactive and engaging workshops designed to inspire students from primary to tertiary levels, nurturing the next generation of aviators, engineers, and aerospace professionals.",
  },
  {
    image: "/glr7.jpg",
    title: "Honoring Pioneers",
    desc: "A special recognition ceremony celebrating Kano and Nigerian aviation heroes and innovators whose vision and dedication paved the way for aviation growth in Nigeria and West Africa. ",
  },
  {
    image: "/jirage.jpg",
    title: "Static Aircarft Display",
    desc: "A ground exhibition of aircraft, enabling attendees to explore real airplanes up close and interact directly with aviation professionals. ",
  },
  {
    image: "/glr5.JPG",
    title: "Airshow",
    desc: "Thrilling aerial demonstrations and aerobatics featuring military jets and private aircraft symbolizing a century of aviation excellence.",
  },
  {
    image: "/glr2.JPG",
    title: "Panel Discussion",
    desc: "Interactive sessions with executives, regulators, historians, pilots, and investors, exploring policy, innovation, and the strategic future of aviation in Nigeria, west Africa, Africa and beyond.",
  },
  {
    image: "/glr4.JPG",
    title: "Competition",
    desc: (
      <span>
        A unique celebration of creativity and community through unique engaging
        categories:
        <span className="font-semibold ml-2">
          Innovative Thinking & Kids’ Kite Flying
        </span>
      </span>
    ),
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
