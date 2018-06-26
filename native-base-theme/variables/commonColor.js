import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

// const mainColor = '#689f38';
// const mainColor  = "#7cb342";
const mainColor  = "#60ad3e";
const lightColor = color(mainColor).lighten(0.66).hex();

export default {
  platformStyle,
  platform,

  //Android
  androidRipple:           true,
  androidRippleColor:      "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark:  "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg:      "#E53300", //"#ED1727",
  badgeColor:   "#fff",
  badgePadding: platform === "ios" ? 3 : 0,

  // Button
  btnFontFamily: platform === "ios" ? "System" : "Roboto_medium",
  btnDisabledBg: "#CFCFCF", //"#b5b5b5",
  buttonPadding: 10, //6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg:   "#fff",
  cardBorderColor: "#f4f4f4", //"#ccc",

  // CheckBox
  CheckboxRadius:        platform === "ios" ? 13 : 0,
  CheckboxBorderWidth:   platform === "ios" ? 1 : 2,
  CheckboxPaddingLeft:   platform === "ios" ? 4 : 2,
  CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
  CheckboxIconSize:      platform === "ios" ? 21 : 16,
  CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
  CheckboxFontSize:      platform === "ios" ? 23 / 0.9 : 17,
  DefaultFontSize:       17,
  checkboxBgColor:       "#039BE5",
  checkboxSize:          20,
  checkboxTickColor:     "#fff",

  // Color
  brandPrimary: platform === "ios" ? "#007aff" : mainColor,
  brandInfo:    "#607afd", //"#457FFC",
  brandSuccess: "#62D85D", //"#5cb85c",
  brandDanger:  "#E53300", //"#d9534f",
  brandWarning: "#FDAD1C", //"#f0ad4e",
  brandDark:    "#3B3B3B", // "#000",
  brandLight:   "#f4f4f4",

  // Font
  fontFamily: platform === "ios" ? "System" : "Roboto",
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: platform === "ios" ? "#F8F8F8" : mainColor,
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: platform === "ios" ? "#737373" : lightColor,//"#bfc6ea",
  tabBarTextSize: platform === "ios" ? 14 : 11,
  activeTab: platform === "ios" ? "#007aff" : "#fff",
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: platform === "ios" ? "#2874F0" : "#fff",
  tabActiveBgColor: platform === "ios" ? "#cde1f9" : mainColor,

  // Header
  toolbarBtnColor: platform === "ios" ? "#007aff" : "#fff",
  toolbarDefaultBg: platform === "ios" ? "#F8F8F8" : mainColor,
  toolbarHeight: platform === "ios" ? (isIphoneX ? 88 : 64) : 54,//56,
  toolbarSearchIconSize: platform === "ios" ? 20 : 23,//23,
  toolbarInputColor: platform === "ios" ? "#CECDD2" : "#fff",
  searchBarHeight: platform === "ios" ? 30 : 48,//40,
  searchBarInputHeight: platform === "ios" ? 30 : 48,//50,
  toolbarBtnTextColor: platform === "ios" ? "#007aff" : "#fff",
  iosStatusbar: platform === "ios" ? "dark-content" : "light-content",
  toolbarDefaultBorder: platform === "ios" ? "#a7a6ab" : mainColor,
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: platform === "ios" ? 30 : 28,
  iconHeaderSize: platform === "ios" ? 33 : 26,//24,

  // InputGroup
  inputFontSize: platform === "ios" ? 17 : 16, //17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#74D670", //"#2b8339",
  inputErrorBorderColor: "#FC4C1E", //"#ed2f2f",
  inputHeightBase: 50,
  get inputColor() {
    return platform === "ios" ? this.textColor : "#575757"; //this.textColor;
  },
  get inputColorPlaceholder() {
    return "#afafaf"; //"#575757";
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === "ios" ? 20 : 24,

  // List
  listBg: "transparent",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: platform === "ios" ? 10 : 12,
  listNoteColor: "#949494", //"#808080",
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: platform === "ios" ? 25 : 23,
  radioSelectedColorAndroid: mainColor,
  radioBtnLineHeight: platform === "ios" ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: platform === "ios" ? "#F8F8F8" : mainColor,
  segmentActiveBackgroundColor: platform === "ios" ? "#007aff" : "#fff",
  segmentTextColor: platform === "ios" ? "#007aff" : "#fff",
  segmentActiveTextColor: platform === "ios" ? "#fff" : mainColor,
  segmentBorderColor: platform === "ios" ? "#007aff" : "#fff",
  segmentBorderColorMain: platform === "ios" ? "#a7a6ab" : mainColor,

  // Spinner
  defaultSpinnerColor: "#B2B2B2", //"#45D56E",
  inverseSpinnerColor: lightColor, //"#1A191B",

  // Tab
  tabDefaultBg: platform === "ios" ? "#F8F8F8" : mainColor,
  topTabBarTextColor: platform === "ios" ? "#6b6b6b" : "#b3c7f9",
  topTabBarActiveTextColor: platform === "ios" ? "#007aff" : "#fff",
  topTabBarBorderColor: platform === "ios" ? "#a7a6ab" : "#fff",
  topTabBarActiveBorderColor: platform === "ios" ? "#007aff" : "#fff",

  // Tabs
  tabBgColor:  "#F8F8F8",
  tabFontSize: 15,

  // Text
  textColor:        "#000",
  inverseTextColor: "#fff",
  noteFontSize:     14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === "ios" ? "System" : "Roboto_medium",
  titleFontSize: platform === "ios" ? 17 : 21, //19,
  subTitleFontSize: platform === "ios" ? 12 : 14,
  subtitleColor: platform === "ios" ? "#000" : lightColor, //"#fff",
  titleFontColor: platform === "ios" ? "#000" : "#fff",

  // Other
  borderRadiusBase: platform === "ios" ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30
};
