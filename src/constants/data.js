import chicken from "../assets/chicken.png";
import new_steak from "../assets/new_steak.png";
import steak from "../assets/steak.png";
import carnitas from "../assets/carnitas.png";
import sofritas from "../assets/sofritas.png";
import guacamole from "../assets/guacamole.png";
import mildsalsa from "../assets/mildsalsa.png";
import salsaverde from "../assets/salsaverde.png";
import hotsalsa from "../assets/hotsalsa.png";
import veggies from "../assets/veggies.png";
import cornsalsa from "../assets/cornsalsa.png";
import lettuce from "../assets/lettuce.png";
import sourcream from "../assets/sourcream.png";
import cheese from "../assets/cheese.png";
import queso from "../assets/queso.png";
import whiterice from "../assets/whiterice.png";
import brownrice from "../assets/brownrice.png";
import blackbeans from "../assets/blackbeans.png";
import pintobeans from "../assets/pintobeans.png";
import no_food from "../assets/no_food.png";
import crispy_corn_tortilla from "../assets/crispy_corn_tortilla.png";
import soft_flour_tortilla from "../assets/soft_flour_tortilla.png";
import chips from "../assets/chips.png";
import chips_and_guacamole from "../assets/chips_and_guacamole.png";
import large_chips_large_guacamole from "../assets/large_chips_large_guacamole.png";
import side_of_guacamole from "../assets/side_of_guacamole.png";
import chips_and_tomato_salsa from "../assets/chips_and_tomato_salsa.png";
import chips_and_tomatillo_salsa from "../assets/chips_and_tomatillo_salsa.png";
import chips_and_green_salsa from "../assets/chips_and_green_salsa.png";
import chips_and_corn_salsa from "../assets/chips_and_corn_salsa.png";
import chips_and_queso from "../assets/chips_and_queso.png";
import large_chips_large_queso from "../assets/large_chips_large_queso.png";
import side_of_queso from "../assets/side_of_queso.png";
import bottled_water from "../assets/bottled_water.png";
import organic_lemonade from "../assets/organic_lemonade.png";
import fountain_drink from "../assets/fountain_drink.png";
import mexican_coca_cola from "../assets/mexican_coca_cola.png";
import mexican_sprite from "../assets/mexican_sprite.png";
import san_pellegrino from "../assets/san_pellegrino.png";
import tortilla_on_the_side from "../assets/tortilla_on_the_side.png";

const data = {
  proteins: [
    {
      id: "5",
      name: "Garlic Guajillo Steak",
      new: "New",
      calories: "250 cal",
      price: 11,
      image: new_steak,
    },

    {
      id: "6",
      name: "Chicken",
      calories: "180 cal",
      price: 8,
      image: chicken,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },

    {
      id: "7",
      name: "Steak",
      calories: "150 cal",
      price: 10,
      image: steak,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "8",
      name: "Carnitas",
      calories: "210 cal",
      price: 9,
      image: carnitas,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },

    {
      id: "9",
      name: "Sofritas",
      subheading: "Plant-Based Protein",
      calories: "210 cal",
      price: 9,
      image: sofritas,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },

    {
      id: "10",
      name: "Vegetarian",
      subheading: "Includes Guacamole",
      calories: "0 cal",
      price: 8,
      image: guacamole,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
  ],

  addOns: [
    {
      id: "11",
      name: "Mild Salsa",
      price: 0,
      calories: "25 cal",
      image: mildsalsa,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "12",
      name: "Salsa Verde",
      price: 0,
      calories: "15 cal",
      image: salsaverde,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "13",
      name: "Hot Salsa",
      calories: "30 cal",
      image: hotsalsa,
      price: 0,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "14",
      name: "Fajita Veggies",
      calories: "20 cal",
      image: veggies,
      price: 0,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },

    {
      id: "15",
      name: "Corn Salsa",
      calories: "80 cal",
      image: cornsalsa,
      price: 0,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "16",
      name: "Romaine Lettuce",
      calories: "5 cal",
      price: 0,
      image: lettuce,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "17",
      name: "Sour Cream",
      calories: "110 cal",
      price: 0,
      image: sourcream,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "18",
      name: "Cheese",
      calories: "110 cal",
      price: 0,
      image: cheese,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "19",
      name: "Queso",
      calories: "120 cal",
      price: 0,

      image: queso,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
    {
      id: "20",
      name: "Guacamole",
      calories: "230 cal",
      price: 2,
      image: guacamole,
      underlay: "https://dummyimage.com/300.png/bf0008/fff",
    },
  ],

  rice: [
    {
      id: "21",
      name: "White Rice",
      price: 0,
      calories: "210 cal",
      image: whiterice,
    },
    {
      id: "22",
      name: "Brown Rice",
      price: 0,
      calories: "210 cal",
      image: brownrice,
    },
    {
      id: "23",
      name: "No Rice",
      price: 0,
      image: no_food,
    },
  ],

  beans: [
    {
      id: "23",
      name: "Black Beans",
      calories: "130 cal",
      price: 0,
      image: blackbeans,
    },
    {
      id: "24",
      name: "Pinto Beans",
      calories: "130 cal",
      price: 0,
      image: pintobeans,
    },

    {
      id: "25",
      name: "No Beans",
      price: 0,
      image: no_food,
    },
  ],
  quantity: [
    {
      id: "26",
      name: "Three Tacos",
      price: 0,
      image: "https://dummyimage.com/600x400/ffffff/fff",
    },
    {
      id: "27",
      name: "One Taco",
      price: 0,
      image: "https://dummyimage.com/600x400/ffffff/fff",
    },
  ],

  tortilla: [
    {
      id: "28",
      name: "Crispy Corn Tortilla",
      price: 0,
      calories: "200 cal",
      image: crispy_corn_tortilla,
    },
    {
      id: "29",
      name: "Soft Flour Tortilla",
      price: 0,
      calories: "250 cal",
      image: soft_flour_tortilla,
    },
  ],

  side: [
    {
      id: "30",
      name: "Chips",
      calories: "540 cal",
      price: 2,
      image: chips,
    },

    {
      id: "31",
      name: "Chips & Guacamole",
      calories: "770 cal",
      price: 4,
      image: chips_and_guacamole,
    },

    {
      id: "32",
      name: "Large Chips & Large Guacamole",
      calories: "1270 cal",
      price: 8,
      image: large_chips_large_guacamole,
    },

    {
      id: "33",
      name: "Side of Guacamole",
      calories: "260 cal",
      price: 2,
      image: side_of_guacamole,
    },

    {
      id: "34",
      name: "Chips & Fresh Salsa",
      calories: "570 cal",
      price: 2,
      image: chips_and_tomato_salsa,
    },

    {
      id: "35",
      name: "Chips & Tomatillo-Red Salsa",
      calories: "570 cal",
      price: 2,
      image: chips_and_tomatillo_salsa,
    },

    {
      id: "36",
      name: "Chips & Tomatillo-Green Salsa",
      calories: "560 cal",
      price: 2,
      image: chips_and_green_salsa,
    },

    {
      id: "37",
      name: "Chips & Roasted Chili-Corn Salsa",
      calories: "620 cal",
      price: 2,
      image: chips_and_corn_salsa,
    },

    {
      id: "38",
      name: "Chips & Queso Blanco",
      calories: "780 cal",
      price: 5,
      image: chips_and_queso,
    },

    {
      id: "39",
      name: "Large Chips & Large Queso Blanco",
      calories: "1290 cal",
      price: 7,
      image: large_chips_large_queso,
    },

    {
      id: "40",
      name: "Side Of Queso Blanco",
      calories: "240 cal",
      price: 2,
      image: side_of_queso,
    },

    {
      id: "41",
      name: "Tortilla On The Side",
      calories: "240 cal",
      price: 1,
      image: tortilla_on_the_side,
    },
  ],

  drink: [
    {
      id: "42",
      name: "Organic Lemonade",
      calories: "150-220 cal",
      price: 3,
      image: organic_lemonade,
    },

    {
      id: "43",
      name: "Fountain Drink",
      calories: "0-300 cal",
      price: 2,
      image: fountain_drink,
    },

    {
      id: "44",
      name: "Mexican Coca-Cola",
      calories: "150 cal",
      price: 3,
      image: mexican_coca_cola,
    },

    {
      id: "45",
      name: "Mexican Sprite",
      calories: "160 cal",
      price: 3,
      image: mexican_sprite,
    },

    {
      id: "46",
      name: "San Pellegrino Sparkling",
      calories: "0 cal",
      price: 3,
      image: san_pellegrino,
    },

    {
      id: "47",
      name: "Bottled Water",
      calories: "0 cal",
      price: 3,
      image: bottled_water,
    },
  ],
};

export default data;
