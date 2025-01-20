// import { GetStaticProps } from "next";
// import Layout from "../components/_old/Layout";
// import Post, { PostEntity } from "../components/_old/Post";
// import prisma from "../lib/prisma";
import Encounter from "../components/Encounter/Encounter";
// import { defaultFlags, gridSize } from "../resources/globals";
import { MouseContextProvider } from "../contexts/MouseContextProvider";
import { ActivationFlagsContextProvider } from "../contexts/ActivationFlagsContextProvider";
import { Suspense } from "react";

// export const getStaticProps: GetStaticProps = asyncss () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },  
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };

// type BlogProps = {
//   // feed: PostEntity[];
// };

export default function Blog() {
  return (
    <ActivationFlagsContextProvider>
      <MouseContextProvider>
        <Suspense fallback={<div>plofi</div>}>
          <Encounter />
        </Suspense>
      </MouseContextProvider>
    </ActivationFlagsContextProvider>
  );
}
