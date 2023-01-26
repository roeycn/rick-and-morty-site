import {NextPage} from "next";
import React, {useEffect, useRef, useState} from "react";
import Navbar from "../../components/responsive/NavBar/navbar";


/**
 * DEMO of how to use IntersectionObserver - 2 pictures on the bottom (check chrome network when scrolling down).
 */
const Pictures : NextPage< {} > = () => {

    const [loaded, setIsLoaded] = useState(false);

    const config = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2,
    };

    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {
            console.log("entries", entries);
            console.log("self", self);
            // iterate over each entry
            entries.forEach((entry) => {
                // process just the images that are intersecting.
                // isIntersecting is a property exposed by the interface
                if (entry.isIntersecting) {
                    // custom function that copies the path to the img
                    // from data-src to src
                    loadImages(entry.target);
                    // the image is now in place, stop watching
                    self.unobserve(entry.target);
                }
            });
        }, config);

        const imgs = document.querySelectorAll("[data-src]");
        imgs.forEach((img) => {
            observer.observe(img);
        });
        return () => {
            imgs.forEach((img) => {
                observer.unobserve(img);
            });
        };
    }, []);


    const loadImages = (image : any) => {
        image.src = image.dataset.src;
    };


    return (
        <div className='bg-black'>
            <div className=''>
                <Navbar />

                <h2>Lazy Load Images</h2>

                <img src="/Google.png" alt="img" width={2000} height={2000} />
                <img src="/logo.png" alt="img" width={2000} height={2000} />
                <img src="/mountain.png" alt="img" width={2000} height={2000} />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                </p>
                <img
                    src={""}
                    data-src="/single.png"
                    alt=""
                    width={2000}
                    height={2000}
                    className={loaded ? "loaded" : "loading"}
                    onLoad={() => setIsLoaded(true)}
                />
                <img
                    src={""}
                    data-src="/triple.png"
                    alt=""
                    width={2000}
                    height={2000}
                    className={loaded ? "loaded" : "loading"}
                    onLoad={() => setIsLoaded(true)}
                />

            </div>

        </div>
    );
}


export default Pictures;
