import React, { useState } from "react";
import "./Sheet.scss";
import { HeaderSheet } from "./HeaderSheet";
import { ExperienceSheet } from "./ExperienceSheet";
import { EducationSheet } from "./EducationSheet";
import { SkillsSheet } from "./SkillsSheet";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Button } from "react-bootstrap";

export const Sheet: React.FC = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const onClickExport = () => {
    return (
      <>
        <Document
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
          file="Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "794px",
        height: "1122px",
        padding: "2%",
        backgroundColor: "white",
        boxShadow: "0 0 0.5cm rgba(0,0,0,0.5)",
      }}
    >
      <Button
        className="float-right"
        style={{ width: "20%" }}
        onClick={onClickExport}
      >
        Export to PDF
      </Button>
      <HeaderSheet />
      <ExperienceSheet />
      <EducationSheet />
      <SkillsSheet />
    </div>
  );
};
