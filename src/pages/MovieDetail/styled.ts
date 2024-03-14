import styled from "styled-components";

export const Title = styled.h2`
  font-size: 36px;
`;

export const Info = styled.div`
  color: #fff;
`;

export const Image = styled.figure`
  overflow: hidden;
  border-radius: 10px;
  font-size: 0;
`;

export const Details = styled.div`
  display: flex;
  gap: 80px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Poster = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  position: relative;
  padding-top: 80px;
`;
