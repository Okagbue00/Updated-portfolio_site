import React, { useEffect, useState } from 'react'
import {Download} from "lucide-react";
import { WindowControls } from "#components";
import WindowWrapper from '#hoc/WindowWrapper.jsx';
import {Document, Page, pdfjs} from "react-pdf"

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL (
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


// On phones, shrink the PDF page to the window width (16px = window side margins).
// On larger screens return undefined so the page renders at its natural size.
const getPageWidth = () =>
    window.innerWidth < 640 ? Math.min(612, window.innerWidth - 16) : undefined;

const Resume = () => {
    const [pageWidth, setPageWidth] = useState(getPageWidth);
    const [numPages, setNumPages] = useState(0);

    useEffect(() => {
        const onResize = () => setPageWidth(getPageWidth());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

  return (
    <>
    <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a href="/files/resume.pdf" download className="cursor-pointer" title="Download resume">
        <Download className="icon" /></a>

    </div>

    <div className="resume-pages">
        <Document
            file="/files/resume.pdf"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p className="p-5 text-sm text-gray-500">Loading resume…</p>}
            error={<p className="p-5 text-sm text-red-500">Couldn't load the resume.</p>}
        >
            {Array.from({ length: numPages }, (_, i) => (
                <Page key={i} pageNumber={i + 1} width={pageWidth} renderTextLayer renderAnnotationLayer />
            ))}
        </Document>
    </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;