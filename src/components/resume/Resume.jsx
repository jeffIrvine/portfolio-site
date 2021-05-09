import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Resume = (props) => {

  const [numPages, setNumPages] = useState(null)

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);
  const { pdf } = props;

  return (
    <section>
      <h1>Resume</h1>
      <div className="pdf-doc">
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={numPages} />
        </Document>
      </div>
    </section>
  )
}

export default Resume
