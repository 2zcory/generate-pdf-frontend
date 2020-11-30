import axios from 'axios'
import { saveAs } from 'file-saver'
import pageData from './pageData'

export default () => {
    const btn = document.querySelector("#gen-pdf")
    btn.addEventListener("click", generate)
}

async function generate() {
    await axios.post('http://192.168.1.23:5000/generate', { params: pageData }, { responseType: 'blob' }).then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' })

        saveAs(pdfBlob, 'newPdf.pdf')
    })
}