import "./FilesSection.css";
export default FilesSection;

function FilesSection() {


    const openPdfInNewTab  = () => {
        // Get the PDF.
        const pdfUrl = '../assets/files/G_10_stage1.pdf';
    
        // Open the PDF in a new tab.
        window.open(pdfUrl, '_blank');
    };  
    
    return(
        <div className="FilesSection">
            <button className="Button" onClick={openPdfInNewTab}>1st Assignment</button>
        </div>
    );
    
}