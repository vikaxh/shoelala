import  React, { Fragment, useEffect } from "react";
import {useSelector , useDispatch} from "react-redux";
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.jsx";
import MetaData from "../layout/Helmets/MetaData.jsx";
import Loading from "../layout/Loading/Loading.jsx";
import { getProducts } from "../../actions/productActions.js";



function Home() {
    const dispatch = useDispatch();
    const {loading , products} = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProducts())
    } ,[dispatch]);
  return (
    <Fragment>
        {   
            loading ? <Loading/> : <Fragment>
            <MetaData title={"Home"}></MetaData>
            <div className='banner'>
                <p>Welcome to Shoolala</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
    
                <a href="#container">
                    <button>
                        Scroll <CgMouse/>
                    </button>
                </a>
            </div>
    
            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
                {
                    products && products.map((product) => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </Fragment>
        }
    </Fragment>
  )
}

export default Home
