/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss'

const DefaultColors = require('tailwindcss/colors')

delete DefaultColors.lightBlue
delete DefaultColors.warmGray
delete DefaultColors.trueGray
delete DefaultColors.coolGray
delete DefaultColors.blueGray

export const SubwayRouteColor = {
  capitalRegion: {
    line1: 'rgb(38, 60, 150)', // 1호선
    line2: 'rgb(60, 180, 74)', // 2호선
    line3: 'rgb(240, 110, 0)', // 3호선
    line4: 'rgb(44, 158, 222)', // 4호선
    line5: 'rgb(137, 54, 224)', // 5호선
    line6: 'rgb(181, 80, 11)', // 6호선
    line7: 'rgb(105, 114, 21)', // 7호선
    line8: 'rgb(229, 30, 110)', // 8호선
    line9: 'rgb(209, 166, 44)', // 9호선
    airport: 'rgb(115, 182, 228)', // 공항
    gyeonguijungang: 'rgb(124, 196, 165)', // 경의중앙
    gyeongchun: 'rgb(8, 175, 123)', // 경춘
    suinbundang: 'rgb(235, 169, 0)', // 수인분당
    shinbundang: 'rgb(167, 30, 49)', // 신분당
    gyeonggang: 'rgb(38, 115, 242)', // 경강
    seohae: 'rgb(139, 197, 63)', // 서해
    incheon1: 'rgb(111, 153, 208)', // 인천1
    incheon2: 'rgb(244, 171, 62)', // 인천2
    everline: 'rgb(119, 195, 113)', // 에버라인
    uijeongbu: 'rgb(255, 157, 39)', // 의정부
    uisinseol: 'rgb(198, 193, 0)', // 우이신설
    gimpogold: 'rgb(150, 113, 10)', // 김포골드
    sillim: 'rgb(78, 103, 165)', // 신림
    'gtx-a': 'rgb(144, 90, 137)' // GTX-A
  },
  busan: {
    line1: 'rgb(240, 96, 47)', // 1호선
    line2: 'rgb(60, 180, 74)', // 2호선
    line3: 'rgb(212, 165, 86)', // 3호선
    line4: 'rgb(66, 111, 181)', // 4호선
    donghae: 'rgb(163, 195, 226)', // 동해
    busan_gimhae: 'rgb(128, 73, 156)' // 부산·김해
  },
  daegu: {
    line1: 'rgb(229, 30, 110)', // 1호선
    line2: 'rgb(60, 180, 74)', // 2호선
    line3: 'rgb(254, 192, 87)', // 3호선
    daegyeong: 'rgb(38, 115, 242)' // 다경
  },
  gwangju: {
    line1: 'rgb(60, 180, 74)' // 1호선
  },
  daejeon: {
    line1: 'rgb(60, 180, 74)' // 1호선
  }
}

export const KorailColor = {
  blue: 'rgb(0, 61, 165)',
  lightBlue: 'rgb(0, 181, 226)',
  coolGray: 'rgb(117, 120, 123)',
  gold: 'rgb(134, 109, 75)',
  silver: 'rgb(138, 141, 143)',
  train: {
    srt: {
      main: 'rgb(75, 48, 72)',
      sub: {
        1: 'rgb(108, 29, 69)',
        black: 'rgb(0, 0, 0)',
        silver: 'rgb(138, 141, 143)',
        gold: 'rgb(132, 117, 78)'
      }
    }
  }
}

export const DiscordColor = {
  dark1: 'rgb(30, 33, 36)', // #1e2124
  dark2: 'rgb(40, 43, 48)', // #282b30
  dark3: 'rgb(54, 57, 62)', // #36393e
  dark4: 'rgb(66, 69, 73)' // #424549
}

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        ...DefaultColors,
        head: '#353945',
        placeholder: '#7d8395',
        basicGrey: '#e6e8ec',
        lightGrey: '#f5f6f7',
        main: {
          900: '#4176c8',
          800: '#5685ce',
          700: '#6b94d4',
          600: '#80a3da',
          500: '#95b2e0',
          400: '#aac1e6',
          300: '#bfd0ec',
          200: '#d4dff2',
          100: '#e9eef8'
        },
        subwayRoute: SubwayRouteColor,
        korail: KorailColor,
        discord: DiscordColor
      }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}

export default config
