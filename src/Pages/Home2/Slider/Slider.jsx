import React, { useEffect, useRef, useState } from 'react';
import { MdAccountCircle, MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";
import Container from '../../../Component/Container';
import List from '../../../Component/List';
import ListItem from '../../../Component/ListItem';
import { BsChevronCompactDown, BsFillHeartFill } from 'react-icons/bs';
import { FaShoppingBasket } from 'react-icons/fa';
import { AiOutlineCaretRight, AiFillCaretDown } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import Drowpdown2 from './Drowpdown2';
import Inputbox from '../../../Component/Inputbox';

const Slider = () => {
  let [show, setShow] = useState(false);
  let [bekery, setBekery] = useState(false);
  let [bread, setBread] = useState(false);
  let [candy, setCandy] = useState(false);
  let [coffee, setCoffee] = useState(false);
  let [dairy, setDairy] = useState(false);
  let [fresh, setFresh] = useState(false);
  let [frozen, setFrozen] = useState(false);
  let [snacks, setSnacks] = useState(false);
  let [userDown, setuserDown] = useState(false);
  let [slider, setSlider] = useState(false);
  let [shopDropDown, setShopDropDown] = useState(false);
  let ref = useRef();
  let userRef = useRef();
  let shopRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current?.contains(e.target)) {
        console.log(e.target)
        setShow(true);
      } else {
        setShow(false);
      }
      if (userRef.current?.contains(e.target)) {
        setuserDown(true);
      } else {
        setuserDown(false);
      }
      if (shopRef.current?.contains(e.target)) {
        setShopDropDown(true);
      } else {
        setShopDropDown(false);
      }
    });
  }, []);

  console.log(bekery)

  return (
    <div className='w-full transition duration-500'>

      <Container>
        <div className="flex flex-col justify-around font-dm border-t w-full  transition duration-300">
          <Drowpdown2 togolref={ref} className="z-[115] bg-white  relative cursor-pointer">
            <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer p-2  border-b">
              <h1>Categories</h1>
              {
                show ? <AiFillCaretDown /> : <AiOutlineCaretRight />
              }


            </div>

            {show && (
              <List className="absolute left-[180px] md:left-[230px] top-0  bg-white  w-[100%] ">


                <Drowpdown2 className="z-[115] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setBekery(!bekery)}>
                    <h1>Bekery</h1>
                    {
                      bekery ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }

                  </div>
                </Drowpdown2>
                {
                  bekery && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Muffins & Donuts</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Rolls & Buns</ListItem>
                  </>
                }


                <Drowpdown2 className="z-[114] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setBread(!bread)}>
                    <h1>Bread</h1>
                    {
                      bread ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>
                </Drowpdown2>
                {
                  bread && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Pies</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Snack Cakes</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Custom Cakes</ListItem>
                  </>
                }

                <Drowpdown2 className="z-[113] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setCandy(!candy)}>
                    <h1>Candy</h1>
                    {
                      candy ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>


                </Drowpdown2>
                {
                  candy && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Gum</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Baby Candy</ListItem>
                  </>
                }

                <Drowpdown2 className="z-[112] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setCoffee(!coffee)}>
                    <h1>Coffee</h1>
                    {
                      coffee ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>

                </Drowpdown2>
                {
                  coffee && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Instant Coffee</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Cold Coffee</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Coffee Pods</ListItem>
                  </>
                }

                <Drowpdown2 className="z-[111] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setDairy(!dairy)}>
                    <h1>Dairy & Eggs</h1>
                    {
                      dairy ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>


                </Drowpdown2>
                {
                  dairy && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Cheese</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Chocolate</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Eggs</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-primery hover:text-white">Milk</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Yogurt</ListItem>
                  </>
                }
                <Drowpdown2 className="z-[110] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setFresh(!fresh)}>
                    <h1>Fresh produce</h1>
                    {
                      fresh ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>
                </Drowpdown2>
                {
                  fresh && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Fresh Herbs</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Fresh Vegetables</ListItem>
                  </>
                }
                <Drowpdown2 className="z-[109] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setFrozen(!frozen)}>
                    <h1>Frozen</h1>
                    {
                      frozen ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>
                </Drowpdown2>
                {
                  frozen && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Frozen Breakfast</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Snakcs</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Ice Cream</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Pizza</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Pasta</ListItem>
                  </>
                }
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-primery hover:text-white">
                  Meat & Fish
                </ListItem>
                <ListItem className="pb-2  border-b pl-4 py-2 hover:bg-primery hover:text-white">
                  Organic Foods
                </ListItem>
                <Drowpdown2 className="z-[108] bg-white  relative cursor-pointer">
                  <div className="flex justify-between hover:bg-primery hover:text-white cursor-pointer pl-4 p-2  border-b" onClick={() => setSnacks(!snacks
                  )}>
                    <h1>Snacks</h1>
                    {
                      snacks ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>
                </Drowpdown2>
                {
                  snacks && <>
                    <ListItem className="pb-2  border-b py-2 pl-4 hover:bg-primery hover:text-white">Chips</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Cokies</ListItem>
                    <ListItem className="pb-2  border-b pl-4 py-2  hover:bg-primery hover:text-white">Crackers</ListItem>
                  </>
                }
              </List>
            )}
          </Drowpdown2>


          <div className='z-[115] bg-white '>

            <List className="flex flex-col w-full">
              <ListItem className=" border-b w-full ">
                <Drowpdown2
                  togolref={userRef}
                  className="relative cursor-pointer flex"
                >
                  <div className='p-2 flex justify-between w-full h-full hover:bg-primery hover:text-white'>
                    <h1>Home</h1>
                    {
                      userDown ? <AiFillCaretDown /> : <AiOutlineCaretRight />
                    }
                  </div>
                  {userDown && (
                    <List className="absolute left-[179px] md:left-[230px]   w-full bg-white z-10">
                      <Link to='/'><ListItem className="pb-2  border-b pl-4 py-2 hover:bg-primery hover:text-white">Home-1</ListItem></Link>
                      <Link to='/home-2'><ListItem className="pb-2  border-b pl-4 py-2 hover:bg-primery hover:text-white">Home-2</ListItem></Link>

                    </List>
                  )}
                </Drowpdown2>
              </ListItem>
                <Link to="/about">
              <ListItem className="flex justify-between items-center hover:bg-primery hover:text-white cursor-pointer p-2 border-b">
              About
              </ListItem>
                </Link>
                <Link to="/shop">

              <ListItem className="flex justify-between items-center hover:bg-primery hover:text-white cursor-pointer p-2 border-b">
              Shop
              </ListItem>
                </Link>
              <Link to='/blog'>
                <ListItem className="flex justify-between items-center hover:bg-primery hover:text-white cursor-pointer p-2 border-b">
                  Blog
                </ListItem>
              </Link>
              <Link to='/home-2/contact2'>
                <ListItem className="flex justify-between items-center hover:bg-primery hover:text-white cursor-pointer p-2 border-b">
                  Contact2
                </ListItem>
              </Link>
                <Link to="/cheakOut">
              <ListItem className="flex justify-between items-center hover:bg-primery hover:text-white cursor-pointer p-2 border-b">
              Checkout
              </ListItem>
                </Link>
                <Link to="/checkout2">
              <ListItem className="flex justify-between items-center hover:bg-primery hover:text-white cursor-pointer p-2 border-b">
              Checkout-2
              </ListItem>
                </Link>
            </List>
          </div>

        </div>
      </Container>

    </div>
  );
};

export default Slider;