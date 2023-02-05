import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import SanityClient from "../client";
export const RundanBladet = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"] {
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
alt
      }
    }`
    )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <AnimatedPage>
        <main className="min-h-screen p-12">
          <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center font-body">
              Rundan Bladet
            </h1>
            <h2 className="text-lg text-black flex justify-center mb-12 font-body">
              Här hittar du senaste rundan bladet men även tidigare exemplar
            </h2>
            <div className="grid md:grid-cols 2 lg:grid-cols-3 gap-8">
              {postData &&
                postData.map((post, index) => (
                  <article className="hover:scale-105">
                    <Link
                      to={"/post/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span
                        className="block h-64 relative rounded shadow leading-snug bg-white"
                        key={index}
                      >
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                          className="w-full h-full rounded-r object-cover absolute"
                        />
                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                          <h3 className="text-white text-lg px-3 py-4 bg-black bg-opacity-75 rounded font-body">
                            {post.title}
                          </h3>
                        </span>
                      </span>
                    </Link>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </AnimatedPage>
    </>
  );
};
