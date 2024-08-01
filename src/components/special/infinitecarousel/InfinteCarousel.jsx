import React from 'react';
import presec from '../../../assets/images/schools/presec.png';
import aburi from '../../../assets/images/schools/aburi.png';
import adisadel from '../../../assets/images/schools/adisadel.png';
import botwe from '../../../assets/images/schools/botwe.png';
import ksts from '../../../assets/images/schools/ksts.png';
import owass from '../../../assets/images/schools/owass.png';
import prempeh from '../../../assets/images/schools/prempeh.png';
import peters from '../../../assets/images/schools/peters.png';
import roses from '../../../assets/images/schools/roses.png';
import thomas from '../../../assets/images/schools/thomas.png';
import accragirls from '../../../assets/images/schools/accragirls.png';
import wesleygirls from '../../../assets/images/schools/wesleygirls.png';
import louis from '../../../assets/images/schools/louis.png';

const InfinteCarousel = () => {
    const images = [aburi, accragirls, ksts, presec, owass, adisadel, roses, botwe, louis, prempeh, thomas, wesleygirls, peters];
  return (
    <div>
        <div>
            <ul className="flex space-x-4">
                {images.map((image, index) => (
                    <li key={index} className="inline-block">
                        <img src={image} alt={`school ${index + 1}`} className="h-48 w-auto"/>

                    </li>
                ))}

            </ul>
        </div>
    </div>
  )
}

export default InfinteCarousel;