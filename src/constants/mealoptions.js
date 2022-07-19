import burrito from "../assets/burrito.png";
import burritobowl from "../assets/burritobowl.png";
import chipsandsides from "../assets/chipsandsides.png";
import tacos from "../assets/tacos.png";

const mealoptions = {
  burrito_bowl_chips_sides: [
    {
      id: "1",
      name: "Burrito",
      price: 0,
      image: burrito,
      description:
        "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
    },
    {
      id: "2",
      name: "Burrito Bowl",
      price: 0,
      image: burritobowl,
      description:
        "Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese.",
    },
    {
      id: "3",
      name: "Tacos",
      price: "0",
      image: tacos,
      description:
        "Your choice of freshly grilled meat or sofritas served in a soft or hard-shell tortilla with guac, salsa, queso blanco, sour cream or cheese, and topped with hand-cut romaine lettuce",
    },
    {
      id: "4",
      name: "Chips & Sides",
      price: "",
      image: chipsandsides,
      description: "Everything else you need to round out your meal.",
    },
  ],
};

export default mealoptions;
