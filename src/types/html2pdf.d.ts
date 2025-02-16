declare module 'html2pdf.js' {
  interface Options {
    margin?: number;
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: { scale: number };
    jsPDF?: { unit: string; format: string; orientation: string };
  }

  function html2pdf(
    element: HTMLElement,
    options?: Options
  ): Promise<void>;

  export default html2pdf;
}
