import Script from "next/script"




// export function GoogleAnalytics() {
//     return (
//         <>
//             <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_MEASUREMENT_ID}`} />
//             <Script strategy="lazyOnload" id="google-analytics">
//                 {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
 
//           gtag('config', '${env.GA_MEASUREMENT_ID}');
//         `}
//             </Script>
//         </>
//     )
// }


export function GoogleAnalytics() {
    console.log(process.env.NEXT_PUBLIC_GA)
    return (
        <>
            <Script strategy="lazyOnload" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}></Script>
            <Script strategy="lazyOnload" id="google-analytics">
                {
                    `
                    
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', '${process.env.NEXT_PUBLIC_GA}');
                    `
                }
            </Script>
        </>
    )
}