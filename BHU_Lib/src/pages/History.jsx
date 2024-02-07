import React, { useState } from 'react';
import {Header} from '../containers'; 
import './history.css'; 

const History = () => {

  return (
    <>
    <Header />
    <div className='history_container'>
      <span>HISTORY</span>
      <div className='history_slide'>
        <div className='history_content'>
          <p>Banaras Hindu University Libraries is one of the largest University Library System 
            in India. It germinated more than a century ago from a small but precious collection
             donated by Prof. P.K. Telang in the memory of his father Justice K.T. Telang in 
             1917 and housed in the Telang Hall of the Central Hindu College, Kamachha. 
             It was nurtured in its infancy by the renowned historian Sir Jadunath Sarkar as 
             first University Librarian.</p>
          <p>With the University taking shape at its present premises, the library was also 
            shifted in the year 1921 to the Central Hall of the Arts College (now Faculty of Arts)
            and then in 1941 to its present majestic building.</p>
          <p>Beginning with a small but precious donated collection, it grew by leaps and bounds 
            with generous donations by eminent personalities and scholars like Lala Sri Ram of 
            Delhi, Jamnalal Bajaj of Wardha, Roormal Goenka, Batuk Nath Sharma, Tagore family 
            collection, Nehru family collection, etc. amongst a score of others, apart from 
            regular purchase of the documents by the library.</p>
          <p>With this sound footings and background, the library took long strides during 60s and
            70s of twentieth century in its development and metamorphosed into a system of 
            libraries with the establishment of institute, faculty and departmental libraries 
            during the period.</p>
        </div>
        <div className='history_pics'>
          <img src={process.env.PUBLIC_URL + "/images/Gaekwad_Library_old_photo.jpg"} alt="Library old photo" />
        </div>
      </div>
      <div className='history_slide'>
        <div className='history_pics'>
          <img src={process.env.PUBLIC_URL + "/images/Gaekwad_Library_old_photo.jpg"} alt="Library old photo" />
        </div>
        <div className='history_content'>
          <p>BHU Library is proudly holding the legacy left behind by the world renowned library
            professionals. The legacy started with Sir Jadunath Sarkar, a great historian, 
            who was the first Librarian (hon.) of the university. Later on, during 1945-1947, 
            Dr. S R Ranganathan, widely referred to as father of library science was the 
            Librarian in BHU</p>
          <p>His most notable contributions to the field were his five laws of library science 
            and the development of the freely faceted classification system, the colon 
            classification. Prof. P N Kaula, who is amongst the most prolific authors of all 
            times in the library field internationally, was the Librarian in BHU during 
            1960-1972.</p>
        </div>
      </div>
    </div>
    </>
  );
  
};


export default History;
