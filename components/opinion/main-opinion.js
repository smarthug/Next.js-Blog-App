import Image from 'next/image';
import Link from 'next/link';
// import backgroundImage from '../public/path-to-your-background-image.jpg'; // Replace with your image path

const NewsHeadline = ({ to, title }) => {
    return (
        <Link href={to}>


            <div className="relative ">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={"https://lirimnaqhglyehdfwelj.supabase.co/storage/v1/object/public/openGraph/3.jpg"}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    //   width={400}
                    //   height={400}
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

                {/* Content */}
                <div className="relative z-20 p-4 max-w-2xl mx-auto text-white h-64">
                    <h1 className="text-4xl font-bold">.</h1>
                    <p className="mt-2 text-xl">.</p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-sm bg-blue-700 text-white py-1 px-3 rounded-full">OPINION</span>
                        <span className="text-sm">01/31</span>
                    </div>
                </div>
            </div>


            <div>
                <div className="relative z-20 p-4 max-w-2xl mx-auto text-black">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    {/* <p className="mt-2 text-xl">Subheadline or description goes here</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm bg-blue-700 text-white py-1 px-3 rounded-full">CATEGORY</span>
          <span className="text-sm">01/31</span>
        </div> */}
                </div>
            </div>
        </Link>



    );
};

export default NewsHeadline;
