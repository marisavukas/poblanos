
import chicken from '../assets/chicken.png';
import new_steak from '../assets/new_steak.png';
import steak from '../assets/steak.png';
import carnitas from '../assets/carnitas.png';
import sofritas from '../assets/sofritas.png';
import guacamole from '../assets/guacamole.png';
import mildsalsa from '../assets/mildsalsa.png';
import salsaverde from '../assets/salsaverde.png';
import hotsalsa from '../assets/hotsalsa.png';
import veggies from '../assets/veggies.png';
import cornsalsa from '../assets/cornsalsa.png';
import lettuce from '../assets/lettuce.png';
import sourcream from '../assets/sourcream.png';
import cheese from '../assets/cheese.png';
import queso from '../assets/queso.png';
import whiterice from '../assets/whiterice.png';
import brownrice from '../assets/brownrice.png';
import blackbeans from '../assets/blackbeans.png';
import pintobeans from '../assets/pintobeans.png';
import no_food from '../assets/no_food.png';




const data = {
proteins: [
  {
   id: '5',
   name: 'Garlic Guajillo Steak',
   new: 'New',
   calories: '250 cal',
   price: "11.70",
   image: new_steak, 
  },

  {
    id: '6',
    name: 'Chicken',
    calories: '180 cal',
    price: "8.30",
    image: chicken,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },

  {
    id: '7',
    name: 'Steak',
    calories: '150 cal',
    price: "9.90",
    image: steak,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '8',
    name: 'Carnitas',
    calories: '210 cal',
    price: "8.95",
    image: carnitas,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },

  {
    id: '9',
    name: 'Sofritas',
    subheading: 'Plant-Based Protein',
    calories: '210 cal',
    price: "8.30",
    image: sofritas,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },

  {
    id: '10',
    name: 'Vegetarian',
    subheading: 'Includes Guacamole',
    calories: '0 cal',
    price: "8.30",
    image: guacamole,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },

],



addOns: [
  {
    id: '11',
    name: 'Mild Salsa',
    calories: '25 cal',
    price: 0,
    image: mildsalsa,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '12',
    name: 'Salsa Verde',
    calories: '15 cal',
    price: 0,
    image: salsaverde,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '13',
    name: 'Hot Salsa',
    calories: '30 cal',
    price: 0,
    image: hotsalsa,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '14',
    name: 'Fajita Veggies',
    calories: '20 cal',
    price: 0,
    image: veggies,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },

  {
    id: '15',
    name: 'Corn Salsa',
    calories: '80 cal',
    image: cornsalsa,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '16',
    name: 'Romaine Lettuce',
    calories: '5 cal',
    price: 0,
    image: lettuce,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '17',
    name: 'Sour Cream',
    calories: '110 cal',
    price: 0,
    image: sourcream,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '18',
    name: 'Cheese',
    calories: '110 cal',
    price: 0,
    image: cheese,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },
  {
    id: '10',
    name: 'Queso',
    calories: '120 cal',
    price: 0,
    image: queso,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  }
,

  {
    id: '20',
    name: 'Guacamole',
    calories: '230 cal',
    price: "2.60",
    image: guacamole,
    underlay:'https://dummyimage.com/300.png/bf0008/fff',

  },





],

rice: [
  {
    id: '21',
    name: 'White Rice',
    calories: '210 cal',
    price: 0,
    image: whiterice,
  },
  {
    id: '22',
    name: 'Brown Rice',
    calories: '210 cal',
    price: 0,
    image: brownrice,
  },
  {
    id: '23',
    name: 'No Rice',
    image: no_food,
  }


],

beans: [
  {
    id: '23',
    name: 'Black Beans',
    calories: '130 cal',
    price: 0,
    image: blackbeans,
  },
  {
    id: '24',
    name: 'Pinto Beans',
    calories: '130 cal',
    price: 0,
    image: pintobeans,
  },

  {
    id: '25',
    name: 'No Beans',
    price: 0,
    image: no_food,
  },





]
}

export default data;
