import React, { useEffect, useState } from "react";
import { BsTypeH1 } from "react-icons/bs";
import Container from "./Container";
import Images from "./Images";

const LimiteOffer = () => {
  const [timeOver, setTimeOver] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("5/8/2024  14:09:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimeOver(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Container>
        <div className="mt-4 lg:mt-10 flex flex-col lg:flex-row justify-between ">
          <div className="lg:w-[30%] md:w-[50%] w-full flex justify-center md:justify-center text-center mx-auto lg:justify-start">
            <Images
              className="animate-wiggle lg:w-[80%] w-[60%]"
              imgsrc={"./assets/tb1-min.png"}
            />
          </div>
          <div className="lg:w-[60%] w-full flex gap-x-10">
            {timeOver ? (
              <h1 className="flex justify-center items-center text-white font-bold font-dm text-center text-3xl">
                Our 50% Offer End Next Week will be Start Again !
              </h1>
            ) : (
              <div className=" w-full">
                <p className="bg-primery text-white text-base font-dm px-2 py-1 inline-block rounded-xl">
                  No More No Time
                </p>
                <h2 className="font-dm text-2xl lg:text-5xl text-[#2a4352] font-bold w-full lg:w-[80%] text-center lg:text-left  my-7">
                  Pantry, Fridge Freezer Staples
                </h2>
                <p className="w-full lg:w-[70%] font-dm text-base text-[#959595] leading-7 text-center lg:text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto ducimus perferendis in error excepturi odio ea nam sit
                  similique repellendus. Facere quis aut earum optio sit atque
                  nihil molestiae ut!
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-y-5 sm:gap-x-10 tape:gap-x-[4px] mt-10 ">
                  <div className="flex flex-col justify-center items-center shadow-lg bg-clock lg:w-28 lg:h-28 w-20 h-20 rounded-full">
                    <span className="font-dm font-bold text-xl text-white">
                      {days}
                    </span>
                    <span className="text-white font-semibold text-xs lg:text-base font-dm">
                      Days
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-clock shadow-lg lg:w-28 lg:h-28 w-20 h-20 rounded-full">
                    <span className="font-dm font-bold text-xl text-white">
                      {hours}
                    </span>
                    <span className="text-white font-semibold text-xs lg:text-base font-dm">
                      Hours
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-clock shadow-lg lg:w-28 lg:h-28 w-20 h-20 rounded-full">
                    <span className="font-dm font-bold text-xl text-white">
                      {minutes}
                    </span>
                    <span className="text-white font-semibold text-xs lg:text-base font-dm">
                      Minutes
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center bg-clock shadow-lg lg:w-28 lg:h-28 w-20 h-20 rounded-full">
                    <span className="font-dm font-bold text-xl text-white">
                      {seconds}
                    </span>
                    <span className="text-white font-semibold text-xs lg:text-base font-dm">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default LimiteOffer;
