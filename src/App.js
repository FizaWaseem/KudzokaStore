
import './App.css';

import { Template } from './Components/Template/Template';
import Layout from './pages/Layout/Layout';
import { MyAccount, MyOrder, Sidebar } from './pages/Sidebar';
import {Switch,Route,Router, Redirect} from "react-router-dom";
import { MyWallet } from './pages/Sidebar/MyAccount/MyWallet';
import { InProgress } from './pages/Sidebar/MyOrder/InProgress';
import PreviousOrder from './pages/Sidebar/MyOrder/PreviousOrder';
import { MainTemplate } from './Components/Template/MainTemplate';

import Slider_products from './Components/Slider_products/Slider_products';

import { VendorTemplate } from './Components/Template/VendorTemplate';
import { VendorAddCategory } from './pages/Vendor/VenAddCategory/Vendor-Add-Category';

import { AddItem, Store } from './pages/Vendor';
import { Vendor_Order } from './pages/Vendor/AddItemInfo/Vendor_Order';
import StoreHome2 from './pages/StoreHome-2/StoreHome-2';
import Addtocart from './pages/Addtocart/Addtocart';
import CategoriesStore from './pages/StoreHome-2/CategoriesStoreHome';
import ProductDetails from './pages/StoreHome-2/ProductDetails';
import { connect } from 'react-redux';
import ProductDetail from './Components/Product_Store/Product-detail';
import ScrollIntoView from './ScrollIntoView';
import Menu_bar from './Components/Tab/Menu_bar';




function App({currentItem}) {
  
  return (
    <div className="App">
   <ScrollIntoView>
    <Switch> 
      <Route exact path="/" component={StoreHome2}/>
     <Route exact path="/CategoriesStore" component={CategoriesStore}/>
     {!currentItem ? <Redirect to="/"/>:
     <Route  path="/ProductDetail/:currentItem" component={ProductDetails}/>
     }
     <Route path="/Addtocart" component={Addtocart}/>
     <Route path="/Add Category" component={VendorAddCategory}/>
     <Route exact path="/Dashboard" render={() => <div>Dashboard</div>} />
            <Route path="/Add Category" render={() => <div><VendorAddCategory></VendorAddCategory></div> } />
            <Route path="/Add Item" render={() => <div>   <AddItem></AddItem></div>} />
            <Route path="/Store" render={() => <div>   <Store></Store></div>} />
            <Route path="/Order" render={() => <div> <Vendor_Order/></div>} />
            <Route path="/profile" component={MyAccount}/>
            <Route path="/MyWallet" component={MyWallet}/>
       <Route path="/MyOrder" component={MyOrder}/>
   
     {/* <Template>
     <Switch> */}
    
     {/* 
     </Switch>
     </Template>  */}
  



    
      </Switch>  
   
   


</ScrollIntoView>
    </div>
  );
};
const mapStateToProps=(state)=>{
  return{
    currentItem:state.shop.currentItem,
  }
};


export default connect(mapStateToProps) (App);
