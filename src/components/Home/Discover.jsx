import React from "react";

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center">Discover</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg   cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images\bades.jpg"
            alt=""
          />
          <div>
            <h2 className="font-bold">bades</h2> 
          </div>
          <p className="text-sm">
            Bades is a beautiful beach located near the city of Al Hoceima in northern Morocco. The beach is known for its clear blue waters, soft white sand, and stunning mountain views. It is a popular destination for swimming, sunbathing, and water sports such as surfing and jet skiing. The area around the beach is also home to a number of restaurants and cafes where visitors can enjoy local cuisine and refreshments. Overall, Plage de Bades is a great place to relax and soak up the natural beauty of the Moroccan coast.
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="font-bold">Gîte d'Etape Tawada</h2>
          <p className="text-sm">
          Gîte d'Etape Tawada is a mountain lodge and cultural center located in the village of Taghia, in the High Atlas Mountains of Morocco. The lodge provides a comfortable and rustic accommodation for hikers and adventurers exploring the nearby Todra Gorge and other natural attractions in the area. In addition to its lodging facilities, the center features a museum dedicated to showcasing the rich Berber culture of the region, including traditional textiles, handicrafts, and musical instruments. Visitors can enjoy the stunning mountain scenery and immerse themselves in the vibrant local culture, making Gîte d'Etape Tawada a perfect destination for those seeking an authentic Moroccan adventure.
          </p>
          <img
            className="drop-shadow-2xl  border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images\taghia.jpg"
            alt=""
          />
        </div>
      </div>

      

     

    </div>
  );
};

export default Discover;
