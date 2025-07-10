import React, { useState, useEffect } from "react";

function LandingPage({ onSignIn, onSignUp }: { onSignIn: () => void, onSignUp: () => void }) {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Newsreader, Noto Sans, sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#fcfbf8] p-4 pb-2 justify-between">
          <h2 className="text-[#1c180d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Lucky Draw</h2>
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#191810] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#191810]">
                {/* User Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-center justify-center p-4"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9oNyqAEmG40Zj548e8H4avFvXxlPK71kMED2xd9sDRoXAf2m3KRqV1amxQVGFV8gCTINVLqMhW9jgHfX-Q5hOF4w4ZEqXJcFGznEFP_VFRzxukwH2JH_2nNpAjh-V8V4bM_Vc4ermiGTVykiuBkmpMA810JA-OQA8d029i9H8UAlan4xY8vbIf8dME96s8joeqpGx_5V0TzUC-Dr8PhIC2DAuuBRCWE_QgNEy-E-ECOMhH4lIKaOTR6IE1ySBbTAcf_ajMCZCsO4')` }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Join the Lucky Draw and Win Big!
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Participate in exciting draws and stand a chance to win amazing prizes. It's easy, fun, and rewarding!
                </h2>
              </div>
              <div className="flex gap-3 mt-2">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#fac638] text-[#1c180d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  onClick={onSignIn}
                >
                  <span className="truncate">Sign In</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-8 px-4 @[480px]:h-10 @[480px]:px-5 bg-[#fac638] text-[#1c180d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  onClick={onSignUp}
                >
                  <span className="truncate">Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Draws</h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {/* Card 1 */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded flex flex-col"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKomrofjb458Jg0uq9itgp92kYJkCmBrP3tiI6DeyqbdP4Ajp3qfpo0tn_epYClk-YFUWieZBHh1QJG5-uS-V6i36x22FNVfW7pv2tSBi0qkY6uHXF13YwkhUTvNosd4MVPDY5Thk5TOCmxXhCeAi64lHZtfU_-MRPWAwo9Awcv_QUd3qCywBLCdauqq52dQCvhAkvZZ_eYiPJ18VNppgYI3IYm4RirUWEv7Kex2tWWF2TJkZQaqzvp_61JKhjVEfSP6fgJ0SxzRA')` }}
              ></div>
              <div>
                <p className="text-[#1c180d] text-base font-medium leading-normal">Mega Millions</p>
                <p className="text-[#9e8747] text-sm font-normal leading-normal">12,345 participants</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded flex flex-col"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDo-xXODpmgNEM-LUwVhBQpjHnmEUy20-Il4WDleUdODZcy8c-3bUwe-2sRwJ4CY0RMECWu2JITk6RNURX5UBv7dLsAZsgvAwT1drnhde2EH5cJ_7X4aEaHonLvjk7bImsFQ3UCXdCCmRaaDIRCznnKQqbyl9eyc6p4F1FpahN1JtY7a-xNXI3id9VHuz2IqBV74bm3zlxaRgjvHZ8CP_D8P2rwo-z7pEjrSVrbQW1bDiX_Rzn9rVpnokCGizjNyxl0WiSIMl8haQY')` }}
              ></div>
              <div>
                <p className="text-[#1c180d] text-base font-medium leading-normal">Powerball</p>
                <p className="text-[#9e8747] text-sm font-normal leading-normal">8,765 participants</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded flex flex-col"
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2YBz_0ph4eB2PKi4ZbARnUUoVYi6HnJUV5q09IjUx_0tvibPfRPYLLSUhf5QAJ7aj8E3_RmxKiy2UxkquazEtO1gG3E9nX2RG-KtcKu0SNpI5us3nPTEWm39xS9Z8HzLbsOWqCTjHKCMLeq2_wZOO2rfxUO0RMqwRN28B-MVkysd0y1bfkZggo1v_r10Pp6JwWjr0gNzwIaDK5-rbdKE3ZduNk4Q-sawtb3daPzYS3yQxL1JBTgy2GD-uQUmQD_9T4sSIJsBJCN8')` }}
              ></div>
              <div>
                <p className="text-[#1c180d] text-base font-medium leading-normal">Lucky 7</p>
                <p className="text-[#9e8747] text-sm font-normal leading-normal">5,432 participants</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How It Works</h2>
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[#1c180d]">
              {/* Step Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z" />
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#e9e2ce] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-[#1c180d] text-base font-medium leading-normal">Sign Up</p></div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[1.5px] bg-[#e9e2ce] h-2"></div>
            <div className="text-[#1c180d]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z" />
              </svg>
            </div>
            <div className="w-[1.5px] bg-[#e9e2ce] h-2 grow"></div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-[#1c180d] text-base font-medium leading-normal">Choose a Lottery</p></div>
          <div className="flex flex-col items-center gap-1 pb-3">
            <div className="w-[1.5px] bg-[#e9e2ce] h-2"></div>
            <div className="text-[#1c180d]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm73.52,90.63,21-30A8,8,0,0,0,240,104H192a8,8,0,0,0,0,16h32.63l-19.18,27.41A8,8,0,0,0,212,160a20,20,0,1,1-14.29,34,8,8,0,1,0-11.42,11.19A36,36,0,0,0,248,180,36.07,36.07,0,0,0,225.52,146.63Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-1 flex-col pt-3 pb-5"><p className="text-[#1c180d] text-base font-medium leading-normal">Enter and Wait for the Draw</p></div>
        </div>
        <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Winners</h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-8">
            {/* Winner 1 */}
            <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"></div>
              <div>
                <p className="text-[#1c180d] text-base font-medium leading-normal">Sophia Clark</p>
                <p className="text-[#9e8747] text-sm font-normal leading-normal">Won $10,000 in Mega Millions</p>
              </div>
            </div>
            {/* Winner 2 */}
            <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"></div>
              <div>
                <p className="text-[#1c180d] text-base font-medium leading-normal">Ethan Miller</p>
                <p className="text-[#9e8747] text-sm font-normal leading-normal">Won $5,000 in Powerball</p>
              </div>
            </div>
            {/* Winner 3 */}
            <div className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-32 pt-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-full"></div>
              <div>
                <p className="text-[#1c180d] text-base font-medium leading-normal">Olivia Davis</p>
                <p className="text-[#9e8747] text-sm font-normal leading-normal">Won $2,500 in Lucky 7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#1c180d] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Ready to try your luck?
              </h1>
              <p className="text-[#1c180d] text-base font-normal leading-normal max-w-[720px]">Sign up today and start participating in our exciting draws!</p>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex justify-center">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#fac638] text-[#1c180d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                  onClick={() => onSignIn()}
                >
                  <span className="truncate">Join Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LotteryPage({ goToLanding }: { goToLanding: () => void }) {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Newsreader, Noto Sans, sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-[#fcfbf8] p-4 pb-2 justify-between">
          <h2 className="text-[#1c180d] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Luck Draw</h2>
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 bg-transparent text-[#1c180d] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <div className="text-[#1c180d]">
                {/* Bell Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <h2 className="text-[#1c180d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Active Lotteries</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {/* بطاقة 1 */}
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-square"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl752CTGTud1_fg5nxeREBrXO7d0_iq3g8R5j-bRNycNM5eVwfikSOqmdWahyTHVNSMoNbdFq2T7rthh3pXQge-h8-NERDNewGacQl8KEH8byRVc_gdYBB2ZV-cxrnhfw4URJXn0Iqgjeso4tDwX4Z4guGe5RByYqPmbAPQ74k08MC-Br2XoTGCmRNMjZTK-bOSKLgarv5xwxGI2TdyY99pesf7r45ZyxcbR-qkYfPafzRad1Y7WQkPK0_Bw6KaguQWRahGcCkQfY')` }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">$1000 Prize</p>
          </div>
          {/* بطاقة 2 */}
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-square"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRNZH9o6xSmq-pQKLUZypwpksU77inRtUepFjadw90arcEsG9CZEI3f8084g4RfpEaahosBmzBVltggXvQ4LPk7S8ECoCypuMAMAb05VgmgmyhWp-lnTv-bysdKKHiPknZ5_c_TU7pKHYKMwminVALOxa-LJOUvIZEJyujkHSnrQWNVSzOrJIlX9ccynIL9B4KTv5kNbsDqIKPwkRPwhrFiuhDTCnTswoQ2wrhQ_jNg2xjxn1dXe79g3H6uOyIfL7LeFa4aKiv-WI')` }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">$500 Prize</p>
          </div>
          {/* بطاقة 3 */}
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-square"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmcXnH6lX9rD2e9IDpyI58iSBvcUiAWdBf_-aFPmYChcSw-Xf3lS_lPpnIlOf-XYowlchLaw1k9YLs5976zNLNTDAg8M9XEIIh-y0TRZtB6kKeJo7Py1m7Ci4vD6iOzfmYZLhM1HT804IQk_jLm1qKwmtZGDIqxbALjrmFtKKQJKASF2WjlYoFpO69hFui2KtRL7ZHXVNUIvrbWlXNUkT_7pSjVLM6Z_ZCylDv_pFVI8v53O8dfWIQJ8lDRx8R6knCmoYgkd93AUk')` }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">$250 Prize</p>
          </div>
          {/* بطاقة 4 */}
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-square"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuANixAZvepcpqTEtqCpGjVWARYH3km4M7cohs_63yCuCFutOov-_AR83IiMs2heN-qZvIEM1Xp0XsEiBnlFmDs1sJ-fNJwPwVq3B1G083NrYbwMxiS9Us119vjKxw5IyI06oihrlZKuJOCpUZ-z-h_NGEHnA0GfipuVXsxKom3UL44k805s7mho5Avdt1gYyJRja0ITPft8SZNGHu5Qas126fzaOqMsizQb_TjH1k2lpMXzQSEQmEIyBu9QUHbuv03smdwGzkiuRHA')` }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">$100 Prize</p>
          </div>
          {/* بطاقة 5 */}
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-square"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWI0X2-RAiBtWz7UpWQPK8QMpfk4pNYnUpt-K7cMpdh7j3ZEm4ribePjTgWNIKDemOvUMTf3CPMOfvkHcXL8HjgwyNf_aDt3Z066T8nxViAHr-K-Uaniv1NH7uanvFXbuyhx9StGrF0N-UtTPw-npUSdyAuOWY171LMLV2WsjCJFD_bqO3Rd5eniQ_0Vvg-s3aJ1nWAc4O4i-I-ZcH9nSU_90QuyWzZHLarXm8MrHdPNSnuUq_yI1QH0Bb1S16hgrAAifP33UEz0Q')` }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">$50 Prize</p>
          </div>
          {/* بطاقة 6 */}
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded justify-end p-4 aspect-square"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7pZSi_EDBLEiwp6f-smBCRlOlHrDaXKI9_4Fz-CA6HB6onicMlvzhy8HYYDLrRWqiasUR-KUOa6ljx0KUej4FR3ZZpNj0m8QnKUB2OvM5GTY_asAVD2EdAwTlD8XTHQUpmCHW6-G3C_eCq4OKhdG5vqt5Mm_fIhLpMbiDhDbbQgqE4pLI92KNTKvKr9Gs8al9CG5-Gvb9LQyp3PyHbPyooOxaysh7PdFWNuzRCOK0-w8xq6ydkeU7s93q-4xoCTHfEpTsxx5Y4oA')` }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">$25 Prize</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// مكون صفحة My Cards
function MyCardsPage({ goToLanding }: { goToLanding: () => void }) {
  // بيانات وهمية للبطاقات
  const activeCards = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_X6zsnLoWnUOgePuCwyqYVCkVw34RbEGI4r4pIhzn9G_cvCmvfoNiP_nyIaWGADPmW_diI7aaB9pYP1henk6iZCT-WSUfF6fc8KLWd7D77FOzH0sMo69yWXoff3_Fl_ZbTlNv8CjRbr2guAeFlFG0nDLdW9EwBM39IOOhGRrVA5MXBuR0pUTn4u24iH9wVbO7wIvfKQWZ1lSOxHiqJhYStFC4aCpcxTXOyh6HQrWsknReVV0K-j3nPTBKD4ix8jRj06xLkg6qAGE',
      amount: 100,
      number: '1234567890',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASq5eZtCi4B1vM9EKmQDc_M-W1u0NnQOMVbqDQzsU-7mLdlMbnY1o9CgTR_Z99MYRKHRh5aY4LFhGB5ULGWRxHxTLTfmhzhCrbjdyTCw6_PDdqAEmxg7t-LlYpOUBTDHVUeK0Pgw6vsBhc-_hbXmNCVk-j7t_b7zPpOoi6Bqhw-4j9Ka4SKbj-3E0XAlrD1iV0Z4Tjv9wLHAxBdn1OlnU2Vv859LVUFvE3SO9WfSaVPFqVI4dz-qfvjT4YoOzXSbSFKl7hf85tMg4',
      amount: 50,
      number: '9876543210',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf5MBWnAKkd2TxkiFp6CJTE13g2AUkuJnSvZFphsZnZKvGe9o_wszZUG0BdMtJheR_c1pBiqzyIEJpxpUCg63s1RPQICq_HbyUwj1OP8ZYys6bQ2wdU4Hf71kpcBiXn3ddByD1o_IfeNOqrFLja6lM3ktUXZ2k5kyS6upNxb_tEK2iIGn4N2eKLWGD1OalKAQRxjAxZL3xOSPxXcIEl3K0k2AXOyes0Sjw6HJsVlvc-_sPZ_EaJF0OYyPV4Nz6JJ5M3Z-hrOIuRSc',
      amount: 200,
      number: '1122334455',
    },
  ];
  const inactiveCards = [
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb2flYjOL-zRApfuTNK1Ezn39sOEJ4akmp8PFBG9hnJKxNPaFB1R7f-2HFHGSz2nS6d1NzC49dzOIc1jjlkxs0KqC1IiBgfjKE9M-fNw0yVk6YLrrAqM3WP9ZSzwfi9CqZgReN92rjwc4n1g6xly3KMBR92yfqyDBShNtDK_DHwlunfRBB8VxrsJl6g9unCwx68IGQ99seeDePQopzkeCFVSwL5vAuSVxTtVeTDyyQzuSs4RCBTt53VCVstIaPjhF__mV9yvgx-Ms',
      amount: 0,
      number: '5544332211',
    },
    {
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHkwIuOshQ_61ZD7R7xWmZc0epwJ285fIqkM0a38x-SWnwYsdX9ULi3W5H_tnBQukjr5iEQQZW_kCrPeQ3nPGyHosqwx_BH0uY-E_3RuNFJBP6-StEOkbe5F4gFWVa3boYKepJ6atAhK0ODsYxRIbEaiCIfXRinXgz_d5nHHdHIHlAPFtlYFSFa46LVBCVqbnBc_2bGxeFPv5OeieIfiiVriKxLCnrBsmrjEMldIDjOqFpsaCgQLrnu8GSZhBeyb3BUBgsL-xFeZI',
      amount: 0,
      number: '6677889900',
    },
  ];
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Newsreader, Noto Sans, sans-serif' }}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button onClick={goToLanding} className="text-[#181611] flex size-12 shrink-0 items-center">
            {/* Back Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">My Cards</h2>
        </div>
        <h3 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Active Cards</h3>
        {activeCards.map(card => (
          <div key={card.number} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: `url('${card.img}')` }}></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Winning Amount: ${card.amount}</p>
                <p className="text-[#8c7f5f] text-sm font-normal leading-normal line-clamp-2">Card Number: {card.number}</p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="text-[#181611] flex size-7 items-center justify-center" title="Copy Card Number" onClick={() => {
                navigator.clipboard.writeText(card.number);
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
              }}>
                {/* Copy Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <h3 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Inactive Cards</h3>
        {inactiveCards.map(card => (
          <div key={card.number} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14" style={{ backgroundImage: `url('${card.img}')` }}></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Winning Amount: ${card.amount}</p>
                <p className="text-[#8c7f5f] text-sm font-normal leading-normal line-clamp-2">Card Number: {card.number}</p>
              </div>
            </div>
            <div className="shrink-0">
              <button className="text-[#181611] flex size-7 items-center justify-center" title="Copy Card Number" onClick={() => {
                navigator.clipboard.writeText(card.number);
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
              }}>
                {/* Copy Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {copied && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#181611] text-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold z-50 transition-opacity duration-300">Copied!</div>
      )}
    </div>
  );
}

// تعريف مؤقت لمكون CheckCardsPage
function CheckCardsPage({ goToLanding, goToMyCards }: { goToLanding: () => void, goToMyCards: () => void }) {
  // بيانات وهمية للبطاقات المفتوحة
  const openedCards = [
    { number: '1234567890', opened: '2024-01-01', expires: '2 days' },
    { number: '9876543210', opened: '2024-01-02', expires: '1 day' },
  ];
  const [inputCard, setInputCard] = useState("");
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCountdownActive, setIsCountdownActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isCountdownActive) {
        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        const diff = endOfMonth.getTime() - now.getTime();
        if (diff <= 0) {
          setIsCountdownActive(false);
          clearInterval(timer);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setCountdown({ days, hours, minutes, seconds });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isCountdownActive]);

  return (
    <div className="relative flex min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Newsreader, Noto Sans, sans-serif' }}>
      <div className="flex flex-col items-center w-full max-w-md mx-auto pt-6 pb-2 px-2">
        <h2 className="text-[#181611] text-2xl font-bold leading-tight tracking-[-0.015em] mb-2 text-center">Check Card</h2>
        <div className="flex flex-col items-center justify-center py-2 w-full">
          <div className="flex gap-2 text-[#181611] text-base font-bold">
            <span>{countdown.days}d</span>
            <span>{countdown.hours}h</span>
            <span>{countdown.minutes}m</span>
            <span>{countdown.seconds}s</span>
          </div>
          <div className="text-[#8c7f5f] text-xs font-normal mt-1">Time left until the end of the month</div>
        </div>
        <div className="w-full mt-6">
          <label className="flex flex-col min-w-40 flex-1 relative">
            <input
              placeholder="Enter your card number"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181611] focus:outline-0 focus:ring-0 border-none bg-[#f5f3f0] focus:border-none h-14 placeholder:text-[#8c7f5f] p-4 text-base font-normal leading-normal pr-12"
              value={inputCard}
              onChange={e => setInputCard(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8c7f5f] bg-[#f5f3f0] rounded-full p-1 hover:bg-[#ede7d9] focus:outline-none"
              title="Paste Card Number"
              onClick={async () => {
                try {
                  const text = await navigator.clipboard.readText();
                  setInputCard(text);
                } catch {}
              }}
            >
              {/* Paste Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H176V24a16,16,0,0,0-32,0v8H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32ZM120,24a8,8,0,0,1,16,0v8H120ZM208,216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8ZM88,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,104Zm0,32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,136Zm0,32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,168Z"/></svg>
            </button>
          </label>
          <button
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#fac638] text-[#1c180d] text-base font-bold leading-normal tracking-[0.015em] mt-4 shadow-sm hover:bg-[#f9d96b] transition"
            type="button"
          >
            Check
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-6 w-full">
        <h2 className="text-[#181611] text-2xl font-bold leading-tight tracking-[-0.015em] mb-2 text-center">Cards opened in the last month</h2>
        {openedCards.map(card => (
          <div key={card.number} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Card #{card.number}</p>
              <p className="text-[#8c7f5f] text-sm font-normal leading-normal line-clamp-2">Opened on {card.opened}</p>
            </div>
            <div className="shrink-0"><p className="text-[#181611] text-base font-normal leading-normal">Expires in {card.expires}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfilePage({ goToLanding, goToLottery }: { goToLanding: () => void, goToLottery: () => void }) {
  // بيانات وهمية مطابقة لحقول التسجيل
  const profile = {
    name: 'Ethan Carter',
    country: 'United States',
    birthday: '01/01/1990',
    email: 'ethan.carter@email.com',
    phone: '+1 555-123-4567',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApyUHOkU_kXHiCkhoUKKr60FwdM1W7E4iR0liBezaLmUphwakLdg0kpa_9NcPR-Fz5xrfLreTx_z6_jsNO2Ji4cUS3X12VHzlfO3h30-o7XR0oVVnlZtgjOgNoUizMKE1DKtcE95PGhdiukS7IFfOI5HTyAHc6Ztlc7r59qW0C7gIYRuxCKx0FblPS5bpAJG8yn-yjHRYG2vzxHcmu3yfM6W3mSWS-lA4FA6e2Faj6Li9qB-Ob83pbG4K_6NdRblX6t9qPIpNjKpY',
  };
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Newsreader, Noto Sans, sans-serif' }}>
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <button onClick={goToLanding} className="text-[#181611] flex size-12 shrink-0 items-center">
            {/* Back Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Profile</h2>
        </div>
        <div className="flex flex-col items-center gap-4 p-4 @container">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" style={{ backgroundImage: `url('${profile.photo}')` }}></div>
          <p className="text-[#181611] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{profile.name}</p>
        </div>
        {/* معلومات التواصل */}
        <div className="flex flex-col gap-2 bg-white px-4">
          <div className="flex items-center gap-4 min-h-[56px] py-2">
            <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12">
              {/* Envelope Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Email</p>
              <p className="text-[#8c805f] text-sm font-normal leading-normal line-clamp-2">{profile.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 min-h-[56px] py-2">
            <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12">
              {/* Country Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><circle cx="128" cy="128" r="96" stroke="#8c805f" strokeWidth="8" fill="none" /><circle cx="128" cy="128" r="56" fill="#8c805f" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Country</p>
              <p className="text-[#8c805f] text-sm font-normal leading-normal line-clamp-2">{profile.country}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 min-h-[56px] py-2">
            <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12">
              {/* Birthday Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><rect x="40" y="56" width="176" height="160" rx="16" fill="none" stroke="#8c805f" strokeWidth="8" /><circle cx="128" cy="128" r="32" fill="#8c805f" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Birthday</p>
              <p className="text-[#8c805f] text-sm font-normal leading-normal line-clamp-2">{profile.birthday}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 min-h-[56px] py-2">
            <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-12">
              {/* Phone Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><rect x="56" y="40" width="144" height="176" rx="16" fill="none" stroke="#8c805f" strokeWidth="8" /><rect x="96" y="176" width="64" height="24" rx="8" fill="#8c805f" /></svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">Phone</p>
              <p className="text-[#8c805f] text-sm font-normal leading-normal line-clamp-2">{profile.phone}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-14 mt-2">
          <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f5f3f0] shrink-0 size-10">
            {/* Lock Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z" />
            </svg>
          </div>
          <p className="text-[#181611] text-base font-normal leading-normal flex-1 truncate">Change Password</p>
        </div>
      </div>
    </div>
  );
}

function Modal({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw]" onClick={e => e.stopPropagation()}>
        {children}
        <button className="mt-4 text-[#8c805f] text-sm underline" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function SignInModal({ open, onClose, onSignUp }: { open: boolean, onClose: () => void, onSignUp?: () => void }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col min-w-[320px] max-w-[480px]">
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#181611] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">Luck Draw</h2>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input placeholder="Email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181611] focus:outline-0 focus:ring-0 border-none bg-[#f5f3f0] focus:border-none h-14 placeholder:text-[#8c7f5f] p-4 text-base font-normal leading-normal" />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input placeholder="Password" type="password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181611] focus:outline-0 focus:ring-0 border-none bg-[#f5f3f0] focus:border-none h-14 placeholder:text-[#8c7f5f] p-4 text-base font-normal leading-normal" />
          </label>
        </div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#f9ba1a] text-[#181611] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Log In</span>
          </button>
        </div>
        <div className="flex px-4 py-3">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#f5f3f0] text-[#181611] gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]">
            <div className="text-[#181611]">
              {/* Google Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
              </svg>
            </div>
            <span className="truncate">Sign in with Google</span>
          </button>
        </div>
        <p className="text-[#8c7f5f] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer" onClick={onSignUp}>Don't have an account? Sign Up</p>
      </div>
    </Modal>
  );
}

function SignUpModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-full max-w-xs max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-lg p-2 sm:p-4">
        <div className="flex items-center bg-white p-2 pb-2 justify-between">
          <button onClick={onClose} className="text-[#171512] flex size-10 shrink-0 items-center">
            {/* Back Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>
          <h2 className="text-[#171512] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-8">Sign Up</h2>
        </div>
        <div className="flex flex-wrap items-end gap-3 px-2 py-2">
          <label className="flex flex-col min-w-0 flex-1">
            <input placeholder="Full Name" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171512] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f1] focus:border-none h-12 placeholder:text-[#827b68] p-3 text-base font-normal leading-normal" />
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-3 px-2 py-2">
          <label className="flex flex-col min-w-0 flex-1">
            <input placeholder="Email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171512] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f1] focus:border-none h-12 placeholder:text-[#827b68] p-3 text-base font-normal leading-normal" />
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-3 px-2 py-2">
          <label className="flex flex-col min-w-0 flex-1">
            <input placeholder="Password" type="password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171512] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f1] focus:border-none h-12 placeholder:text-[#827b68] p-3 text-base font-normal leading-normal" />
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-3 px-2 py-2">
          <label className="flex flex-col min-w-0 flex-1">
            <input placeholder="Confirm Password" type="password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171512] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f1] focus:border-none h-12 placeholder:text-[#827b68] p-3 text-base font-normal leading-normal" />
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-3 px-2 py-2">
          <label className="flex flex-col min-w-0 flex-1">
            <input placeholder="Country" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171512] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f1] focus:border-none h-12 placeholder:text-[#827b68] p-3 text-base font-normal leading-normal" />
          </label>
          <label className="flex flex-col min-w-0 flex-1">
            <input placeholder="Phone Number" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171512] focus:outline-0 focus:ring-0 border-none bg-[#f4f3f1] focus:border-none h-12 placeholder:text-[#827b68] p-3 text-base font-normal leading-normal" />
          </label>
        </div>
        <h3 className="text-[#171512] text-lg font-bold leading-tight tracking-[-0.015em] px-2 pb-2 pt-3">Profile Photo</h3>
        <div className="flex flex-col p-2">
          <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-[#e4e2dd] px-4 py-8">
            <div className="flex flex-col items-center gap-1">
              <p className="text-[#171512] text-base font-bold leading-tight tracking-[-0.015em] text-center">Upload Photo</p>
              <p className="text-[#171512] text-xs font-normal leading-normal text-center">Add a profile photo to personalize your account.</p>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-[#f4f3f1] text-[#171512] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Upload</span>
            </button>
          </div>
        </div>
        <div className="px-2">
          <label className="flex gap-x-2 py-2 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#e4e2dd] border-2 bg-transparent text-[#f9f5eb] checked:bg-[#f9f5eb] checked:border-[#f9f5eb] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#e4e2dd] focus:outline-none"
            />
            <p className="text-[#171512] text-sm font-normal leading-normal">I agree to the Terms of Service and Privacy Policy</p>
          </label>
        </div>
        <div className="flex px-2 py-2">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 flex-1 bg-[#f9f5eb] text-[#171512] text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Sign Up</span>
          </button>
        </div>
        <p className="text-[#827b68] text-xs font-normal leading-normal pb-2 pt-1 px-2 text-center underline">Already have an account? Sign In</p>
      </div>
    </Modal>
  );
}

function InfoModal({ open, onClose, title, children }: { open: boolean, onClose: () => void, title: string, children: React.ReactNode }) {
  if (!open) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <div className="relative bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw]">
        <button className="absolute top-2 right-2 text-[#8c805f] text-xl font-bold" onClick={onClose} aria-label="Close">×</button>
        <h2 className="text-lg font-bold mb-4 text-[#181611]">{title}</h2>
        <div className="text-[#181611] text-base">{children}</div>
      </div>
    </Modal>
  );
}

function App() {
  const [page, setPage] = useState<'landing' | 'lottery' | 'mycards' | 'checkcards' | 'profile'>('landing');
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9]">
      {page === 'landing' && <LandingPage onSignIn={() => setShowSignIn(true)} onSignUp={() => setShowSignUp(true)} />}
      {page === 'lottery' && <LotteryPage goToLanding={() => setPage('landing')} />}
      {page === 'mycards' && <MyCardsPage goToLanding={() => setPage('landing')} />}
      {page === 'checkcards' && <CheckCardsPage goToLanding={() => setPage('landing')} goToMyCards={() => setPage('mycards')} />}
      {page === 'profile' && <ProfilePage goToLanding={() => setPage('landing')} goToLottery={() => setPage('lottery')} />}
      {/* Bottom Navigation يظهر في جميع الصفحات */}
      <div className="relative">
        <div className="flex gap-2 border-t border-[#f1f0e9] bg-[#fbfbf9] px-4 pb-3 pt-2">
          <button 
            className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${page === 'landing' ? 'text-[#191810]' : 'text-[#8e8557]'}`}
            onClick={() => setPage('landing')}
          >
            <div className={`flex h-8 items-center justify-center ${page === 'landing' ? 'text-[#191810]' : 'text-[#8e8557]'}`}> {/* Home Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z" />
              </svg>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </button>
          <button 
            className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${page === 'lottery' ? 'text-[#191810]' : 'text-[#8e8557]'}`}
            onClick={() => setPage('lottery')}
          >
            <div className={`flex h-8 items-center justify-center ${page === 'lottery' ? 'text-[#191810]' : 'text-[#8e8557]'}`}> {/* Lottery Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M227.19,104.48A16,16,0,0,0,240,88.81V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V88.81a16,16,0,0,0,12.81,15.67,24,24,0,0,1,0,47A16,16,0,0,0,16,167.19V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V167.19a16,16,0,0,0-12.81-15.67,24,24,0,0,1,0-47ZM32,167.2a40,40,0,0,0,0-78.39V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.39Z" />
              </svg>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Lottery</p>
          </button>
          <button 
            className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${page === 'mycards' ? 'text-[#191810]' : 'text-[#8e8557]'}`}
            onClick={() => setPage('mycards')}
          >
            <div className={`flex h-8 items-center justify-center ${page === 'mycards' ? 'text-[#191810]' : 'text-[#8e8557]'}`}> {/* My Cards Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <rect x="32" y="56" width="192" height="144" rx="16" fill="none" stroke="currentColor" strokeWidth="16" />
                <rect x="64" y="88" width="128" height="80" rx="8" fill="currentColor" />
              </svg>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">My Cards</p>
          </button>
          <button 
            className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${page === 'checkcards' ? 'text-[#191810]' : 'text-[#8e8557]'}`}
            onClick={() => setPage('checkcards')}
          >
            <div className={`flex h-8 items-center justify-center ${page === 'checkcards' ? 'text-[#191810]' : 'text-[#8e8557]'}`}> {/* Check Cards Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <rect x="32" y="56" width="192" height="144" rx="16" fill="none" stroke="currentColor" strokeWidth="16" />
                <polyline points="96 144 128 176 192 112" fill="none" stroke="#191810" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Check Cards</p>
          </button>
          <button 
            className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${page === 'profile' ? 'text-[#191810]' : 'text-[#8e8557]'}`}
            onClick={() => setPage('profile')}
          >
            <div className={`flex h-8 items-center justify-center ${page === 'profile' ? 'text-[#191810]' : 'text-[#8e8557]'}`}> {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
              </svg>
            </div>
            <p className="text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </button>
        </div>
        <div className="h-5 bg-[#fbfbf9]"></div>
        <SignInModal open={showSignIn} onClose={() => setShowSignIn(false)} onSignUp={() => setShowSignUp(true)} />
        <SignUpModal open={showSignUp} onClose={() => setShowSignUp(false)} />
        <footer className="flex flex-col gap-3 px-2 py-4 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-3 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-[#9e8747] text-sm font-normal leading-normal min-w-24" href="javascript:void(0)" onClick={e => {e.preventDefault(); setShowAbout(true);}}>About Us</a>
            <a className="text-[#9e8747] text-sm font-normal leading-normal min-w-24" href="javascript:void(0)" onClick={e => {e.preventDefault(); setShowContact(true);}}>Contact</a>
            <a className="text-[#9e8747] text-sm font-normal leading-normal min-w-24" href="javascript:void(0)" onClick={e => {e.preventDefault(); setShowTerms(true);}}>Terms of Service</a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <a href="https://twitter.com/">
              <div className="text-[#9e8747]">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                </svg>
              </div>
            </a>
            <a href="https://facebook.com/">
              <div className="text-[#9e8747]">
                {/* Facebook Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </div>
            </a>
            <a href="https://instagram.com/">
              <div className="text-[#9e8747]">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </div>
            </a>
          </div>
          <p className="text-[#9e8747] text-xs font-normal leading-normal mt-2">© 2024 Lucky Draw. All rights reserved.</p>
        </footer>
        <InfoModal open={showAbout} onClose={() => setShowAbout(false)} title="About Us">
          <p>This is a demo About Us page. You can add your company info here.</p>
        </InfoModal>
        <InfoModal open={showContact} onClose={() => setShowContact(false)} title="Contact">
          <p>Contact us at: <a href="mailto:info@example.com" className="underline">info@example.com</a></p>
        </InfoModal>
        <InfoModal open={showTerms} onClose={() => setShowTerms(false)} title="Terms of Service">
          <p>These are the terms of service. You can add your legal text here.</p>
        </InfoModal>
      </div>
    </div>
  );
}

export default App;
