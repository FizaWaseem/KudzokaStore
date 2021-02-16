import whistle from "../../assets/Images/product/whistle.png";
import Tiger from "../../assets/Images/product/Tiger.png";
import cocomo from "../../assets/Images/product/cocomo.png";
import rio from "../../assets/Images/product/rio.png";
import prince from "../../assets/Images/product/prince.png";
import nestle from "../../assets/Images/product/nestle.png";
import mezan from "../../assets/Images/product/mezan.jpg";
import Cucumbar from "../../assets/Images/product/Cucumbar.png";
import lemon from "../../assets/Images/product/lemon.png";
import onion from "../../assets/Images/product/onion.png";
import potato from "../../assets/Images/product/potato.png";
import tomato from "../../assets/Images/product/tomato.png";
import carrot from "../../assets/Images/product/carrot.png";



const categories=[
{
    title:'Fruit & Vagetable',id:0
},{
    title:'Dairy & Bakery Items',id:1
},{
    title:'FoodGrain & Oil and Masala',id:2
},
];


const item=[
    {
        id:'1',
        Img: whistle,
        name:'Whistlez Chocolate Biscuits Half Roll Packs 6 Piece',
        price:'175',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Active',
        discount:'150',
        categories: 'Dairy & Bakery Items'
    ,amount:1,
    },
    {
        id:'2',
        Img:Tiger,
        name:'LU Tiger Ticky Pack Box – 24 Pcs',
        price:'120',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Sale',
        discount:'100',
        categories: 'Dairy & Bakery Items'
    ,amount:1,
    },
    {
        id:'3',
        Img:cocomo,
        name:'Cocomo Big pack',
        price:'1020',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Active',
        discount:'950',
        categories: 'Dairy & Bakery Items',
    amount:1,
    },
    {
        id:'4',
        Img:rio,
        name:'Rio Bisc uits Half Roll Packs 6 Piece',
        price:'175',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Sold',
        discount:'150',
        categories: 'Dairy & Bakery Items'
    ,amount:1,
    },
    {
        id:'5',
        Img:lemon,
        name:'Lemon',
        price:'80',
        detail:'Lemon, (Citrus ×limon), small tree or spreading bush of the rue family (Rutaceae) and its edible fruit. ... Citric acid may amount to 5 percent or more by weight of the lemons juice, which is also rich in vitamin C and contains smaller amounts of the B vitamins, particularly thiamin, riboflavin, and niacin.',
        status:'Active',
        discount:'50',
        categories: 'Fruit & Vagetable'
    ,amount:1,
    },
    {
        id:'6',
        Img:nestle,
        name:'Nestle Fruita Vitals ',
        price:'820',
        detail:'NESTLÉ FRUITA VITALS Premium range is currently available in Chaunsa, Red Grape, Apple, Kinnow, Pineapple, Guava, and Peach. While NESTLÉ FRUITA VITALS Super Premium range is available in Red Anaar that offers the perfect blend of super fruit.',
        status:'Active',
        discount:'850',
        categories: 'FoodGrain & Oil and Masala'
    ,amount:1,
    },
    {
        id:'7',
       Img:Cucumbar,
        name:'Cumcumbar',
        price:'820',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Sale',
        discount:'850',
        categories: 'Fruit & Vagetable'
    ,amount:1,
    },
    {
        id:'8',
       Img:tomato,
        name:'Tomato',
        price:'120/perkg',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Active',
        discount:'100',
        categories: 'Fruit & Vagetable'
      ,amount:1,
        
    },
    {
        id:'9',
       Img:onion,
        name:"Onion ",
        price:'120/perkg',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Active',
        discount:'100',
        categories: 'Fruit & Vagetable'
    ,amount:1,
    },
    {
        id:'10',
       Img:potato,
        name:'Coca cola',
        price:'120/per kg',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Sold',
        discount:'100',
        categories: 'Fruit & Vagetable'
    ,amount:1,
    },
    {
        id:'11',
        Img:carrot,
        name:'Carrot',
        price:'120/per kg',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Active',
        discount:'100',
        categories: 'Fruit & Vagetable'
    ,amount:1,
    },
    {
        id:'12',
        Img:mezan,
        name:'SunFlower Cooking Oil ',
        price:'820',
        detail:'SunFlower Cooking Oil & Canola Oil are powered by Tocopherol that helps to improve your Immune System. Tocopherol plays a vital role in improving our immune system. It helps in the proper functioning of DNA repair and also in improving the body metabolism processes',
        status:'Active',
        discount:'850',
        categories: 'FoodGrain & Oil and Masala'
    ,amount:1,
    },
    {
        id:'13',
        Img:prince,
        name:'Nestle Fruita Vitals ',
        price:'820',
        detail:'Biscuit is a term used for a variety of primarily flour-based baked food  products.The term is applied to two distinct products. In North America, a biscuit is typically a soft, leavened quick bread, and is covered in the article Biscuit.',
        status:'Active',
        discount:'850',
        categories: 'Dairy & Bakery Items'
    ,amount:1,
    },
];
const tabitem=[
    {
        id:'1',
        name:'Dashboard',
        
       
    },
    {
        id:'2',
        name:'Add Category',
        
       
    },
    {
        id:'3',
        name:'Add Item',
        
    },
    {
        id:'4',
        name:'Store',
        
    },
    {
        id:'5',
        name:'Order',
        
       
      
    },
    {
        id:'6',
        name:'Settings',
        
    },
    {
        id:'7',
        name:'Logout',
        
    },
];
const tabitemLocal=[
    {
        id:'1',
        name:'Dashboard',
       
       
    },
    {
        id:'2',
        name:'Store',
       
    },
    {
        id:'3',
        name:'Order',
        
      
      
    },
    {
        id:'4',
        name:'Settings',
        
      
    },
    {
        id:'5',
        name:'Logout',
       
    },
];

export {item , tabitem , categories,tabitemLocal};