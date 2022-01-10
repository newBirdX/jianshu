import { createGlobalStyle } from 'styled-components'
import url1 from './iconfont.woff2?t=1641456691225';
import url2 from './iconfont.woff?t=1641456691225';
import url3 from './iconfont.ttf?t=1641456691225';
export const Iconf=createGlobalStyle`
@font-face {
  font-family: "iconfont"; /* Project id 3122436 */
  src: url(${url1}) format('woff2'),
       url(${url2}) format('woff'),
       url(${url3}) format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-yongyan:before {
  content: "\e600";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-fangdajing:before {
  content: "\e610";
}
.icon-spin:before {
  content: "\e851";
}
`
