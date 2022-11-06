import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-center uppercase font-bold mt-10 flex flex-col justify-center items-center gap-10 w-[60%] m-auto">
      <h1>ABOUT</h1>
      <Image
        className="rounded-3xl w-[500px] h-[300px] object-cover object-top"
        src="/picture.jpeg"
        alt="stole"
        height={300}
        width={300}
      />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores
        enim architecto, nemo modi possimus reiciendis dolor commodi voluptates
        consectetur, iure sequi odit fuga placeat autem perspiciatis? Harum
        maiores culpa officiis beatae quos porro, aspernatur consequuntur ad
        dicta inventore labore voluptatem officia eos, enim reiciendis, quod cum
        debitis repudiandae nulla maxime sed voluptates adipisci! Enim obcaecati
        porro officia omnis voluptatibus ipsa fuga facilis quasi quae adipisci
        aspernatur rerum repellendus, harum debitis iste quis at. Optio,
        perferendis vero aliquam ex assumenda inventore quasi exercitationem
        tempore quia aperiam voluptas aliquid modi quis mollitia! Voluptatibus
        optio ipsam eum animi repellendus eos quas, esse, vitae sapiente qui ab
        dolorem quae soluta doloribus? Ipsam blanditiis necessitatibus alias
        repellat magnam soluta provident velit, similique rem adipisci atque cum
        voluptate, repellendus at cumque voluptatum inventore dolorum placeat
        nulla quas, quis sint hic ea. Incidunt obcaecati tempora illum ipsam
        molestiae excepturi ad eligendi inventore delectus, qui consequuntur
        corrupti, neque deleniti suscipit dolorum rerum eum in omnis, veritatis
        accusantium. Eveniet quia ad quam. Suscipit voluptatibus dolorem,
        doloribus architecto blanditiis quam autem perspiciatis. Beatae libero
        odio, ea illo vero quasi, necessitatibus qui quis repudiandae, error
        delectus magni ullam iste cum et. Illo officia delectus explicabo illum
        nulla, voluptatibus et excepturi!
      </p>
    </div>
  );
};

export default About;
