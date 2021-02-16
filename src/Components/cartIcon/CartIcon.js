import React,{useState,useEffect} from 'react';
import Badge from '@material-ui/core/Badge';
import cartbag from '../../assets/Images/cartbag.svg';
import './CartIcon.css';
import { connect } from 'react-redux';

const CartIcon=({cart})=>{
   
  const [cartcount, setcartcount] = useState(0);
  useEffect(() => {
    let count=0;
    cart.forEach((items)=>{
      count += items.amount;
    });
    setcartcount(count);
  },[cart,cartcount]);
  
    return(
        <>
      <Badge color="#FFF" varient="outlined" overlap="circle" badgeContent={cartcount}>
        <img className="img" src={cartbag}/>
        </Badge>
      

        </>
    );
};
const mapStatetoProps=(state)=>{
  return{
    cart:state.shop.cart,
  }
}
export default connect(mapStatetoProps) (CartIcon);