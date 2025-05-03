"use client";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero section with background */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero-pattern.png"
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-6 py-20 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Our journey, vision, and commitment to bringing you the freshest
            organic products
          </p>
        </div>
      </div>

      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt="Fresh organic fruits"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt="Organic vegetables"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt="Our store in Faridabad"
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#000000"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#000000"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#000000"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#000000"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#000000"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#000000"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#000000"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#000000"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-black">
                  Our Story
                </span>
                <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                  From Farm to Table: The Little Basket Journey
                </h2>
                <p className="mb-5 text-base text-gray-600">
                  Founded in 2020, The Little Basket began with a simple
                  mission: to connect local farmers with health-conscious
                  consumers in Faridabad, Haryana. We believe that everyone
                  deserves access to fresh, organic produce that&#39;s
                  sustainably grown and fairly traded.
                </p>
                <p className="mb-8 text-base text-gray-600">
                  Our team personally visits farms across Haryana to handpick
                  the highest quality fruits, vegetables, and organic products.
                  By eliminating middlemen, we ensure fair prices for both
                  farmers and customers while maintaining the freshest quality
                  possible.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black text-white">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M18.6746 3.17859C17.9051 2.40896 16.9866 1.80794 15.9776 1.40778C14.9687 1.00758 13.891 0.81396 12.8057 0.839452C11.7203 0.864945 10.6547 1.1113 9.66863 1.55859C8.6826 2.00589 7.78421 2.6399 7.04507 3.42554C6.17229 4.35861 5.51271 5.47015 5.12752 6.67929C4.74233 7.88843 4.64219 9.16622 4.83616 10.4217C5.03012 11.6771 5.51255 12.8772 6.24627 13.9362C6.97998 14.9953 7.9458 15.8861 9.06938 16.5444L10.6784 10.4309C10.3679 10.3212 10.0954 10.1385 9.88925 9.89815C9.68311 9.65778 9.55034 9.36913 9.5037 9.06314C9.45705 8.75714 9.49842 8.44435 9.62378 8.15881C9.74913 7.87326 9.95412 7.62668 10.214 7.4471C10.4508 7.28548 10.7192 7.18874 10.9992 7.16808C11.2792 7.14741 11.5596 7.20361 11.8146 7.33074C12.0696 7.45787 12.2909 7.65145 12.4593 7.89267C12.6277 8.13389 12.7377 8.41346 12.7784 8.70767L18.6746 3.17859Z"
                          fill="white"
                        />
                        <path
                          d="M29.6064 13.7087C29.8676 15.0211 29.8307 16.3741 29.4984 17.6697C29.166 18.9653 28.5465 20.1733 27.6878 21.1975C26.8292 22.2218 25.7512 23.0362 24.5343 23.5866C23.3173 24.137 21.9947 24.4083 20.6605 24.377C19.3264 24.3457 18.0167 24.0126 16.8295 23.4017C15.6423 22.7907 14.6048 21.9218 13.7955 20.8559C12.9861 19.7899 12.4259 18.5512 12.1568 17.2386C11.8877 15.926 11.9161 14.5687 12.2402 13.2671L18.2944 14.8638C18.243 15.1853 18.2746 15.5151 18.3864 15.8217C18.4981 16.1283 18.6869 16.4028 18.9375 16.6213C19.188 16.8399 19.4929 16.995 19.8224 17.0709C20.1519 17.1467 20.4938 17.1407 20.8196 17.0534C21.1453 16.9661 21.4434 16.8001 21.684 16.5724C21.9247 16.3447 22.1002 16.0628 22.1955 15.7513C22.2907 15.4399 22.3028 15.1092 22.2307 14.7915C22.1586 14.4738 22.0043 14.18 21.7819 13.9368L29.6064 13.7087Z"
                          fill="white"
                        />
                        <path
                          d="M13.5626 31.6214C12.6963 31.9116 11.7828 32.0406 10.8688 32.0022C9.9547 31.9638 9.0572 31.7585 8.22017 31.3973C7.38315 31.0361 6.62212 30.5256 5.97501 29.8894C5.32791 29.2532 4.8071 28.502 4.43906 27.6728C4.07103 26.8435 3.86323 25.9514 3.82509 25.0397C3.78695 24.128 3.91896 23.2238 4.21365 22.3659C4.50835 21.5081 4.96023 20.7108 5.54804 20.0148C6.13585 19.3188 6.84962 18.737 7.65216 18.2998L9.15366 24.4456C8.91477 24.6322 8.72934 24.8713 8.61451 25.1418C8.49968 25.4123 8.45888 25.7055 8.49574 25.994C8.5326 26.2825 8.64581 26.5564 8.82388 26.7929C9.00196 27.0294 9.2389 27.2214 9.51242 27.3512C9.77455 27.4768 10.0622 27.5412 10.353 27.5389C10.6438 27.5366 10.9304 27.4677 11.1906 27.3379C11.4508 27.2082 11.6775 27.0212 11.8525 26.7911C12.0275 26.561 12.1462 26.294 12.1987 26.011L18.2075 27.5566C17.7782 28.395 17.1939 29.1445 16.4851 29.7637C15.7763 30.3829 14.9549 30.8602 14.0681 31.1673L13.5626 31.6214Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        100% Organic
                      </h4>
                      <p className="text-sm text-gray-600">
                        No pesticides, no chemicals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black text-white">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M16.0001 11C16.7912 11 17.5646 10.7654 18.2223 10.3259C18.8801 9.88636 19.3928 9.26164 19.6955 8.53073C19.9983 7.79983 20.0775 6.99556 19.9231 6.21964C19.7688 5.44372 19.3878 4.73098 18.8284 4.17157C18.269 3.61216 17.5563 3.2312 16.7804 3.07686C16.0044 2.92252 15.2002 3.00173 14.4693 3.30448C13.7384 3.60723 13.1136 4.11992 12.6741 4.77772C12.2346 5.43552 12 6.20888 12 7C12 8.06087 12.4214 9.07828 13.1716 9.82843C13.9217 10.5786 14.9391 11 16.0001 11Z"
                          fill="white"
                        />
                        <path
                          d="M24.8289 16.7C25.4009 16.5654 25.9136 16.2503 26.2993 15.7977C26.6851 15.3452 26.9258 14.7782 26.9935 14.1755C27.0612 13.5728 26.9526 12.9624 26.6819 12.4221C26.4111 11.8819 25.9902 11.441 25.471 11.1583C24.9518 10.8756 24.356 10.7647 23.7705 10.8414C23.185 10.9181 22.6379 11.179 22.2103 11.582C21.7826 11.9851 21.4976 12.5125 21.3955 13.0878C21.2933 13.6631 21.3791 14.2543 21.6401 14.774C21.7939 15.0704 22.0008 15.3336 22.2489 15.55C22.497 15.7664 22.7815 15.9317 23.0889 16.036C22.0347 16.3304 21.0853 16.9 20.3424 17.6903C19.5996 18.4807 19.0922 19.4633 18.8834 20.525C16.9131 19.0768 14.5282 18.3196 12.1162 18.3719C9.70417 18.4241 7.35545 19.2828 5.44894 20.8C5.63302 19.1489 6.29347 17.5934 7.34911 16.3375C8.40475 15.0817 9.80563 14.1842 11.3634 13.766C11.5952 14.4726 12.0293 15.0796 12.6018 15.5026C13.1742 15.9256 13.8546 16.1421 14.5472 16.1227C15.2398 16.1033 15.9077 15.8493 16.4568 15.3952C17.006 14.9411 17.4076 14.315 17.6017 13.6004C17.7959 12.8858 17.7727 12.1281 17.5354 11.4277C17.2981 10.7273 16.8579 10.1225 16.2791 9.69827C15.7003 9.27408 15.0131 9.05428 14.3119 9.07387C13.6108 9.09346 12.9349 9.35147 12.3782 9.80242C11.8215 10.2534 11.4129 10.8767 11.2129 11.583C9.24367 12.0898 7.48136 13.1383 6.1343 14.5787C4.78725 16.019 3.91206 17.79 3.62894 19.687C3.34582 21.5841 3.66892 23.5127 4.55427 25.2152C5.43962 26.9177 6.84407 28.3149 8.56134 29.1869C8.45424 29.4404 8.39993 29.7116 8.40054 29.985C8.40115 30.2584 8.45667 30.5294 8.5649 30.7824C8.67313 31.0354 8.83272 31.265 9.03373 31.4584C9.23473 31.6519 9.47251 31.8053 9.7331 31.9096C9.99368 32.0138 10.2714 32.0669 10.5504 32.066C10.8294 32.065 11.1065 32.01 11.3661 31.904C11.6258 31.7981 11.8622 31.6431 12.0614 31.4484C12.2606 31.2537 12.4181 31.0229 12.5239 30.7692C12.6298 30.5155 12.6825 30.2441 12.6784 29.971C12.6784 29.226 12.2784 28.564 11.6744 28.175C10.9966 27.6308 10.3957 26.9927 9.89343 26.279C9.39117 25.5653 8.99511 24.7845 8.7213 23.963C8.4475 23.1415 8.29953 22.2887 8.28303 21.428C8.26654 20.5673 8.38166 19.7099 8.62384 18.8778C10.0124 17.8384 11.6815 17.2047 13.4262 17.0551C15.171 16.9055 16.9216 17.2461 18.4604 18.038C18.2708 19.3361 18.4749 20.6598 19.0414 21.8386C19.6079 23.0174 20.5101 23.9919 21.6243 24.6571C22.7386 25.3223 24.0158 25.649 25.3054 25.5939C26.595 25.5389 27.8372 25.1046 28.887 24.345C29.1148 24.7024 29.2311 25.1131 29.2221 25.53C29.2131 25.9468 29.0792 26.3515 28.8362 26.698C28.5933 27.0444 28.2521 27.3183 27.8536 27.4881C27.455 27.6579 27.0156 27.7169 26.5844 27.658C26.1531 27.5992 25.7494 27.4247 25.4191 27.156C25.2521 27.0218 25.0614 26.9195 24.8566 26.8544C24.6519 26.7894 24.4368 26.7627 24.2226 26.7757C24.0085 26.7887 23.799 26.8413 23.6047 26.9308C23.4105 27.0203 23.2349 27.1451 23.0875 27.2986C22.94 27.452 22.8236 27.631 22.7451 27.8263C22.6666 28.0216 22.6274 28.2294 22.6294 28.4392C22.6315 28.6491 22.6749 28.8561 22.7573 29.0497C22.8398 29.2434 22.9599 29.4199 23.1104 29.5702C23.803 30.2591 24.6951 30.7095 25.6573 30.8604C26.6195 31.0112 27.5986 30.8542 28.4664 30.4114C29.3342 29.9687 30.0472 29.2623 30.5044 28.3875C30.9615 27.5126 31.1399 26.5128 31.0111 25.5339C30.8824 24.555 30.4524 23.6447 29.7836 22.9261C29.1148 22.2075 28.243 21.7148 27.2854 21.5154C26.3278 21.3161 25.3337 21.4211 24.4429 21.8157C23.5521 22.2103 22.8073 22.8737 22.3131 23.7123C21.8189 24.5509 21.6015 25.5217 21.6914 26.4823C21.4696 26.37 21.2322 26.2901 20.9874 26.245C19.8344 25.9998 18.8008 25.3625 18.0688 24.446C17.3368 23.5295 16.9547 22.3931 16.9874 21.232C17.8018 22.2051 18.8621 22.9328 20.0591 23.3306C21.2562 23.7285 22.5407 23.7788 23.7679 23.4752C23.9598 23.4264 24.1401 23.3423 24.2995 23.2271C24.4589 23.112 24.5944 22.9676 24.6992 22.8019C24.804 22.6361 24.8761 22.4519 24.9122 22.2594C24.9482 22.0668 24.9475 21.8697 24.9101 21.6774C24.8727 21.4851 24.7993 21.3013 24.6933 21.1363C24.5873 20.9713 24.4507 20.8279 24.2903 20.7139C24.1301 20.6 23.9493 20.517 23.7569 20.4694C23.5646 20.4219 23.364 20.4106 23.1671 20.4363C22.7016 20.5026 22.2236 20.4701 21.7723 20.3412C21.321 20.2122 20.9081 19.9902 20.5635 19.6916C20.219 19.3931 19.9524 19.0251 19.7841 18.6154C19.6157 18.2058 19.5497 17.7652 19.5911 17.327C20.2161 16.688 20.9883 16.2094 21.8479 15.9345C22.7074 15.6596 23.6246 15.597 24.5159 15.752C24.8559 15.8 25.2019 15.723 25.4939 15.542C25.6369 15.449 25.7626 15.3313 25.8647 15.1945C25.9667 15.0576 26.0436 14.9039 26.0919 14.7402C26.1402 14.5764 26.1592 14.405 26.1481 14.234C26.1369 14.063 26.0957 13.8956 26.0269 13.739C25.9581 13.5823 25.863 13.4388 25.7465 13.315C25.63 13.1913 25.494 13.0892 25.3448 13.0133C25.1956 12.9374 25.0359 12.889 24.8719 12.871C24.7079 12.853 24.5424 12.8657 24.3829 12.9086C23.2229 13.134 22.1719 13.756 21.4194 14.663C21.4159 14.539 21.4489 14.416 21.5159 14.307C21.7229 13.99 22.0069 13.732 22.3389 13.565C22.6709 13.398 23.0389 13.328 23.4024 13.363C23.766 13.398 24.1114 13.536 24.4006 13.764C24.6898 13.991 24.9102 14.298 25.0359 14.648L25.0394 14.656C25.1049 14.845 25.2056 15.0179 25.3348 15.1627C25.4639 15.3076 25.6189 15.4214 25.7905 15.497C25.962 15.5725 26.1465 15.6081 26.3325 15.6013C26.5185 15.5945 26.7001 15.5456 26.8659 15.4578C27.0317 15.37 27.1779 15.2455 27.2957 15.0923C27.4134 14.939 27.5 14.7607 27.55 14.5694C27.6 14.3781 27.6125 14.1783 27.5865 13.9818C27.5606 13.7854 27.4967 13.5968 27.3989 13.427C27.0409 12.8345 26.5392 12.3454 25.9391 12.0045C25.339 11.6637 24.6625 11.483 23.9739 11.479Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        Local Farmers
                      </h4>
                      <p className="text-sm text-gray-600">
                        Supporting local communities
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center py-3 px-7 text-base font-medium text-center text-white border border-transparent rounded-md bg-black hover:bg-gray-800 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At The Little Basket, we&#39;re guided by core principles that
              define who we are and how we operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-black text-white h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring you
                get the best nature has to offer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-black text-white h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                {`We're committed to environmentally friendly practices throughout
                our entire supply chain.`}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-black text-white h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our customers,
                farmers, and the wider community in Faridabad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
