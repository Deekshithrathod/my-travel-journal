import React from "react";

// {
//     title: "Mount Fuji",
//     location: "Japan",
//     googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//     startDate: "12 Jan, 2021",
//     endDate: "24 Jan, 2021",
//     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//     imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
// }
export default function TravelCard(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.item;
  // console.log(props)
  return (
    <div className="card">
      <img src={imageUrl} className="card--image" />
      <div className="card--info">
        <div className="card--info--top">
          <img
            src="https://via.placeholder.com/10/FF0000/"
            alt="pin icon"
            className="card--icon"
          />
          <h4 className="card--location">{location}</h4>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card--title">{title}</div>
        <div className="card--duration">
          {startDate}-{endDate}
        </div>
        <p className="card--description">{description}</p>
      </div>
    </div>
  );
}
