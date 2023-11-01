import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
<div className="flex h-1/2 sm:h-auto justify-between items-center p-4 sm:p-6 lg:p-8">
<div className="h-1/2 sm:h-auto sm:w-1/2 lg:w-1/2 relative">
    <Image
      src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w-1260&h-750&dpr-2"
      alt=""
      width={1260}
      height={750}
      className="object-cover w-full h-full"
    />
  </div>  <div className="h-1/2 sm:h-auto sm:w-1/2 lg:w-1/2 px-4 sm:px-6 lg:px-8 mt-4 sm:mt-0">
    <div className="mb-4 sm:mb-6 lg:mb-8">
      <h1 className="text-2xl font-bold">Who Are We?</h1>
      <p>
        Welcome to Chikitsalay, your trusted companion on your journey to better health. We are passionate and committed to improving healthcare accessibility, information, and personalization. We are passionate about enhancing healthcare accessibility, information, and personalization &amp; helping you find the nearest health centers when you need them the most.
      </p>
    </div>
    <div className="mb-4 sm:mb-6 lg:mb-8">
      <h1 className="text-2xl font-bold">Our Vision</h1>
      <p>
        At Chikitsalay, we envision a world where healthcare is a fundamental right accessible to all through technology and innovation. Our platform empowers you to make informed health decisions.
      </p>
    </div>
    <div>
      <h1 className="text-2xl font-bold">Our Values</h1>
      <p>
        Accessibility: We're dedicated to universal healthcare access, irrespective of location or status.
        Accuracy: We prioritize accuracy in our disease predictions to provide users with reliable information.
        Empowerment: Individuals can take control of their health with the tools and information they need.
        Privacy: Privacy and data security are paramount to us. We adhere to strict privacy and data protection policies to ensure your information is safe and confidential.
      </p>
    </div>
    <div className="mt-4">
      <h1 className="text-2xl font-bold">What We Do?</h1>
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Symptom-Based Disease Prediction</h1>
        <p>
          Chikitsalay allows users to input their symptoms.
          Then feeds the info into a model based on a sophisticated algorithm.
          It then predicts the most probable diseases associated with those symptoms.
          This feature can provide valuable insights into your health and help you take appropriate actions.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Nearby Health Centers Map</h1>
        <p>
          Chikitsalay's map feature uses your location data to get your location.
          It then uses it to display nearby health centers, hospitals, clinics, and pharmacies.
          This makes it easy for you to find the closest healthcare facilities.
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default About;
