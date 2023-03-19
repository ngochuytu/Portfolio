import React from "react";
import { Pagination } from "@ngochuytu/react-pagination";
import { useState } from "react";
import {
  Container,
  InputWrapper,
  InputLabel,
  Input,
  ListData,
  LoadingSpinnerContainer,
  Spinner,
  InputsContainer,
  Switch,
  SwitchInput,
  SwitchSlider,
  SwitchContainer,
  PageNumber,
  Preview,
} from "./ProjectPaginationLibrary.style";
import { useSettingsContext } from "../../../../Contexts/SettingsContext";

const multiLanguageContent = {
  en: {
    pageNumberText: "This is page number",
    rowNumberText: "This is row number",
  },
  vn: {
    pageNumberText: "Đây là trang thứ",
    rowNumberText: "Đây là dòng thứ",
  },
};

const LoadingSpinner = (props) => {
  return (
    <LoadingSpinnerContainer>
      <Spinner />
    </LoadingSpinnerContainer>
  );
};

function ProjectPaginationLibrary() {
  const {
    settings: { language, theme },
  } = useSettingsContext();

  const [isLoading, setIsLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(100);
  const [breakButtonStep, setBreakButtonStep] = useState(3);
  const [pageRange, setPageRange] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [navigateToFirstPageButtonLabel, setNavigateToFirstPageButtonLabel] =
    useState("«");
  const [navigateToLastPageButtonLabel, setNavigateToLastPageButtonLabel] =
    useState("»");
  const [breakButtonLabel, setBreakButtonLabel] = useState("...");
  const [disableNavigationButtons, setDisableNavigationButtons] =
    useState(false);

  const [totalPagesError, setTotalPagesError] = useState(false);
  const [pageRangeError, setPageRangeError] = useState(false);
  const dataPerPage = 10;

  const listData = new Array(dataPerPage).fill(0).map((_, index) => {
    const rowNumber = index + (currentPage - 1) * dataPerPage + 1;
    return (
      <div key={rowNumber}>
        <p>
          {multiLanguageContent[language].rowNumberText} {rowNumber}
        </p>
      </div>
    );
  });

  const onPageChange = (activePage) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(activePage);
    }, 1000);
  };

  const onChangeTotalPages = (e) => {
    const value = e.target.value;
    if (!value) setTotalPagesError(true);
    else setTotalPagesError(false);
    setTotalPages(e.target.value);
  };

  const onChangeBreakButtonStep = (e) => {
    setBreakButtonStep(e.target.value);
  };

  const onChangePageRange = (e) => {
    const value = e.target.value;
    if (Math.abs(value) < 5) setPageRangeError(true);
    else setPageRangeError(false);

    setPageRange(value);
  };

  const onChangeNavigateToFirstPageButtonLabel = (e) => {
    setNavigateToFirstPageButtonLabel(e.target.value);
  };

  const onChangeNavigateToLastPageButtonLabel = (e) => {
    setNavigateToLastPageButtonLabel(e.target.value);
  };

  const onChangeBreakButtonLabel = (e) => {
    setBreakButtonLabel(e.target.value);
  };

  const onChangeDisableNavigationButtons = (e) => {
    setDisableNavigationButtons(e.target.checked);
  };

  return (
    <Container theme={theme}>
      <InputsContainer>
        <InputWrapper>
          <InputLabel htmlFor="totalPages" isRequired>
            totalPages:{" "}
          </InputLabel>
          <Input
            id="totalPages"
            type="number"
            inputMode="numeric"
            placeholder="totalPages"
            value={totalPages}
            onChange={onChangeTotalPages}
            isError={totalPagesError}
            theme={theme}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="breakButtonStep">breakButtonStep: </InputLabel>
          <Input
            id="breakButtonStep"
            type="number"
            inputMode="numeric"
            placeholder="breakButtonStep"
            value={breakButtonStep}
            onChange={onChangeBreakButtonStep}
            theme={theme}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="pageRange">pageRange (Min 5): </InputLabel>
          <Input
            id="pageRange"
            type="number"
            inputMode="numeric"
            value={pageRange}
            placeholder="pageRange"
            onChange={onChangePageRange}
            isError={pageRangeError}
            theme={theme}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="navigateToFirstPageButtonLabel">
            navigateToFirstPageButtonLabel:{" "}
          </InputLabel>
          <Input
            id="navigateToFirstPageButtonLabel"
            type="text"
            value={navigateToFirstPageButtonLabel}
            placeholder="navigateToFirstPageButtonLabel"
            onChange={onChangeNavigateToFirstPageButtonLabel}
            theme={theme}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="navigateToLastPageButtonLabel">
            navigateToLastPageButtonLabel:{" "}
          </InputLabel>
          <Input
            id="navigateToLastPageButtonLabel"
            type="text"
            value={navigateToLastPageButtonLabel}
            placeholder="navigateToLastPageButtonLabel"
            onChange={onChangeNavigateToLastPageButtonLabel}
            theme={theme}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="breakButtonLabel">breakButtonLabel: </InputLabel>
          <Input
            id="breakButtonLabel"
            type="text"
            value={breakButtonLabel}
            placeholder="breakButtonLabel"
            onChange={onChangeBreakButtonLabel}
            theme={theme}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor="disableNavigationButtons">
            disableNavigationButtons:{" "}
          </InputLabel>
          <SwitchContainer>
            <Switch htmlFor="disableNavigationButtons">
              <SwitchInput
                id="disableNavigationButtons"
                type="checkbox"
                value={disableNavigationButtons}
                onChange={onChangeDisableNavigationButtons}
              />
              <SwitchSlider />
            </Switch>
          </SwitchContainer>
        </InputWrapper>
      </InputsContainer>
      <Preview>
        <PageNumber>
          {multiLanguageContent[language].pageNumberText} {currentPage}
        </PageNumber>
        <ListData>{listData}</ListData>
        <Pagination
          activePage={1}
          totalPages={totalPages}
          breakButtonStep={breakButtonStep}
          pageRange={pageRange}
          navigateToFirstPageButtonLabel={navigateToFirstPageButtonLabel}
          navigateToLastPageButtonLabel={navigateToLastPageButtonLabel}
          breakButtonLabel={breakButtonLabel}
          disableNavigationButtons={disableNavigationButtons}
          onPageChange={onPageChange}
        />
      </Preview>
      {isLoading && <LoadingSpinner />}
    </Container>
  );
}

export default ProjectPaginationLibrary;
