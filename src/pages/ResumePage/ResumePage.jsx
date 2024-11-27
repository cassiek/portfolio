import "./ResumePage.scss";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
import resume from "../../assets/resume/Cassie Kumpula Portfolio Resume.pdf";


function ResumePage() {
    return (
        <main className="resume-page">
            <section className="resume-page__content">
                <h3 className="resume-page__header">Resume</h3>
                <div className="resume-page__pdf">
                    <Document file={resume} >
                        <Page 
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        />
                    </Document>
                </div>
            </section>
        </main>
    )
};

export default ResumePage;
