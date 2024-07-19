import React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'The Gourmet Bistro',
      description: 'Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.',
      imgSrc: '/assets/image5.jpeg',
      reverse: false
    },
    {
      title: 'Urban Café',
      description: 'Elevating dining experiences with exquisite culinary creations that tantalize your taste buds and delight your senses.',
      imgSrc: '/assets/image3.jpeg',
      reverse: true
    },
    {
      title: 'Sea Breeze Diner',
      description: 'Bringing fresh flavors and ocean vibes to every meal, offering a seaside escape right at your table.',
      imgSrc: '/assets/image4.jpeg',
      reverse: false
    },
    {
      title: 'Spice Route',
      description: 'Embark on a journey of taste with our diverse, flavorful dishes that transport you to exotic destinations.',
      imgSrc: '/assets/image2.jpeg',
      reverse: true
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 brandPadding max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <h4
          data-aos="fade-down"
          className="text-3xl md:text-4xl lg:6xl font-bold mt-20">Restaurants For You</h4>
        <p
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-xl md:text-2xl lg:text-4xl mt-4 font-semibold text-[#f98222]">
          Discover your Restaurant
        </p>
      </div>

      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            key={index} className={`w-full flex ${feature.reverse ? 'max-sm:flex-col-reverse' : 'max-sm:flex-col'} gap-y-6 items-center justify-start sm:justify-between`}>
            {!feature.reverse && (
              <div className="w-full sm:w-[60%] flex flex-col max-sm:-center">
                <h4 className="mb-3 text-primary max-sm:text-center text-lg md:text-2xl font-semibold">
                  {feature.title}
                </h4>
                <p className="mb-4 full text-sm md:text-md lg:text-lg">
                  {feature.description}
                </p>
                <Button className="rounded-full w-12 h-12 bg-primary">
                  <Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' />
                </Button>
              </div>
            )}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="bg-primary w-[50%] h-[50%] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
              <img
                className="rounded-full w-full h-full scale-90 object-cover"
                src={feature.imgSrc}
                alt="restaurant"
              />
            </div>
            {feature.reverse && (
              <div className="w-full sm:w-[60%] flex flex-col">
                <h4 className="mb-3 text-primary max-sm:text-center text-lg md:text-2xl font-semibold">
                  {feature.title}
                </h4>
                <p className="mb-4 full text-sm md:text-md lg:text-lg">
                  {feature.description}
                </p>
                <Button className="rounded-full w-12 h-12 bg-primary">
                  <Icon className='w-[200px] h-[200px]' icon='ei:arrow-right' />
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button
        data-aos="fade-down"
        data-aos-delay="200"
        className="rounded-full w-[200px] h-[50px] bg-[#f2f2f2] border-2 text-[#f15a2a] border-primary p-4 mb-10 mt-6">
        See more
      </Button>
    </div>
  );
};

export default Features;
