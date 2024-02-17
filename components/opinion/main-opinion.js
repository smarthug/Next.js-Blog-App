import Image from 'next/image';
import Link from 'next/link';
// import backgroundImage from '../public/path-to-your-background-image.jpg'; // Replace with your image path

const NewsHeadline = ({ to, title }) => {
    return (
        <Link href={to}>







            <div class="max-w-lg rounded overflow-hidden shadow-lg relative">
                {/* <img class="w-full" src="/your-image.jpg" alt="News Image" /> */}

                <Image
                    src={"https://lirimnaqhglyehdfwelj.supabase.co/storage/v1/object/public/openGraph/3.jpg"}
                    alt="News Image"
                    layout="responsive"
                    width={300}
                    height={200}
                />
                <div class="absolute bottom-0 left-0 w-full bg-opacity-75 bg-black text-white px-6 py-4">
                    <div class="font-bold text-xl mb-2">{title}</div>
                </div>
                {/* <div class="p-4">
                    <div class="flex flex-wrap">
                        <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">#digitalasset</span>
                        <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">#finance</span>
                        <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">#policy</span>
                    </div>
                </div> */}
            </div>

        </Link>



    );
};

export default NewsHeadline;





