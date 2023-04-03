import Image from "next/image";
import React, {useMemo} from "react";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const ImageWithText = ({description, image, reverse, title, className, features, id}) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className={"max-w-screen-xl mt-32 mb-6 sm:mt-32 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto " + className}
            id={id}
        >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                {!reverse && <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <Image
                            src={image}
                            alt="VPN Illustrasi"
                            layout="responsive"
                            quality={100}
                            height={414}
                            width={508}
                            className="image-contain"
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                }
                <ScrollAnimationWrapper>
                    <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12"
                                variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                            {title}
                        </h3>
                        <motion.p
                            className="text-black-500 self-start list-inside mt-4"
                            custom={{duration: 2}}
                            variants={scrollAnimation}
                            whileHover={{
                                scale: 1.1,
                                transition: {
                                    duration: .2
                                }
                            }}>

                            {description}
                        </motion.p>
                        {features && <ul className="text-black-500 self-start list-inside mt-4 ml-8">
                            {features.map((feature, index) => (
                                    <motion.li
                                        className="relative circle-check custom-list"
                                        custom={{duration: 2 + index}}
                                        variants={scrollAnimation}
                                        key={feature}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {
                                                duration: .2
                                            }
                                        }}>
                                        {feature}
                                    </motion.li>
                                )
                            )}
                        </ul>}
                    </motion.div>

                </ScrollAnimationWrapper>
                {reverse && <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <Image
                            src={image}
                            alt="VPN Illustrasi"
                            layout="responsive"
                            quality={100}
                            height={414}
                            width={508}
                            className="image-contain"
                        />
                    </motion.div>
                </ScrollAnimationWrapper>
                }
            </div>
        </div>
    );
};

export default ImageWithText;
