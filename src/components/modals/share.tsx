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
import { FiCopy, FiExternalLink, FiShare2, FiMessageCircle } from "react-icons/fi"
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp, FaEnvelope, FaYoutube } from "react-icons/fa"
import { useState } from "react";

 

export function ShareModal({ open, onClose, url }) {
  const [showMiniConfetti, setShowMiniConfetti] = useState(false);
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      icon: <FaTwitter className="text-[#1DA1F2]" />, label: "Twitter", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
    },
    {
      icon: <FaFacebookF className="text-[#1877F2]" />, label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      icon: <FaLinkedinIn className="text-[#0A66C2]" />, label: "LinkedIn", href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`
    },
    {
      icon: <FaInstagram className="text-[#E4405F]" />, label: "Instagram", href: `https://www.instagram.com/`
    },
    {
      icon: <FaWhatsapp className="text-[#25D366]" />, label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(url)}`
    },
    {
      icon: <FaEnvelope className="text-[#EA4335]" />, label: "Email", href: `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(url)}`
    },
    {
      icon: <FaYoutube className="text-[#FF0000]" />, label: "YouTube", href: `https://youtube.com/`
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
     setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    
  };

  return (
     <Dialog open={open} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">Share this link</DialogTitle>
            </DialogHeader>
           
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 ">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 border rounded-md hover:bg-muted"
                >
                  {icon} <span className="">{label}</span>
                </a>
              ))}
            </div>
             <div className="flex items-center gap-2">
              <Input readOnly value={url} className="flex-1" />
              <Button size="sm" onClick={copyToClipboard} variant="outline">
                <FiCopy className="mr-1" /> {copied ? "Copied" : "Copy"}
              </Button>
            </div>
            {/* <DialogFooter className="sm:justify-start mt-4">
              <DialogClose asChild>
                <Button type="button" variant="secondary" className="w-full">Close</Button>
              </DialogClose>
            </DialogFooter> */}
          </DialogContent>
        </Dialog>
  );
}