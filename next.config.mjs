// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains: ['cnd.sanity.io'],
//     },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Add the allowed external image hostname
    },
  };
  
export default nextConfig;
  