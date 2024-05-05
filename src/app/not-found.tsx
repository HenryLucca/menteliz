import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-mBlue-200 flex py-16 justify-center items-start lg:items-center">
      <section className="flex flex-col lg:flex-row gap-8 justify-around items-center p-4 lg:px-16 lg:py-24 bg-blue-100 rounded-3xl w-5/6">
        <div className="flex flex-col gap-2">
          <h1 className="text-zinc-900 text-3xl md:text-5xl lg:text-8xl line-clamp-none font-semibold">
            Oops... 🤔
          </h1>
          <h3 className="text-2xl">Página não encontrada</h3>
          <p className="py-4 text-lg">
            A página que você tentou acessar não existe ou você não possui
            acesso.
          </p>
          <div>
            <Link href="/" passHref>
              <p
                className={`text-lg underline underline-offset-4 text-mBlue-500 hover:right-2 transition-all 
              `}
              >
                Voltar para a página inicial
              </p>
            </Link>
          </div>
        </div>

        <div className="w-2/5 h-2/5">
          <svg
            viewBox="0 0 764 576"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="368.367" cy="264.859" r="264.859" fill="#E8F5FF" />
            <circle cx="368.367" cy="264.859" r="207.016" fill="#BFE3FF" />
            <path
              d="M369.744 525.971C345.427 550.825 311.511 566.25 273.992 566.25C229.209 566.25 189.559 544.274 165.238 510.518C153.232 543.052 121.946 566.25 85.2419 566.25C38.1642 566.25 0 528.086 0 481.008C0 433.93 38.1642 395.766 85.2419 395.766C106.544 395.766 126.02 403.58 140.963 416.497C148.781 349.965 205.358 298.347 273.992 298.347C320.235 298.347 361.005 321.779 385.076 357.418C405.118 341.407 430.529 331.835 458.175 331.835C509.188 331.835 552.589 364.424 568.694 409.918C580.972 402.852 595.211 398.811 610.393 398.811C654.965 398.811 691.401 433.641 693.968 477.569C698.77 475.854 703.943 474.919 709.335 474.919C734.555 474.919 755 495.364 755 520.585C755 545.805 734.555 566.25 709.335 566.25C691.939 566.25 676.815 556.523 669.105 542.212C653.995 557.078 633.265 566.25 610.393 566.25C582.178 566.25 557.224 552.293 542.056 530.906C520.772 552.712 491.055 566.25 458.175 566.25C422.882 566.25 391.232 550.651 369.744 525.971Z"
              fill="#F8FDFF"
            />
            <path
              d="M755 520.585C755 495.364 734.555 474.919 709.335 474.919C703.943 474.919 698.77 475.854 693.968 477.569C691.401 433.641 654.965 398.811 610.393 398.811C595.211 398.811 580.972 402.852 568.694 409.918C552.588 364.424 509.188 331.835 458.175 331.835C430.529 331.835 405.117 341.407 385.075 357.418C361.005 321.779 320.235 298.347 273.992 298.347C205.358 298.347 148.781 349.965 140.962 416.497C126.02 403.58 106.544 395.766 85.2419 395.766C56.9698 395.766 31.9124 409.53 16.4048 430.723"
              stroke="#006DBE"
              strokeWidth="16.8548"
              strokeLinecap="round"
            />
            <circle
              cx="477.133"
              cy="137.133"
              r="9.13307"
              stroke="#005EA3"
              strokeWidth="12.6411"
            />
            <circle
              cx="639.089"
              cy="312.089"
              r="6.08871"
              stroke="#005EA3"
              strokeWidth="12.6411"
            />
            <circle
              cx="103.7"
              cy="290.7"
              r="13.6996"
              stroke="#005EA3"
              strokeWidth="12.6411"
            />
            <path
              d="M240.399 228.327H210.06M261.814 202.062V176.573"
              stroke="#006DBE"
              strokeWidth="12.6411"
              strokeLinecap="round"
            />
            <path
              d="M242.184 207.46L222.004 187.28"
              stroke="#006DBE"
              strokeWidth="12.6411"
              strokeLinecap="round"
            />
            <circle cx="360.756" cy="318.135" r="86.7641" fill="#E8F5FF" />
            <rect
              x="438.412"
              y="355.606"
              width="169.696"
              height="60.7331"
              rx="30.3666"
              transform="rotate(45 438.412 355.606)"
              fill="#004476"
            />
            <circle
              cx="361.363"
              cy="321.503"
              r="86.0248"
              transform="rotate(45 361.363 321.503)"
              stroke="#004476"
              strokeWidth="49.4477"
            />
            <rect
              width="73.1686"
              height="12.6153"
              rx="6.30764"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 391.691 342.965)"
              fill="#006DBE"
            />
            <rect
              width="73.1686"
              height="12.6153"
              rx="6.30763"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 382.771 291.227)"
              fill="#006DBE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M370.528 177C366.792 176.765 363.573 179.602 363.337 183.337C363.102 187.073 365.939 190.292 369.675 190.528C400.445 192.468 430.646 205.19 454.16 228.704C471.008 245.553 482.309 265.825 488.08 287.275C489.053 290.889 492.771 293.031 496.385 292.058C500 291.086 502.141 287.367 501.169 283.753C494.797 260.072 482.316 237.692 463.744 219.12C437.808 193.184 404.465 179.14 370.528 177ZM345.79 189.188C349.533 189.188 352.567 186.154 352.567 182.411C352.567 178.668 349.533 175.634 345.79 175.634C342.047 175.634 339.013 178.668 339.013 182.411C339.013 186.154 342.047 189.188 345.79 189.188Z"
              fill="#006DBE"
            />
            <path
              d="M456.851 400.726L525.978 469.853"
              stroke="white"
              strokeWidth="18.7606"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
