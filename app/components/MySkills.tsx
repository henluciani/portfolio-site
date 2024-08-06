import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// Sample badges for demonstration
const badges = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  src: `/images/badge${index + 1}.png`, // Placeholder for badge images
  alt: `Badge ${index + 1}`
}));

const sections = [
  { title: 'Basics', badges },
  { title: 'Frameworks', badges },
  { title: 'Utilities', badges },
  { title: 'Styles', badges },
];

function Badge({ src, alt }) {
  return (
    <div className="p-2">
      <Image
        src={src}
        alt={alt}
        height={50}
        width={50}
        className="rounded border border-neutral-200 dark:border-neutral-700"
      />
    </div>
  );
}

function MySkills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section>
      <h2 className="mb-8 text-2xl font-medium tracking-tighter">My Skills</h2>
      <Slider {...settings}>
        {sections.map((section) => (
          <div key={section.title} className="p-4">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="grid grid-cols-3 gap-4">
              {section.badges.map((badge) => (
                <Badge key={badge.id} src={badge.src} alt={badge.alt} />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default MySkills;
