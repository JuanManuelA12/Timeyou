import styled from 'styled-components'

 export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .container-slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    .slide {
      min-width: 100%;
      min-height: 100%;
      z-index: 10;
<<<<<<< HEAD
      cursor: pointer;
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
      img {
        width: 100%;
        min-height: 200px;
        height: 100%;
        vertical-align: top;
      }
    }
  }
  .controles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
<<<<<<< HEAD
    pointer-events: none;
=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
  }
`;
