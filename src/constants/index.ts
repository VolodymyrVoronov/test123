import { BusinessCard } from "@/types";

export const PATHS = {
  START: "/",
  MAIN: "/constructor",
} as const;

export const ROUTES = {
  START: PATHS.START,
  MAIN: PATHS.MAIN,
} as const;

export const BUSINESS_CARDS: BusinessCard[] = [
  {
    id: 1,
    inMm: "89mm x 51mm",
    usedIn: "The United States and Canada",
    dpis: [
      {
        dpi: 96,
        width: 336,
        height: 193,
      },
      {
        dpi: 300,
        width: 1050,
        height: 602,
      },
    ],
  },
  {
    id: 2,
    inMm: "85mm x 55mm",
    usedIn:
      "United Kingdom, Italy, Germany, Belgium, Spain, Portugal, Switzerland, Ireland, France, Austria, Netherlands, Slovenia, and Turkey",
    dpis: [
      {
        dpi: 96,
        width: 321,
        height: 208,
      },
      {
        dpi: 300,
        width: 1004,
        height: 650,
      },
    ],
  },
  {
    id: 3,
    inMm: "91mm x 55mm",
    usedIn: "Japan",
    dpis: [
      {
        dpi: 96,
        width: 344,
        height: 208,
      },
      {
        dpi: 300,
        width: 1074,
        height: 650,
      },
    ],
  },
  {
    id: 4,
    inMm: "90mm x 54mm",
    usedIn: "China, Singapore, Malaysia, and Hong Kong",
    dpis: [
      {
        dpi: 96,
        width: 340,
        height: 204,
      },
      {
        dpi: 300,
        width: 1063,
        height: 638,
      },
    ],
  },
  {
    id: 5,
    inMm: "90mm x 55mm",
    usedIn:
      "Australia, New Zealand, Norway, Sweden, Denmark, Colombia, Taiwan, Vietnam, and India",
    dpis: [
      {
        dpi: 96,
        width: 340,
        height: 208,
      },
      {
        dpi: 300,
        width: 1063,
        height: 650,
      },
    ],
  },
  {
    id: 6,
    inMm: "90mm x 50mm",
    usedIn:
      "South Korea, Sri Lanka, Kazakhstan, Lithuania, Poland, Romania, Serbia, Montenegro, Slovakia, Ukraine, Uzbekistan, Bulgaria, Latvia, Bosnia, Hungary, Herzegovina, Czech Republic, Croatia, Estonia, Israel, Finland, South Africa, Argentina, Brazil, Costa Rica, and Mexico",
    dpis: [
      {
        dpi: 96,
        width: 340,
        height: 189,
      },
      {
        dpi: 300,
        width: 1063,
        height: 591,
      },
    ],
  },
];

export const BACKGROUNDS = [
  "#ffffff",
  "#000000",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#7b7b7b",
  "#f9f9f9",
  "#6fbf7b",
  "#f8ed7c",
  "#866a3d",
  "#e55a6e",
  "#6b7a8f",
  "#8a7e6b",
  "#4d0b4d",
  "#7b9f83",
  "#235e3f",
  "#f2e2c7",
  "#8149b1",
  "#f9b3f7",
  "#b93815",
  "#f22e7c",
  "#e5f5cf",
  "#b74e22",
  "#3b3a85",
  "#8a3a12",
  "#c4b2f1",
  "#d6f3bf",
  "#a591a5",
  "#91f0d1",
  "#d2e6c1",
  "#fbf7a5",
  "#0e1d79",
  "#7d3a50",
  "#b3b5a0",
  "#8d94f2",
  "#3a4d8c",
  "#b4d8a1",
  "#f7f7f7",
  "#d7e9f9",
] as const;

export const GRADIENTS = [
  ["#ff7e5f", "#feb47b"],
  ["#6a11cb", "#2575fc"],
  ["#ff6a00", "#ee0979"],
  ["#00c6ff", "#0072ff"],
  ["#f7971e", "#ffd200"],
  ["#56ab2f", "#a8e063"],
  ["#ff758c", "#ff7eb3"],
  ["#007991", "#78ffd6"],
  ["#ff9a9e", "#fecfef"],
  ["#ff4e50", "#f9d423"],
  ["#da22ff", "#9733ee"],
  ["#fcb045", "#fd1d1d"],
  ["#2193b0", "#6dd5ed"],
  ["#cc2b5e", "#753a88"],
  ["#ee9ca7", "#ffdde1"],
  ["#de6161", "#2657eb"],
  ["#ff9966", "#ff5e62"],
  ["#00f260", "#0575e6"],
  ["#e1eec3", "#f05053"],
  ["#fc5c7d", "#6a82fb"],
  ["#5f2c82", "#49a09d"],
  ["#8360c3", "#2ebf91"],
  ["#c6ffdd", "#fbd786"],
  ["#a8ff78", "#78ffd6"],
  ["#12c2e9", "#c471ed"],
  ["#f12711", "#f5af19"],
  ["#eecda3", "#ef629f"],
  ["#4e54c8", "#8f94fb"],
  ["#b3ffab", "#12fff7"],
  ["#ff6e7f", "#bfe9ff"],
  ["#ff9a8b", "#ff6a88"],
  ["#fbc2eb", "#a6c1ee"],
  ["#ffe259", "#ffa751"],
  ["#43cea2", "#185a9d"],
  ["#30cfd0", "#330867"],
  ["#b24592", "#f15f79"],
  ["#13547a", "#80d0c7"],
  ["#e3ffe7", "#d9e7ff"],
  ["#4ac29a", "#bdfff3"],
  ["#ba5370", "#f4e2d8"],
  ["#ff0844", "#ffb199"],
  ["#76b852", "#8dc26f"],
  ["#e52d27", "#b31217"],
  ["#2b5876", "#4e4376"],
  ["#4ca1af", "#c4e0e5"],
  ["#d66d75", "#e29587"],
  ["#92fe9d", "#00c9ff"],
  ["#fd746c", "#ff9068"],
  ["#ffd89b", "#19547b"],
  ["#c94b4b", "#4b134f"],
  ["#232526", "#414345"],
  ["#8e0e00", "#1f1c18"],
  ["#20002c", "#cbb4d4"],
  ["#ed213a", "#93291e"],
  ["#f8ff00", "#3ad59f"],
  ["#009fff", "#ec2f4b"],
  ["#834d9b", "#d04ed6"],
  ["#ff7e5f", "#feb47b"],
  ["#6a11cb", "#2575fc"],
  ["#ff6a00", "#ee0979"],
  ["#00c6ff", "#0072ff"],
  ["#f7971e", "#ffd200"],
  ["#56ab2f", "#a8e063"],
  ["#ff758c", "#ff7eb3"],
  ["#007991", "#78ffd6"],
  ["#ff9a9e", "#fecfef"],
  ["#ff4e50", "#f9d423"],
  ["#da22ff", "#9733ee"],
  ["#fcb045", "#fd1d1d"],
  ["#2193b0", "#6dd5ed"],
  ["#cc2b5e", "#753a88"],
  ["#ee9ca7", "#ffdde1"],
  ["#de6161", "#2657eb"],
  ["#ff9966", "#ff5e62"],
  ["#00f260", "#0575e6"],
  ["#e1eec3", "#f05053"],
  ["#fc5c7d", "#6a82fb"],
  ["#5f2c82", "#49a09d"],
  ["#8360c3", "#2ebf91"],
  ["#c6ffdd", "#fbd786"],
  ["#a8ff78", "#78ffd6"],
  ["#12c2e9", "#c471ed"],
  ["#f12711", "#f5af19"],
  ["#eecda3", "#ef629f"],
  ["#4e54c8", "#8f94fb"],
  ["#b3ffab", "#12fff7"],
  ["#ff6e7f", "#bfe9ff"],
] as const;
