import React from "react";

import CustomLink from "../Components/CustomLink";
import Footer from "../Components/Footer";

function Article() {
  return (
    <>
      <div className="bg-gray-100 px-16 lg:px-44">
        <div className="container px-20 pt-32 pb-16">
          <h2 className="text-4xl font-bold text-primary">Lorem Ipsumus</h2>
        </div>
      </div>

      <div className="pt-10 lg:px-44">
        <div className="container px-5 lg:px-20 py-16 text-gray-500">
          <img
            src={process.env.PUBLIC_URL + "assets/article-details-large.jpg"}
            alt="article_details_image_1"
            className="block"
          />

          <div className="pt-16 xl:px-20">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames. Malesuada nunc vel risus
              commodo. Eget egestas purus viverra accumsan in nisl nisi.
              Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
              cenas.
            </p>
            <p className="mb-10">
              Et leo duis ut diam quam nulla. Purus in mollis nunc sed id
              semper. Aenean euismod elementum nisi quis. Mauris a diam maecenas
              sed enim. Amet commodo nulla facilisi nullam vehicula ipsum a.
              Morbi tristique senectus et netus et. Lobortis feugiat vivamus at
              augue eget arcu. Amet aliquam id diam mae.
            </p>
            <h2 className="text-4xl font-bold text-primary mb-3">
              Ultricies mi eget nisl purus in mollis
            </h2>
            <p className="mb-4">
              In dictum non consectetur a erat nam. Et tortor consequat id porta
              nibh venenatis. Rhoncus mattis rhoncus urna neque viverra.
              Bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-10">
              Malesuada nunc vel risus commodo. Eget egestas purus viverra
              accumsan in nisl nisi. Pellentesque elit ullamcorper dignissim
              cras tincidunt lobortis. Et leo duis ut diam quam nulla. Purus in
              mollis nunc sed id semper. Aenean euismod elementum nisi quis.
              Mauris a diam maecenas sed enim Amet commodo.
            </p>
          </div>

          <div className="flex items-start gap-10 mb-10">
            <div className="inline-block align-top">
              <ul className="list-none">
                <li className="flex items-start">
                  <span className="w-8 h-8 leading-8  relative inline-block align-middle">
                    <span className="w-8 h-8 leading-8 absolute left-0 bg-accent rounded-full"></span>
                    <span className="w-8 h-8 leading-8 absolute left-0 z-10 text-white text-center text-lg font-semibold">
                      1
                    </span>
                  </span>
                  <div className="ml-8">
                    <h5 className="text-xl font-bold text-primary">
                      Facilisi Nullam Vehicula
                    </h5>
                    <p>
                      Lobortis feugiat vivamus at augue eget arcu. Amet aliquam
                      id diam maecenas ultricies mi eget miges repo
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="inline-block align-top">
              <ul className="list-none">
                <li className="flex items-start">
                  <span className="w-8 h-8 leading-8  relative inline-block align-middle">
                    <span className="w-8 h-8 leading-8 absolute left-0 bg-accent rounded-full"></span>
                    <span className="w-8 h-8 leading-8 absolute left-0 z-10 text-white text-center text-lg font-semibold">
                      2
                    </span>
                  </span>
                  <div className="ml-8">
                    <h5 className="text-xl font-bold text-primary">
                      Nisl Purus In Mollis
                    </h5>
                    <p>
                      In dictum non consectetur a erat nam et tortor consequat
                      id porta nibh venenatis rhoncus mattis rhoncus
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="inline-block align-top">
              <ul className="list-none">
                <li className="flex items-start">
                  <div className="w-8 h-8 leading-8  relative block align-middle">
                    <span className="w-8 h-8 leading-8 absolute left-0 bg-accent rounded-full"></span>
                    <span className="w-8 h-8 leading-8 absolute left-0 z-10 text-white text-center text-lg font-semibold">
                      3
                    </span>
                  </div>
                  <div className="ml-8">
                    <h5 className="text-xl font-bold text-primary">
                      Dolor Sit Amet
                    </h5>
                    <p>
                      Malesuada nunc vel risus commodo eget egestas purus
                      viverra accumsan in nisl nisi pellentesque elit
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="xl:px-20">
            <p className="mb-10">
              Et leo duis ut diam quam nulla. Purus in mollis nunc sed id
              semper. Aenean euismod elementum nisi quis. Mauris a diam maecenas
              sed enim. Amet commodo nulla facilisi nullam vehicula ipsum a.
              Morbi tristique senectus et netus et. Lobortis feugiat vivamus at
              augue eget arcu. Amet aliquam id diam maecenas ultricies mi eget.
            </p>

            <h2 className="text-4xl text-primary font-bold mb-5">
              Aenean euismod elementum nisi quis
            </h2>

            <img
              src={process.env.PUBLIC_URL + "assets/article-details-small.jpg"}
              alt="article_details_image_2"
              className="block mb-10"
            />

            <p className="mb-5">
              Amet commodo nulla facilisi nullam vehicula ipsum a. Morbi
              tristique senectus et netus et. Lobortis feugiat vivamus at augue
              eget arcu. Amet aliquam id diam maecenas ultricies mi eget. Nisl
              purus in mollis nunc sed id semper risus. In dictum non
              consectetur a erat nam. Et tortor consequat id porta nibh
              venenatis.
            </p>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Senectus et netus et malesuada fames. Malesuada nunc vel risus
              commodo. Eget egestas purus viverra accumsan in nisl nisi.
              Pellentesque elit ullamcorper dignissim.
            </p>

            <div className="px-8 py-7 bg-gray-50 shadow mb-10">
              <h3 className="text-2xl text-primary font-bold mb-2">
                Et leo duis ut diam quam nulla purus in mollis nem
              </h3>
              <p>
                Aenean euismod elementum nisi quis. Mauris a diam maecenas sed
                enim. Amet commodo nulla facilisi nullam vehicula ipsum a. Morbi
                tristique senectus et netus et. Lobortis feugiat vivamus at
                augue eget arcu. Amet aliquam id diam maecenas ultricies mi
                eget. Nisl purus in mollis nunc sed id semper risus. In dictum
                non consectetur a erat nam. Et tortor consequat id porta nibh
                venenatis. Rhoncus mattis rhoncus
              </p>
            </div>

            <p className="mb-5">
              Malesuada nunc vel risus commodo. Eget egestas purus viverra
              accumsan in nisl nisi. Pellentesque elit ullamcorper dignissim
              cras tincidunt lobortis. Et leo duis ut diam quam nulla. Purus in
              mollis nunc sed id semper. Aenean euismod elementum nisi quis.
              Mauris a diam maecenas sed enim. Amet commodo nulla facilisi
              nullam.
            </p>

            <ul className="list-square ml-5 mb-16">
              <li>
                <span className="font-bold">Morbi tristique</span> id diam
                maecenas ultricies mi eget. Nisl purus in mollis nunc sed id
                semper risus
              </li>
              <li>
                <span className="font-bold">Senectus et netus</span> tortor
                consequat id porta nibh venenatis. Rhoncus mattis rhoncus urna
                neque viv
              </li>
              <li>
                <span className="font-bold">Lobortis feugiat</span> Bibendum ut
                tristique et egestas quis ipsum suspendisse ultrices maloris ve
              </li>
              <li>
                <span className="font-bold">Vivamus at augue</span> Amet aliquam
                id diam maecenas ultricies mi eget. Nisl purus in mollis nunc
                sed id semper
              </li>
              <li>
                <span className="font-bold">Amet aliquam</span> Aenean euismod
                elementum nisi quis. Mauris a diam maecenas sed enim. Amet
                commodo null
              </li>
            </ul>

            <CustomLink destination="/signup" text="sign up now" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Article;
