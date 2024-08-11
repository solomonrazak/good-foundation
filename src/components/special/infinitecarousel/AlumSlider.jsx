import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        description: "If Good Foundation was not in my life, I would be a completely different person. They taught me how to be independent, how to go after things I believe in. I don't think I will have those things in my life if not for that school",
        name: "Solomon Razak",
        year: "Good Foundation '13 "
    },
    {
        description: "Having access to amazing teachers and amazing professionals makes such a difference in letting students find their voice",
        name: "Julius Mantey",
        year: "Good Foundation '09 "
    },
    {
        description: "To have this perspective and mode of thinking really sheds new light onto topics that we've looked at in the same way for a very long time",
        name: "Stephen Kyei",
        year: "Good Foundation '11 "
    },
    {
        description: "Having access to amazing teachers and amazing professionals makes a difference and letting students find their voice",
        name: "Stephen Kyei",
        year: "Good Foundation '12 "
    },
    {
        description: "Good Foundation was really one of the greatest factors in who I am now. There is really no other way to put it. I have been places, I've met people and experienced things, seen technology and had lots of exposure. I hope that the message, the community and the vision continue to grow and inspire across all works of life.",
        name: "Emmanuel Bayor",
        year: "Good Foundation '10 "
    },
    
]

const AlumSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Adjust this value for tablet screens if needed
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                }
            },
            {
                breakpoint: 768, // Small screen (mobile) breakpoint
                settings: {
                    slidesToShow: 1, // Show 1 slide on small screens
                }
            }
        ]
    
    }

  return (
    <div className='w-full px-5 py-10 bg-slate-100'>
        <h1 className='text-[35px] font-medium md:font-normal md:text-5xl text-start text-[#4ADEDE] pl-4 pt-10'>Students & Alumni Testimonies</h1>
        
        <div className='mt-5'>
        <Slider {...settings}>
            {data.map((d) => (
                <div className="p-5" key={d.name}>
                    <p className="text-blue-950 italic text-[23px] my-5">{d.description}</p>
                    <p className='font-medium text-[18px] text-teal-950'>-{d.name}</p>
                    <p className="text-[hsl(180,80%,61%)] text-[19px]">{d.year}</p>

                </div>
            ))}
            </Slider>

        </div>
    </div>
  )
}

export default AlumSlider;