import styled, { keyframes } from "styled-components";
import { devices } from "../../../../Breakpoints/Breakpoints";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-left: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "rgb(20, 21, 23)" : "rgb(246, 247, 249)"};
  border-radius: 10px;

  .pagination-container {
    width: initial;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${devices.laptop} {
    margin-left: initial;
  }
`;

const InputsContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const InputLabel = styled.label`
  flex: 1;
  margin-right: 15px;

  ${(props) =>
    props.isRequired &&
    `
      &::after {
        content: '*';
        color: #FF0000;
      }
    `}

  @media ${devices.tablet} {
    word-break: break-all;
    margin-right: initial;
  }
`;

const Input = styled.input`
  flex: 1;
  background-color: ${(props) =>
    props.theme === "dark" ? "rgb(37, 38, 43)" : "rgb(246, 247, 249)"};
  border-radius: 5px;
  border: 1px solid rgb(55, 58, 64);
  padding: 10px;
  transition: border-color 150ms linear;
  color: var(--color-text-primary);
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &:hover,
  &:focus {
    ${(props) => !props.isError && `border-color: var(--color-accent)`};
  }

  border-color: ${(props) => (props.isError ? "#FF0000" : "inherit")};
`;

const SwitchContainer = styled.div`
  flex: 1;
  margin-left: -20px;

  @media ${devices.tablet} {
    margin-left: initial;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(37, 38, 43);
  transition: 0.4s;
  border-radius: 25px;

  &::before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 25px;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SwitchSlider} {
    background-color: var(--color-accent);
  }

  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px var(--color-accent);
  }

  &:checked + ${SwitchSlider}::before {
    transform: translateX(35px);
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageNumber = styled.h1`
  text-align: center;
`;

const ListData = styled.div`
  max-height: 300px;
  margin: 20px 0;
`;

const LoadingSpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Spinning = keyframes`
    0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: auto;
  border: 2px solid #dbf2ff;
  width: 32px;
  height: 32px;
  display: inline-block;
  position: absolute;
  top: 45%;
  border-radius: 50%;
  border-right: 2px solid #018df7;
  text-align: center;
  animation-name: ${Spinning};
  animation-duration: 900ms;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
`;

export {
  Container,
  InputsContainer,
  InputWrapper,
  Input,
  InputLabel,
  SwitchContainer,
  Switch,
  SwitchInput,
  SwitchSlider,
  Preview,
  PageNumber,
  ListData,
  LoadingSpinnerContainer,
  Spinner,
};
