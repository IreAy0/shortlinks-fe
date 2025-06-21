import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { useRef } from "react";
import QRCode from "react-qr-code";

export function QrCode({ open, onClose, url }) {
  const qrRef = useRef(null);

 const downloadQr = () => {
  const svg = qrRef.current?.querySelector("svg");
  if (!svg) return;

  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg);

  // Create an image from SVG
  const img = new window.Image();
  const svg64 = window.btoa(unescape(encodeURIComponent(source)));
  const image64 = "data:image/svg+xml;base64," + svg64;
  img.onload = function () {
    // Set desired size for the downloaded image
    const size = 800; // px, adjust as needed for "large"
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    // Draw the image scaled up to fill the canvas
    ctx.drawImage(img, 0, 0, size, size);
    const pngFile = canvas.toDataURL("image/png");

    // Create a link to download the PNG
    const link = document.createElement("a");
    link.href = pngFile;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  img.src = image64;
};

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold mb-2">
            🎉 QR Code Generated!
          </DialogTitle>
          <DialogDescription className="text-center">
            Scan this QR code or download it for later use.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 mt-4">
          <div ref={qrRef} className="bg-white p-4 rounded-lg shadow-md">
            <QRCode value={url} size={180} />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={downloadQr}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FiDownload /> Download QR
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="inline-block mr-1" />
                Go to Link
              </a>
            </Button>
          </div>
        </div>
        <DialogFooter className="sm:justify-start mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}