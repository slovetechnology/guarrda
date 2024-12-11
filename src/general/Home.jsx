import React from 'react'
import { Link } from 'react-router-dom'
import { BannerInitLinks, HomeHeaderLinks } from '../utils/utils'
import { FaBars, FaBell, FaStar } from 'react-icons/fa6'
import gimg30 from "assets/gimg30.webp"
import gimg29 from "assets/gimg29.svg"
import { SlGrid } from 'react-icons/sl'
import { IoIosStar } from 'react-icons/io'
import gimg26 from "assets/gimg26.png"
import gimg27 from "assets/gimg27.png"
import gimg28 from "assets/gimg28.png"
import vid from "assets/vid.webm"

function Home() {
    return (
        <div className='bg-[#eaf2ff]'>
            {/* cookie */}
            <div className="fixed bottom-5 left-5 bg-white rounded-xl text-lg text-slate-500 font-light p-8 w-[20rem]">
                We use cookies to ensure you get the best experience. For more detailed information about the cookies we use, see our <Link to="" className='text-blue-500'>Privacy Policy.</Link>
                <div className='mt-3'>
                    <button className="bg-blue-500 text-white px-8 py-2 block w-full rounded-md">OK</button>
                </div>
            </div>
            <div className="bg-white sticky top-0 left-0 w-full">
                <div className='flex items-center justify-between w-11/12 mx-auto py-1 lg:py-3'>
                    <Link to="/">
                        <svg style={{ width: "3rem", height: 'auto' }} viewBox="0 0 47 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.988 4.81415C43.0306 4.86441 43.0563 4.92697 43.0613 4.99278C43.0877 5.31552 45.4233 37.3313 23.6002 44.7878C23.5347 44.8103 23.4636 44.8103 23.398 44.7878C1.57567 37.3313 3.91123 5.31552 3.93695 4.99278C3.9422 4.92717 3.96786 4.86486 4.01029 4.81465C4.05273 4.76445 4.10979 4.72891 4.17343 4.71304L23.4251 0.00861373C23.4738 -0.00287124 23.5244 -0.00287124 23.573 0.00861373L42.8241 4.71304C42.888 4.72848 42.9454 4.7639 42.988 4.81415ZM39.4448 8.23253C39.4795 8.27324 39.5006 8.32385 39.5051 8.37725H39.5073C39.5287 8.64049 41.4392 34.7784 23.582 40.865C23.5296 40.885 23.4716 40.885 23.4192 40.865C5.56132 34.7784 7.47248 8.64049 7.49393 8.37725C7.49807 8.32385 7.51897 8.27309 7.55364 8.23238C7.5883 8.19168 7.63494 8.16303 7.68682 8.15057L23.4377 4.30758C23.4776 4.29755 23.5193 4.29755 23.5592 4.30758L39.3115 8.15057C39.3634 8.16318 39.41 8.19188 39.4448 8.23253Z" fill="#798CE5"></path>
                            <path d="M23.2759 10.0442L12.7734 12.6047C12.7388 12.6136 12.7078 12.6331 12.6847 12.6604C12.6617 12.6878 12.6477 12.7218 12.6448 12.7575C12.6312 12.9332 11.3574 30.3588 23.2609 34.417C23.2966 34.4284 23.3352 34.4284 23.3709 34.417C35.2745 30.3581 34.0014 12.9332 33.987 12.7568C33.9843 12.721 33.9704 12.6869 33.9471 12.6595C33.9239 12.6322 33.8926 12.613 33.8577 12.6047L23.3559 10.0435C23.3297 10.0365 23.3022 10.0365 23.2759 10.0435" fill="#798CE5"></path>
                            <path d="M4.01715 57.2615V55.6813H6.56649V60.3289C5.33901 60.5309 4.34333 60.6319 3.57938 60.6319C2.21458 60.6319 1.27467 60.2589 0.759652 59.5128C0.253218 58.7667 0 57.5815 0 55.9578C0 54.3341 0.266093 53.1625 0.798281 52.4424C1.33047 51.7228 2.23604 51.3627 3.51501 51.3627C4.31328 51.3627 5.17595 51.4552 6.103 51.6393L6.56649 51.7318L6.51497 53.1405C5.48496 53.0264 4.63946 52.9689 3.97852 52.9689C3.32616 52.9689 2.86694 53.0479 2.60085 53.206C2.33475 53.364 2.13733 53.658 2.00857 54.0881C1.8884 54.5096 1.82831 55.2382 1.82831 56.2739C1.82831 57.301 1.95278 58.0206 2.20171 58.4331C2.45063 58.8457 2.96565 59.0522 3.74676 59.0522L4.81545 58.9992V57.2615H4.01715Z" fill="#798CE5"></path>
                            <path d="M9.94405 57.485C9.94405 58.5296 10.4634 59.0522 11.502 59.0522C12.5406 59.0522 13.0599 58.5296 13.0599 57.485V51.5207H14.8367V57.4455C14.8367 58.5426 14.5578 59.3502 13.9998 59.8683C13.4505 60.3773 12.6178 60.6319 11.502 60.6319C10.3861 60.6319 9.54923 60.3773 8.99126 59.8683C8.44191 59.3502 8.16727 58.5426 8.16727 57.4455V51.5207H9.94405V57.485Z" fill="#798CE5"></path>
                            <path d="M15.8722 60.4738L17.8421 51.5207H21.2155L23.1855 60.4738H21.4086L21.061 58.8546H17.9966L17.649 60.4738H15.8722ZM19.2198 53.0219L18.3314 57.2744H20.7262L19.8378 53.0219H19.2198Z" fill="#798CE5"></path>
                            <path d="M26.1283 57.472V60.4738H24.3515V51.5207H27.7506C29.8107 51.5207 30.8407 52.5038 30.8407 54.4701C30.8407 55.6377 30.4115 56.4978 29.5531 57.0509L30.8021 60.4738H28.8579L27.8407 57.472H26.1283ZM27.7763 55.9183C28.1969 55.9183 28.5102 55.7867 28.7163 55.5232C28.9223 55.2602 29.0252 54.9131 29.0252 54.4831C29.0252 54.053 28.9136 53.711 28.6905 53.4564C28.4759 53.2019 28.1626 53.0744 27.7506 53.0744H26.1283V55.9183H27.7763Z" fill="#798CE5"></path>
                            <path d="M35.2842 60.4738H32.3358V51.5207H35.2842C36.0396 51.5207 36.6619 51.6042 37.1512 51.7712C37.6405 51.9287 38.0181 52.1968 38.2842 52.5743C38.5589 52.9429 38.7477 53.3814 38.8507 53.891C38.9537 54.3911 39.0052 55.0451 39.0052 55.8527C39.0052 56.6599 38.958 57.3314 38.8636 57.867C38.7692 58.3936 38.5889 58.8676 38.3228 59.2887C38.0653 59.7012 37.6876 60.0043 37.1898 60.1973C36.692 60.3818 36.0568 60.4738 35.2842 60.4738ZM37.1512 56.9189C37.1683 56.6384 37.1769 56.2518 37.1769 55.7602C37.1769 55.2602 37.1597 54.8606 37.1254 54.5621C37.0911 54.264 37.0096 53.9915 36.8808 53.746C36.752 53.4999 36.5589 53.3334 36.3014 53.2454C36.0525 53.1489 35.7134 53.1009 35.2842 53.1009H34.1125V58.8941H35.2842C35.928 58.8941 36.3958 58.7271 36.6877 58.3936C36.9366 58.1215 37.0911 57.63 37.1512 56.9189Z" fill="#798CE5"></path>
                            <path d="M39.6867 60.4738L41.6567 51.5207H45.0301L47 60.4738H45.2232L44.8755 58.8546H41.8112L41.4635 60.4738H39.6867ZM43.0343 53.0219L42.1459 57.2744H44.5408L43.6524 53.0219H43.0343Z" fill="#798CE5"></path>
                        </svg>
                    </Link>
                    <div className="lg:hidden hover:bg-zinc-100 p-2"> <FaBars className='cursor-pointer text-3xl' /> </div>
                    <div className="hidden lg:flex flex-row items-center gap-8 lg:gap-10">
                        {HomeHeaderLinks.map((item, index) => (
                            <Link key={index} className=' py-2 px-4 text-base hover:bg-mainblue/10 transition-all rounded-lg' to="">{item.title}</Link>
                        ))}
                        <div className="bg-slate-200 text-white hover:bg-mainblue text-xl rounded-full p-1.5 cursor-pointer">
                            <FaBell />
                        </div>
                        <div className="border rounded-full size-9 justify-center grid items-center text-2xl">
                            <span>🇺🇸</span>
                        </div>
                        <Link className='bg-mainblue text-white py-2.5 px-4 rounded-lg text-xl w-32 text-center' to="/app">Sign in</Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#788ce4] lg:bg-home h-fit pt-16 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-11/12 mx-auto">
                    <div className="lg:px-3">
                        <div className="text-white text-center lg:text-left text-[3rem] lg:text-[5rem] leading-[4rem] lg:leading-[5rem] font-medium lg:font-bold">Secure Multi</div>
                        <div className="text-white text-center lg:text-left text-[3rem] lg:text-[5rem] leading-[4rem] lg:leading-[5rem] font-medium lg:font-bold">Crypto Wallet</div>
                        <div className="text-white text-base lg:text-2xl text-center lg:text-left">stake, exchange, earn and buy Bitcoin, Ethereum and <br /> thousands of other assets</div>
                        <div className="my-10 hidden lg:block">
                            <Link to="/app" className='bg-white py-3 px-5 text-2xl rounded-lg w-[8rem]'>Create Wallet</Link>
                        </div>
                        <div className="lg:flex flex-row items-center gap-4 hidden">
                            {BannerInitLinks.map((item, index) => (
                                <Link key={index} to=""> <img src={item.image} alt="" className="h-12 w-auto" /> </Link>
                            ))}
                            <div className="bg-black text-white p-2 text-3xl rounded-lg cursor-pointer">
                                <SlGrid />
                            </div>
                        </div>
                        <div className="lg:flex items-center text-white gap-2 mt-3 hidden">Excellent Score 4.6 on Excellent Rating on <IoIosStar className='text-green-500' /> TrustPilot</div>
                        <div className="mt-3 hidden lg:block">
                            <img src={gimg29} alt="" className="h-16 w-auto" />
                        </div>
                        <div className="flex flex-row items-center justify-center mt-3 gap-4">
                            <div className="bg-white py-2 px-4 rounded-lg flex flex-row items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: 'auto' }} className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Logo Apple</title><path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z"></path><path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z"></path></svg>
                                <div className="">App Store</div>
                            </div>
                            <div className="bg-white py-2 px-4 rounded-lg flex flex-row items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: 'auto' }} className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Logo Google Playstore</title><path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"></path></svg>
                                <div className="">Google Play</div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src={gimg30} alt="" className="w-full h-full" />
                    </div>
                    <div className=" lg:hidden">
                        <video className="is-hidden-tablet lazyloaded" preload="auto" autoPlay muted playsInline loop>
                            <source src={vid} type="video/webm" />
                            <source src={vid} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="mt-16 lg:mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 mx-auto lg:w-3/5">
                    <div className="h-[40rem] order-2 lg:order-1">
                        <img src={gimg26} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-full lg:h-4/5 flex flex-col justify-center order-1 lg:order-2">
                        <div className="text-5xl text-center lg:text-right font-medium text-black">Buy Crypto</div>
                        <div className="text-center lg:text-right text-lg lg:text-xl">Buy Bitcoin, ethereum,  and over 50 other coins</div>
                        <div className="text-center lg:text-right text-lg lg:text-xl">and over 400K tokens</div>
                        <div className="w-fit mx-auto lg:ml-auto mt-7">
                            <Link to='/app' className='py-4 px-5 rounded-lg text-xl text-white bg-mainblue'>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 lg:mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 mx-auto lg:w-3/5">
                    <div className="w-full lg:h-4/5 flex flex-col justify-center">
                        <div className="text-5xl text-center lg:text-left font-medium text-black">Earn with Staking</div>
                        <div className="text-center lg:text-left text-lg lg:text-xl">lots of trending assets available for staking</div>
                        <div className="text-center lg:text-left text-lg lg:text-xl">Up to almost 405 anual yield</div>
                        <div className="w-fit mx-auto lg:mr-auto mt-7">
                            <Link to='/app' className='py-4 px-5 rounded-lg text-xl text-white bg-mainblue'>Start Earning</Link>
                        </div>
                    </div>
                    <div className="h-[40rem]">
                        <img src={gimg27} alt="" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
            <div className="mt-16 lg:mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-11/12 mx-auto lg:w-3/5">
                    <div className="h-[40rem] order-2 lg:order-1">
                        <img src={gimg28} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-full lg:h-4/5 flex flex-col justify-center order-1 lg:order-2">
                        <div className="text-5xl text-center lg:text-right font-medium text-black">Exchange Crypto</div>
                        <div className="text-center lg:text-right text-lg lg:text-xl">Instant crypto exchange for over 50 coins using</div>
                        <div className="text-center lg:text-right text-lg lg:text-xl">Your android or ios wallet</div>
                        <div className="w-fit mx-auto lg:ml-auto mt-7">
                            <Link to='/app' className='py-4 px-5 rounded-lg text-xl text-white bg-mainblue'>Exchange Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 lg:mt-24 bg-white py-20"></div>
        </div>
    )
}

export default Home