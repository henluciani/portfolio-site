import { Suspense } from 'react';
import Image from 'next/image';
import vercel from 'public/images/vercel.png';
import avatar from 'app/avatar.png';
import { PreloadResources } from 'app/preload';
import LottieFromURL from './components/LottieFromURL';


function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
           
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}



export default function Page() {
  return (
    <section>

<section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      
      <LottieFromURL url='https://lottie.host/379f5e6b-5016-45d2-9e0c-3aa8afd7b880/QxPBubywXq.json' />
      
      <p className='text-neutral-400 text-sm'>I make cool designs on <Badge href="https://figma.com">
        <svg width="9" height="13" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_137)">
<path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
<path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5H0Z" fill="#0ACF83"/>
<path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z" fill="#FF7262"/>
<path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5H0Z" fill="#F24E1E"/>
<path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5H0Z" fill="#A259FF"/>
</g>
<defs>
<clipPath id="clip0_1_137">
<rect width="38" height="57" fill="white"/>
</clipPath>
</defs>
</svg>
            Figma
          </Badge>. <br/>Then I bring them to life with <Badge href="https://react.dev">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#react" />
            </svg>
            React
          </Badge> or <Badge href="https://reactnative.dev">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#react" />
            </svg>
            React Native
          </Badge> . </p>
      
    </section>

      <PreloadResources />

      <section className="my-12">
  <div className="overflow-x-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
      <div className="p-2">
        <h3 className="font-medium text-lg mb-2">basics</h3>
        <div className="flex flex-col space-y-2">
        <Badge href="https://figma.com">
        <svg width="9" height="13" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_137)">
<path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
<path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5H0Z" fill="#0ACF83"/>
<path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0L19 0Z" fill="#FF7262"/>
<path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5H0Z" fill="#F24E1E"/>
<path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5H0Z" fill="#A259FF"/>
</g>
<defs>
<clipPath id="clip0_1_137">
<rect width="38" height="57" fill="white"/>
</clipPath>
</defs>
</svg>
            Figma
          </Badge>
          <Badge href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
          <svg width="15" height="15" viewBox="-52.5 0 361 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"/><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529"/><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z"/><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF"/></svg>
            HTML
          </Badge>
          <Badge href="https://rhttps://developer.mozilla.org/pt-BR/docs/Web/CSSeact.dev">
<svg width="15" height="15" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
<path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
<path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
</svg>
            CSS
          </Badge>
          <Badge href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" width="15" height="15">
  <rect width="100%" height="100%" rx="15%" fill="#f7df1e"/>
  <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" fill="#000"/>
</svg>


            JavaScript
          </Badge>
          <Badge href="https://www.typescriptlang.org/">
          <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    width="15" // Adjust width as needed
    height="15" // Adjust height as needed
  >
    <g>
      <polygon
        fill="#007ACC"
        transform="translate(128, 128) scale(1, -1) translate(-128, -128)"
        points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
      />
      <path
        d="M146.658,223.437 L146.739,212.953 L130.079,212.953 L113.419,212.953 L113.419,165.613 L113.419,118.274 L101.635,118.274 L89.851,118.274 L89.851,165.613 L89.851,212.953 L73.190,212.953 L56.530,212.953 L56.530,223.234 C56.530,228.923 56.652,233.677 56.814,233.799 C56.936,233.961 77.213,234.043 101.797,234.002 L146.536,233.880 L146.658,223.437 Z"
        fill="#FFFFFF"
        transform="translate(101.635, 176.143) rotate(-180) translate(-101.635, -176.143)"
      />
      <path
        d="M206.567,234.272 C213.068,232.647 218.026,229.762 222.577,225.048 C224.934,222.529 228.428,217.937 228.713,216.840 C228.794,216.515 217.660,209.038 210.915,204.852 C210.671,204.690 209.696,205.746 208.598,207.372 C205.307,212.167 201.853,214.239 196.570,214.605 C188.809,215.133 183.811,211.070 183.852,204.284 C183.852,202.292 184.136,201.114 184.949,199.489 C186.656,195.953 189.825,193.840 199.781,189.533 C218.107,181.650 225.949,176.449 230.826,169.053 C236.271,160.804 237.490,147.638 233.792,137.845 C229.729,127.199 219.651,119.966 205.469,117.569 C201.081,116.797 190.678,116.918 185.965,117.772 C175.684,119.600 165.932,124.680 159.918,131.344 C157.561,133.945 152.969,140.731 153.254,141.218 C153.376,141.381 154.432,142.031 155.610,142.722 C156.748,143.372 161.056,145.851 165.119,148.207 L172.474,152.474 L174.018,150.198 C176.172,146.907 180.885,142.397 183.730,140.893 C191.897,136.586 203.113,137.195 208.639,142.153 C210.996,144.306 211.971,146.541 211.971,149.833 C211.971,152.799 211.605,154.099 210.061,156.334 C208.070,159.179 204.007,161.576 192.466,166.574 C179.260,172.263 173.571,175.798 168.370,181.406 C165.363,184.657 162.518,189.858 161.340,194.206 C160.365,197.823 160.121,206.884 160.893,210.541 C163.616,223.301 173.246,232.200 187.143,234.841 C191.654,235.694 202.137,235.369 206.567,234.272 Z"
        fill="#FFFFFF"
        transform="translate(194.579, 176.190) scale(1, -1) translate(-194.579, -176.190)"
      />
    </g>
  </svg>
            TypeScript
          </Badge>
          <Badge href="https://www.python.org/">
          <svg width="15" height="15" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
<defs>
<linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
<stop stop-color="#327EBD"/>
<stop offset="1" stop-color="#1565A7"/>
</linearGradient>
<linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDA4B"/>
<stop offset="1" stop-color="#F9C600"/>
</linearGradient>
</defs>
</svg>
            Python
          </Badge>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-medium text-lg mb-2">frameworks</h3>
        <div className="flex flex-col space-y-2">
          <Badge href="https://reactnative.dev/">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#react" />
            </svg>
            React Native
          </Badge>
          <Badge href="https://react.dev">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#react" />
            </svg>
            React
          </Badge>
          <Badge href="https://astro.build/">
          <svg width="15" height="15" viewBox="0 0 85 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5894 91.1365C22.7555 86.7178 21.3444 77.4335 23.3583 70.7072C26.8503 74.948 31.6888 76.2914 36.7005 77.0497C44.4375 78.2199 52.0359 77.7822 59.2232 74.2459C60.0454 73.841 60.8052 73.3027 61.7036 72.7574C62.378 74.714 62.5535 76.6892 62.318 78.6996C61.7452 83.5957 59.3086 87.3778 55.4332 90.2448C53.8835 91.3916 52.2437 92.4167 50.6432 93.4979C45.7262 96.8213 44.3959 100.718 46.2435 106.386C46.2874 106.525 46.3267 106.663 46.426 107C43.9155 105.876 42.0817 104.24 40.6845 102.089C39.2087 99.8193 38.5066 97.3081 38.4696 94.5909C38.4511 93.2686 38.4511 91.9345 38.2733 90.6309C37.8391 87.4527 36.3471 86.0297 33.5364 85.9478C30.6518 85.8636 28.37 87.6469 27.7649 90.4554C27.7187 90.6707 27.6517 90.8837 27.5847 91.1341L27.5894 91.1365Z" fill="white"/>
<path d="M27.5894 91.1365C22.7555 86.7178 21.3444 77.4335 23.3583 70.7072C26.8503 74.948 31.6888 76.2914 36.7005 77.0497C44.4375 78.2199 52.0359 77.7822 59.2232 74.2459C60.0454 73.841 60.8052 73.3027 61.7036 72.7574C62.378 74.714 62.5535 76.6892 62.318 78.6996C61.7452 83.5957 59.3086 87.3778 55.4332 90.2448C53.8835 91.3916 52.2437 92.4167 50.6432 93.4979C45.7262 96.8213 44.3959 100.718 46.2435 106.386C46.2874 106.525 46.3267 106.663 46.426 107C43.9155 105.876 42.0817 104.24 40.6845 102.089C39.2087 99.8193 38.5066 97.3081 38.4696 94.5909C38.4511 93.2686 38.4511 91.9345 38.2733 90.6309C37.8391 87.4527 36.3471 86.0297 33.5364 85.9478C30.6518 85.8636 28.37 87.6469 27.7649 90.4554C27.7187 90.6707 27.6517 90.8837 27.5847 91.1341L27.5894 91.1365Z" fill="url(#paint0_linear_1_59)"/>
<path d="M0 69.5866C0 69.5866 14.3139 62.6137 28.6678 62.6137L39.4901 29.1204C39.8953 27.5007 41.0783 26.3999 42.4139 26.3999C43.7495 26.3999 44.9325 27.5007 45.3377 29.1204L56.1601 62.6137C73.1601 62.6137 84.8278 69.5866 84.8278 69.5866C84.8278 69.5866 60.5145 3.35233 60.467 3.21944C59.7692 1.2612 58.5911 0 57.0029 0H27.8274C26.2392 0 25.1087 1.2612 24.3634 3.21944C24.3108 3.34983 0 69.5866 0 69.5866Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1_59" x1="22.4702" y1="107" x2="69.1451" y2="84.9468" gradientUnits="userSpaceOnUse">
<stop stop-color="#D83333"/>
<stop offset="1" stop-color="#F041FF"/>
</linearGradient>
</defs>
</svg>
            Astro
          </Badge>
          <Badge href="https://nextjs.org/">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#vercel" />
            </svg>
            NextJS
          </Badge>
          <Badge href="https://nextjs.org/">
          <svg width="15" height="15" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill='#44b78b' d="M14.135,4H18.1V22.169a26.218,26.218,0,0,1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322,0-4,2.673-6.6,6.816-6.6a6.448,6.448,0,0,1,1.724.2V4Zm0,9.142a3.992,3.992,0,0,0-1.337-.2c-2,0-3.163,1.223-3.163,3.366,0,2.087,1.107,3.239,3.138,3.239a9.355,9.355,0,0,0,1.362-.1v-6.3Z"/><path fill='#44b78b' d="M24.4,10.059v9.1c0,3.133-.235,4.639-.923,5.938A6.316,6.316,0,0,1,20.237,28l-3.678-1.733A5.708,5.708,0,0,0,19.7,23.638c.566-1.121.745-2.42.745-5.837V10.059Z"/></svg>
            Django
          </Badge>
          <Badge href="https://flask.palletsprojects.com/en/3.0.x/">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
  <rect width="100%" height="100%" fill="#38A8BE"/>
  <path fill="#fff" d="M5.86 13.38c1.49-.74 4.62-2.32 4.68-2.33h.04a.04.04 0 0 1 .04.03 5.31 5.31 0 0 0 3.06 2.9s1.07.44 2.52.28l.03-.01c.02-.03-.01-.07-.02-.16 0-.03.02-.05.03-.07.05-.05.49-.2.62-.25h.1l.12.07.45-.18a.25.25 0 0 1 .2 0c.13.12.42.6.42.6.05.1.13.23.09.35-.04.11-.15.17-.21.2-.02.02-.55.24-.56.25-.02.03-.03.11-.04.16a.1.1 0 0 1-.04.05 5.36 5.36 0 0 1-.75.28c-.04-.02-.06-.06-.07-.07-.03-.04-.05-.13-.06-.14l-.02-.02c-.23.12-.46.22-.7.3-.81.31-2.04.47-2.04.47a9.77 9.77 0 0 1-3.55-.02c-.3-.06-.8-.19-1.36-.43-1.87-.78-2.86-2.06-2.93-2.14l-.06-.05v-.03l.01-.04Zm-1.85-2.52a9.85 9.85 0 0 0 1.28 1.89l4.94-2.5v-.02a12.9 12.9 0 0 1-.3-.95s-.13-.45-.22-.9l-.02-.08c0-.02-.05-.02-.06-.02l-.04.02A401.2 401.2 0 0 1 4 10.86Zm5.11-7.58c-.08-.06-.21-.01-.25 0L1.93 6.24a.29.29 0 0 0-.17.18.27.27 0 0 0 .02.2c.34.63.5.88.59 1.07 0 .02.03.07.09.1h.12c.05 0 .11 0 .19-.02a10.97 10.97 0 0 0 .85 2.29l5.89-2.62V7.4a18.79 18.79 0 0 1-.33-4.03.18.18 0 0 0-.06-.1Z"/>
</svg>
            Flask
          </Badge>
        </div>
      </div>

    
      <div className="p-2">
        <h3 className="font-medium text-lg mb-2">utilities</h3>
        <div className="flex flex-col space-y-2">
          <Badge href="https://axios-http.com/ptbr/docs/intro">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 40 40' width="15" height="15"><path d="M55.4 22.08h-7.225l-4.25 7.055-4.122-7.055h-7.3l7.947 11.645-5.142 7.522-8.457-19.125h-6.375l10.54 23.714h7.947l4.972-7.522 4.93 7.522h6.502l-7.862-12.112z" fill="#fff"/><path d="M14.82 59.725H0L24.47 4.223H39.4z" fill="#0a99e0"/><path d="M49.137 59.725L64 59.778 39.4 4.222H24.47l24.668 55.502" fill="#222"/></svg>
            Axios
          </Badge>
          <Badge href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512" width="15" height="15">
  <rect width="100%" height="100%" rx="15%" fill="#f7df1e"/>
  <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" fill="#000"/>
</svg>
            Fetch
          </Badge>
          <Badge href="https://supabase.com/">
          <svg width="15" height="15" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"/>
<path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fill-opacity="0.2"/>
<path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
<defs>
<linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
<stop stop-color="#249361"/>
<stop offset="1" stop-color="#3ECF8E"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

            Supabase
          </Badge>
          <Badge href="https://vercel.com/">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#vercel" />
            </svg>
            Vercel/Netlify
          </Badge>
          <Badge href="https://www.prisma.io/">
          <svg width="15" height="15" viewBox="0 0 159 194" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.39749 123.139C0.476293 126.272 0.506027 130.226 2.47414 133.331L38.0964 189.524C40.4083 193.171 44.8647 194.834 49.0006 193.593L151.798 162.754C157.408 161.071 160.23 154.813 157.778 149.494L91.6953 6.14463C88.4726 -0.846183 78.7573 -1.42002 74.734 5.14279L2.39749 123.139ZM89.9395 38.9158C88.535 35.6658 83.7788 36.1664 83.0817 39.6375L57.64 166.316C57.1035 168.987 59.6044 171.268 62.215 170.489L133.24 149.287C135.313 148.669 136.381 146.379 135.522 144.393L89.9395 38.9158Z" fill="#4C51BF"/>
</svg>

            Prisma
          </Badge>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-medium text-lg mb-2">styles</h3>
        <div className="flex flex-col space-y-2">
          <Badge href="https://getbootstrap.com/">
          <svg width="15" height="15" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C"/><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF"/></svg>
            Bootstrap
          </Badge>
          <Badge href="https://tailwindcss.com/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="11" height="16" viewBox="0 0 45 50">
  <g clip-path="url(#prefix__clip0)">
    <path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/>
  </g>
  <defs>
    <clipPath id="prefix__clip0">
      <path fill="#fff" d="M0 0h85v107H0z"/>
    </clipPath>
  </defs>
</svg>
            Tailwind/NativeWind
          </Badge>
          <Badge href="https://nativebase.io/">
            <svg width="14" height="14" role="img" aria-label="React logo" className="!mr-1">
              <use href="/sprite.svg#react" />
            </svg>
            NativeBase
          </Badge>
          <Badge href="https://tamagui.dev/">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.82637 0.579102H9.12248V1.283H9.82637V0.579102ZM8.81276 0.579102H8.10887V1.283H8.81276V0.579102ZM7.79915 0.579102H7.09526V1.283H7.79915V0.579102ZM6.78555 0.579102H6.08165V1.283H6.78555V0.579102ZM5.77194 0.579102H5.06804V1.283H5.77194V0.579102ZM4.75833 0.579102H4.05443V1.283H4.75833V0.579102ZM3.74472 1.58968H3.04083V2.29358H3.74472V1.58968ZM2.73111 2.6003H2.02722V3.30419H2.73111V2.6003ZM1.7175 3.61088H1.01361V4.31478H1.7175V3.61088ZM1.7175 4.62146H1.01361V5.32536H1.7175V4.62146ZM1.7175 5.63204H1.01361V6.33594H1.7175V5.63204ZM1.7175 6.64266H1.01361V7.34656H1.7175V6.64266ZM0.703895 7.65324H0V8.35714H0.703895V7.65324ZM0.703895 8.66383H0V9.36772H0.703895V8.66383ZM0.703895 9.67444H0V10.3783H0.703895V9.67444ZM1.7175 10.685H1.01361V11.3889H1.7175V10.685ZM2.73111 11.6956H2.02722V12.3995H2.73111V11.6956ZM3.74472 12.7062H3.04083V13.4101H3.74472V12.7062ZM4.75833 13.7168H4.05443V14.4207H4.75833V13.7168ZM5.77194 13.7168H5.06804V14.4207H5.77194V13.7168ZM6.78555 12.7062H6.08165V13.4101H6.78555V12.7062ZM7.79915 12.7062H7.09526V13.4101H7.79915V12.7062ZM7.79915 13.7168H7.09526V14.4207H7.79915V13.7168ZM8.81276 13.7168H8.10887V14.4207H8.81276V13.7168ZM9.82637 12.7062H9.12248V13.4101H9.82637V12.7062ZM9.82637 11.6956H9.12248V12.3995H9.82637V11.6956ZM10.84 10.685H10.1361V11.3889H10.84V10.685ZM11.8536 8.66383H11.1497V9.36772H11.8536V8.66383ZM11.8536 9.67444H11.1497V10.3783H11.8536V9.67444ZM11.8536 7.65324H11.1497V8.35714H11.8536V7.65324ZM12.8672 6.64266H12.1633V7.34656H12.8672V6.64266ZM13.8808 6.64266H13.1769V7.34656H13.8808V6.64266ZM14.8944 5.63204H14.1905V6.33594H14.8944V5.63204ZM13.8808 4.62146H13.1769V5.32536H13.8808V4.62146ZM12.8672 4.62146H12.1633V5.32536H12.8672V4.62146ZM11.8536 4.62146H11.1497V5.32536H11.8536V4.62146ZM14.8944 3.61088H14.1905V4.31478H14.8944V3.61088ZM14.8944 4.62146H14.1905V5.32536H14.8944V4.62146ZM13.8808 2.6003H13.1769V3.30419H13.8808V2.6003Z" fill="#EDEDED"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8808 2.60046H13.1769V3.30436H13.8808V2.60046ZM12.8672 2.60046H12.1633V3.30436H12.8672V2.60046ZM10.84 1.58984H10.1361V2.29374H10.84V1.58984ZM9.82638 2.60046H9.12249V3.30436H9.82638V2.60046ZM6.78556 3.61104H6.08166V4.31494H6.78556V3.61104ZM6.78556 7.6534H6.08166V8.3573H6.78556V7.6534ZM6.78556 8.66399H6.08166V9.36788H6.78556V8.66399ZM5.77195 9.6746H5.06805V10.3785H5.77195V9.6746ZM4.75834 8.66399H4.05444V9.36788H4.75834V8.66399ZM4.75834 7.6534H4.05444V8.3573H4.75834V7.6534ZM11.8536 2.60046H11.1497V3.30436H11.8536V2.60046Z" fill="#EDEDED"/>
</svg>
            Tamagui
          </Badge>
          <Badge href="https://ui.shadcn.com/">
          <svg width="15" height="15" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 1L1 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            Shadcn
          </Badge>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="mt-8">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/projects"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">see my projects</p>
          </a>
        </li>
      </ul>
      </div>

      <div className="mb-8">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/henluciani"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">connect with me</p>
          </a>
        </li>
      </ul>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          check my profile on github and my ux/ui case studies on dribbble.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="Github"
          link="https://github.com/henluciani"
        />
        <ChannelLink
          img={vercel}
          name="Dribbble"
          link="https://dribbble.com/henriqueluciani"
        />
      </div>
      
    </section>
  );
}