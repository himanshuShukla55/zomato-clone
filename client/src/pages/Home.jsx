import React from "react";

const Home = () => {
  return (
    <>
      <header className="relative top-0">
        <div
          style={{
            background: `url(${"https://firebasestorage.googleapis.com/v0/b/zomato-clone-727e7.appspot.com/o/first-page-bg.png?alt=media&token=c3355c62-8ed8-4e6e-8c2e-cdde0cd93764"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[400px] sm:h-[600px] flex flex-col justify-center items-center text-white gap-4 w-full"
        >
          <h1 className="font-bold text-5xl sm:text-7xl">Zomato</h1>
          <p className="text-center leading-none text-lg sm:text-4xl sm:tracking-wider">
            Find the best restaurants, cafés
            <br /> and bars in India
          </p>
        </div>
      </header>
      <main className="my-10">
        <p className="px-5 font-monsterrat lg:px-[300px] lg:text-xl lg:leading-10 text-center text-gray-500">
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </p>
      </main>
    </>
  );
};

export default Home;
