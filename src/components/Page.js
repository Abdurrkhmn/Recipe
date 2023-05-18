import React from "react";
import photo from '../images/Nastya.jpeg'
import photo2 from '../images/Renata.jpeg'
import photo3 from '../images/Abdur.jpg'

function Page() {
  return (      

  <section className="py-10">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="team-card bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1">
        <img src={photo} alt="Team member photo" className="w-full rounded-t-lg"/>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Nastya</h3>
          <p className="text-gray-700 text-sm">Экономика орнанизаци</p>
        </div>
      </div>
      <div className="team-card bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1">
        <img src={photo3} alt="Team member photo" className="w-full rounded-t-lg"/>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Abdurrahman</h3>
          <p className="text-gray-700 text-sm">Цифровая Экономика</p>
        </div>
      </div>
      <div className="team-card bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1">
        <img src={photo2} alt="Team member photo" className="w-full rounded-t-lg"/>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Renata</h3>
          <p className="text-gray-700 text-sm">Экономика орнанизаци</p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default Page;
