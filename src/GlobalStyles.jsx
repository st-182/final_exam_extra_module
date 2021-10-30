import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



html,body{
  /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
}


*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 300ms;
  font-family: 'Poppins', sans-serif;

}





body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ff7700;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cd3535' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa1515' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d41931' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23ac2934' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d90d4c' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23ae133e' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d32c72' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ab1959' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4298f' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0471' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23a816a8' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23872887' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
 
}

#root {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  /* min-height: calc(100vh - 35px); */
  min-height: 100vh;
  padding-bottom: 35px;
}


`;
