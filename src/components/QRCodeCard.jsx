import { useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'

function QRCodeCard() {
  const qrCodeRef = useRef(null)

  const downloadQRCode = () => {
    const svg = qrCodeRef.current
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      
      const downloadLink = document.createElement('a')
      downloadLink.download = 'ALLAN_QR_Code.png'
      downloadLink.href = pngFile
      downloadLink.click()
    }
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  const linkedInProfileUrl = 'https://www.linkedin.com/in/allan-%E2%99%A8%EF%B8%8F-johnny-175067311'

  return (
    <div className="group relative w-80 md:w-96 bg-white rounded-2xl shadow-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative mx-auto w-48 h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden border-4 border-transparent 
        bg-gradient-to-r from-purple-500 to-blue-500 p-1">
        <QRCodeSVG 
          ref={qrCodeRef}
          value={linkedInProfileUrl} 
          size={180} 
          className="w-full h-full object-contain"
          bgColor="white"
          fgColor="black"
          level="H"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-2">ALLAN</h1>

      <p className="text-sm text-gray-600 mb-4 transition-colors duration-300 group-hover:text-blue-600 cursor-pointer">
        Scan to connect on LinkedIn
      </p>

      <div className="flex justify-center mb-4">
        <a 
          href={linkedInProfileUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>

      <button 
        onClick={downloadQRCode} 
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300"
      >
        Download QR Code
      </button>
    </div>
  )
}

export default QRCodeCard