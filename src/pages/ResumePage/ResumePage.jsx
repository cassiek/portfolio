import "./ResumePage.scss";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
import resume from "../../assets/resume/Cassie Kumpula Portfolio Resume.pdf";


function ResumePage() {
    return (
        <main>
            <Document file={resume}>
                <Page 
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                />
            </Document>
        </main>
    )
};

export default ResumePage;