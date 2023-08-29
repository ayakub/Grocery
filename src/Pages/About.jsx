import React from "react";
import Titel from "../Component/Titel";
import Container from "../Component/Container";
import BreadCump from "../Component/BreadCump";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <Container>
        <div>
          <BreadCump />
          <div className="mt-10 text-center">
            <Titel titel="About us" />
          </div>

          <div className="flex flex-col md:flex-row p-5 justify-center items-center my-5">
            <img className="md:w-1/2" src="./assets/about.PNG" alt="" />
            <div className="md:w-1/2 mx-auto">
              <p className="font-semibold text-gray-600 my-5">
                <span className="text-xl font-bold text-[#26901b]">
                  Grocery Shop{" "}
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio laborum veritatis enim atque dolor deleniti hic
                repudiandae, ut vitae magni officia eveniet temporibus sequi
                praesentium. Distinctio, ut sed! Enim explicabo ipsum quasi,
                beatae exercitationem dolore debitis hic odio totam illo.
              </p>
              <p className="font-semibold text-gray-600 my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio laborum veritatis enim atque dolor deleniti hic
                repudiandae, ut vitae magni officia eveniet temporibus sequi
                praesentium. Distinctio, ut sed! Enim explicabo ipsum quasi,
                beatae exercitationem dolore debitis hic odio totam illo.
              </p>
            </div>
          </div>
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-lg mx-auto">
            <div className="text-center flex flex-col md:flex-row justify-center items-center hover:bg-primery hover:text-white duration-300 bg-yellow-100 rounded-tl-3xl rounded-br-3xl  py-3">
              <img className="w-36" src="./assets/user.png" alt="" />
              <div>
              <h1 className="text-xl font-semibold">Our Customer</h1>
              <p className="text-2xl flex justify-center font-semibold">
                <CountUp start={0} end={2400} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span> +</span>
              </p>
              </div>
            </div>
            <div className="text-center flex flex-col md:flex-row justify-center items-center hover:bg-primery hover:text-white duration-300 bg-green-200 rounded-tl-3xl rounded-br-3xl py-3">
              <img className="w-24" src="./assets/shop-2.png" alt="" />
              <div>
              <h1 className="text-xl font-semibold">Our Shop</h1>
              <p className="text-2xl flex justify-center font-semibold">
                <CountUp start={0} end={25} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span> +</span>
              </p>
              </div>
            </div>
            <div className="text-center flex flex-col md:flex-row justify-center items-center hover:bg-primery hover:text-white duration-300 bg-gray-300 rounded-tl-3xl rounded-br-3xl py-3">
              <img className="w-24" src="./assets/employe.png" alt="" />
              <div>
              <h1 className="text-xl font-semibold">Our Employe</h1>
              <p className="text-2xl flex justify-center font-semibold">
                <CountUp start={0} end={250} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
                <span> +</span>
              </p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-center text-3xl font-semibold text-gray-500">
              Our Buisness
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-lg mx-auto my-10 ">
              <div className="border relative group hover:bg-[#26901b] duration-300 border-[#26901b] rounded-md cursor-pointer p-3">
                <h1 className="text-center group-hover:text-white font-semibold text-xl my-2 text-[#26901b]">
                  Grocery Shop
                </h1>
                <img
                  className="w-16 rounded-full absolute top-2 left-3"
                  src="./assets/grocery-min.png"
                  alt=""
                />
                <p className="text-gray-600 mt-5 group-hover:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati accusamus, dolorem ratione numquam veniam inventore
                  delectus iusto illo nisi id unde itaque praesentium cum
                  dolores asperiores animi eaque vero explicabo?
                </p>
              </div>
              <div className="border relative group hover:bg-[#26901b] duration-300 border-[#26901b] rounded-md cursor-pointer p-3">
                <h1 className="text-center group-hover:text-white font-semibold text-xl my-2 text-[#26901b]">
                  Bike Shop
                </h1>
                <img
                  className="w-16 rounded-full absolute top-4 left-3"
                  src="./assets/bike-min.png"
                  alt=""
                />
                <p className="text-gray-600 mt-5 group-hover:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati accusamus, dolorem ratione numquam veniam inventore
                  delectus iusto illo nisi id unde itaque praesentium cum
                  dolores asperiores animi eaque vero explicabo?
                </p>
              </div>
              <div className="border relative group hover:bg-[#26901b] duration-300 border-[#26901b] rounded-md cursor-pointer p-3">
                <h1 className="text-center group-hover:text-white font-semibold text-xl my-2 text-[#26901b]">
                  Digital Marketing
                </h1>
                <img
                  className="w-16 rounded-full absolute top-2 left-3"
                  src="./assets/digital-min.png"
                  alt=""
                />
                <p className="text-gray-600 mt-5 group-hover:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati accusamus, dolorem ratione numquam veniam inventore
                  delectus iusto illo nisi id unde itaque praesentium cum
                  dolores asperiores animi eaque vero explicabo?
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <iframe
              width="80%"
              height="400"
              src="https://www.youtube.com/embed/siftDMqiq-E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mt-14 p-3 max-w-screen-lg mx-auto">
            <p className="font-semibold text-2xl font-dm text-[#26901b]">
              Our Sotry
            </p>
            <p className=" leading-7 text-base font-dm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              sequi labore dicta iusto quisquam asperiores nobis perferendis!
              Eius aliquid iste neque tempora, ex ipsum impedit totam quas fuga
              cumque illum soluta, dolores nisi repellendus id illo harum
              numquam beatae debitis ratione vitae magni nemo praesentium
              officia! Inventore provident excepturi atque cum ab at quidem
              necessitatibus itaque sunt! Et numquam, odit impedit, earum
              corporis cum reprehenderit minima magni omnis provident rerum quod
              optio ut voluptatibus dolorem, tempore atque veniam. Illum a
              dolore porro eos alias quae quia ipsam vel debitis nam! Excepturi
              earum officia reprehenderit vero optio voluptatum in veritatis
              exercitationem.
            </p>
            <p className=" mt-4 leading-7 text-base font-dm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              sequi labore dicta iusto quisquam asperiores nobis perferendis!
              Eius aliquid iste neque tempora, ex ipsum impedit totam quas fuga
              cumque illum soluta, dolores nisi repellendus id illo harum
              numquam beatae debitis ratione vitae magni nemo praesentium
              officia! Inventore provident excepturi atque cum ab at quidem
              necessitatibus itaque sunt! Et numquam, odit impedit, earum
              corporis cum reprehenderit minima magni omnis provident rerum quod
              optio ut voluptatibus dolorem, tempore atque veniam. Illum a
              dolore porro eos alias quae quia ipsam vel debitis nam! Excepturi
              earum officia reprehenderit vero optio voluptatum in veritatis
              exercitationem. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Rem, voluptatum? Autem mollitia soluta
              praesentium fugit corporis. Nihil, esse ducimus nisi dolor ex
              magni expedita itaque hic commodi est consequuntur culpa aperiam
              fuga impedit assumenda? Non animi cumque beatae nam sunt culpa
              aliquam eius, fuga velit repudiandae qui alias ea iusto ut
              excepturi, sapiente vel soluta, repellendus laborum tempore
              voluptatem recusandae numquam facilis assumenda. Expedita numquam
              rem assumenda doloribus quo libero non velit distinctio nulla.
              Dolor quae et inventore officiis pariatur nihil sint commodi
              maiores. Amet modi, inventore dignissimos harum animi quis ex
              similique architecto laborum perferendis illo, exercitationem
              doloribus, minima voluptas deleniti aspernatur earum nihil sint!
              Repellendus dolor molestias porro molestiae deserunt nisi natus
              quam inventore labore reprehenderit minima tenetur sapiente
              officia eaque aliquam debitis sit, ea aspernatur similique quos
              libero nemo reiciendis quae! Facilis soluta molestias magnam rem
              beatae modi quidem, illo, nesciunt fuga aspernatur quo. Atque,
              nihil iste. Necessitatibus corrupti voluptate aperiam numquam!
              Quia libero provident iste, omnis facere ad id? Dicta neque sed
              amet magnam rerum, sint culpa, vel quidem sequi ipsa placeat unde!
              Nam ipsum, harum corporis expedita totam neque voluptate quibusdam
              eaque reprehenderit id laborum ab vero deleniti delectus minus.
              Voluptatum deleniti consequatur reprehenderit architecto.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
