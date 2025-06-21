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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiCopy, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

export function CopyUrl({ open, onClose, url }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
     setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold mb-2">🎉 URL Shortened!</DialogTitle>
          <DialogDescription className="text-center">
            Your short link is ready to use and share.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 mt-4">
           {/* Main Confetti when modal opens */}
        {/* {open && (
          <Confetti
            numberOfPieces={120}
            recycle={false}
            width={window.innerWidth}
            height={300}
            style={{ position: "absolute", top: -60, left: 0, pointerEvents: "none" }}
          />
        )} */}
       
          <div className="w-full flex items-center gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              value={url}
              readOnly
              className="flex-1 text-center font-mono"
            />
             <div className="relative flex flex-col items-center">
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-1 cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-sm"
      type="button"
      aria-label="Copy link"
    >
      <FiCopy /> Copy
    </button>
  </div>
           {copied && (
      <span className="text-green-600 text-xs mt-1">Copied!</span>
    )}
          </div>
          <Button
            asChild
            className="w-full flex items-center justify-center gap-2 mt-2"
            variant="outline"
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