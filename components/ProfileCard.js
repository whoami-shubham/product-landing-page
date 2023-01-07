import React from "react";

export default function ProfileCard({
  name = "Shooting Stars",
  avatar = "https://mdbootstrap.com/img/new/avatars/6.jpg",
  about = "",
  current = "SWE",
  companies = ["Apple", "Google", "Microsoft", "Coinbase"],
  experties = ["Backend", "Distributed system"],
  charge = "10$/hr",
  facebook = "#",
  instagram = "#",
  linkedin = "#",
  twitter = "#",
  lang = ['Hindi', 'Eng'],
  firstConsultationFree = ""
}) {
  return (
    <div className="mb-6 lg:mb-0">
      <div className="bg-white block rounded-lg shadow-lg">
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-h-[300px]">
          <img src={avatar} className="w-full rounded-t-lg" />
        
          <svg
            className="absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ left: 0, bottom: 0 }}
          >
            <path
              fill="#fff"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="p-6 max-h-[200px] overflow-y-scroll">
          <h5 className="text-lg font-bold mb-2 text-gray-700">{name}</h5>
          <h6 className="font-medium text-blue-600 mb-4">{current}</h6>
          <ul className="flex justify-start mt-4 space-x-4">
            {facebook && (
              <li>
                <a href={facebook} className="text-[#39569c]  hover:text-white">
                  <i
                    className={`fa-brands fa-facebook px-1 text-[#4267B2] text-[20px]`}
                  />
                </a>
              </li>
            )}
            {instagram && (
              <li>
                <a
                  href={instagram}
                  className="text-[#c32aa3]  hover:text-white"
                >
                  <i
                    className={`fa-brands fa-instagram px-1 text-[#c32aa3] text-[20px]`}
                  />
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:text-white text-gray-300"
                >
                  <i
                    className={`fa-brands fa-linkedin px-1 text-[#0a66c2] text-[20px]`}
                  />
                </a>
              </li>
            )}
            {twitter && (
              <li>
                <a href="#" className="text-[#1da1f2] hover:text-white">
                  <i
                    className={`fa-brands fa-twitter px-1 text-[#1da1f2] text-[20px]`}
                  />
                </a>
              </li>
            )}
          </ul>
          {
            (companies &&
              companies.length > 0) &&
            <h3 className="text-gray-700">Worked in : <span className='text-green-500'>
              {companies.join(" , ")}
            </span> </h3>
          }
          {
            (experties &&
              experties.length > 0) &&
            <h3 className="text-gray-700">Area of Experties : <span className='text-green-500'>
              {experties.join(" , ")}
            </span> </h3>
          }
          <h3 className="text-gray-700">Consultancy fee : <span className="text-green-500">{charge}</span> </h3>
          <h3 className="text-indigo-500">{firstConsultationFree}</h3>
          {
            (lang &&
              lang.length > 0) &&
            <h3 className="text-gray-700">Languages : <span className='text-green-500'>
              {lang.join(" , ")}
            </span> </h3>
          }
          <p className="text-gray-700">{about}</p>
        </div>
      </div>
    </div>
  );
}
