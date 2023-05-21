import styled from 'styled-components';
import img from '../../images/picture.png';
import logo from '../../images/logo.png';

export const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 96px);
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-image: url(${img}), url(${logo}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: top 28px left 36px, top 20px left 20px, right;
  &::before {
    position: absolute;
    content: '';
    width: 148px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    top: 50%;
    left: 19.5%;
    transform: translate(-50%, -50%);
  }
  &::after {
    position: absolute;
    content: '';
    width: 148px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    top: 50%;
    left: 80.5%;
    transform: translate(-50%, -50%);
  }
`;

export const Image = styled.img`
  display: flex;
  position: absolute;
  width: 80px;
  height: 80px;
  border: 8px solid #ebd8ff;
  border-radius: 50px;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px -4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Tweet = styled.p`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  top: 284px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Follower = styled.p`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  top: 324px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ButtonAddFollower = styled.button`
  position: absolute;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  border: transparent;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  top: 384px;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    cursor: pointer;
    background: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    color: #373737;
  }
`;

export const ButtonRemoveFollower = styled(ButtonAddFollower)`
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 30px auto;
  border-radius: 10.3108px;
  width: 196px;
  height: 50px;
  border: transparent;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
    background: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    color: #373737;
  }
`;
