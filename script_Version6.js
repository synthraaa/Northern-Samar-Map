// Center map on Northern Samar, Philippines
const map = L.map('map').setView([12.5004, 124.4006], 10);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Tourist attractions in Northern Samar (add more as needed)
const attractions = [
  {
    name: "Biri Island Rock Formations",
    lat: 12.6625,
    lng: 124.3700,
    description: "Famous for its stunning rock formations shaped by wind and waves."
  },
  {
    name: "Capul Island",
    lat: 12.5705,
    lng: 124.1515,
    description: "Known for Capul Lighthouse, historic church, and unique local culture."
  },
  {
    name: "Dalupiri Island (San Antonio)",
    lat: 12.5582,
    lng: 124.2567,
    description: "Beautiful beaches and a laid-back atmosphere."
  },
  {
    name: "San Vicente Pink Beach",
    lat: 12.3939,
    lng: 124.2704,
    description: "A rare pink sand beach in San Vicente, Northern Samar."
  },
  {
    name: "Bel-at Natural Pool",
    lat: 12.6691,
    lng: 124.3870,
    description: "A natural saltwater pool in Biri Island, ideal for swimming."
  },
  {
    name: "Laoang Church (St. Michael the Archangel Parish)",
    lat: 12.5693,
    lng: 124.7418,
    description: "Historic Spanish-era church in Laoang."
  },
  {
    name: "Catubig Church (St. Joseph Parish)",
    lat: 12.3992,
    lng: 125.0316,
    description: "Another historic Spanish-era church in Catubig."
  },
  {
    name: "Pinipisakan Falls",
    lat: 12.3844,
    lng: 125.0540,
    description: "A stunning multi-tiered waterfall in Las Navas."
  },
  {
    name: "Matikawol Cave",
    lat: 12.4569,
    lng: 125.0342,
    description: "A beautiful cave near Pinipisakan Falls."
  }
];

// Add markers to map
attractions.forEach(attraction => {
  L.marker([attraction.lat, attraction.lng])
    .addTo(map)
    .bindPopup(`<b>${attraction.name}</b><br>${attraction.description}`);
});