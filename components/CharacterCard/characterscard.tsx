import * as React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useRef} from "react";

export type ChildProps = {
    id?: number | null
    imgSrc?: string | null
    name?: string | null
    isLast?: boolean | null
    newLimit: Function
}

const CharacterCard: NextPage<ChildProps> = ({id,imgSrc, name,isLast, newLimit}) => {

    /**
     * Select the Card component with useRef
     */
    const cardRef = useRef<HTMLDivElement>(null)

    /**
     * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
     */
    useEffect( () => {

        if (!cardRef?.current) return;

        const observer = new IntersectionObserver( ([entry]) => {
            if (isLast && entry.isIntersecting) {
                newLimit();
                observer.unobserve(entry.target);
            }
        })

        observer.observe(cardRef.current)

    }, [isLast])


    return (
            <div className="flex flex-col shadow" ref={cardRef}>
                <Link href={`/characters/${id}`}>
                    <a>
                        <Image
                            className='rounded-t-lg'
                            src= { imgSrc! }
                            width={220}
                            height={220}
                            alt="/"
                        />
                        <h3>{ name }</h3>
                    </a>
                </Link>
            </div>
    );
};

export default CharacterCard
