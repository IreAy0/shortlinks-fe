import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner"
import { FiLink } from "react-icons/fi";
import { CopyUrl } from "../modals/copyUrl";
import { QrCode } from "../modals/QrCode";
import { useShortenUrl } from "@/store/api/url";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [openUrl, setOpenUrl] = useState(false)
  const [shortened, setShortened] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [customAlias, setCustomAlias] = useState("");
  const [password, setPassword] = useState("");
  const [expiration, setExpiration] = useState("");
const [openQr, setOpenQr] = useState(false);

  const { mutate: submitRequest } = useShortenUrl();

  const [passwordError, setPasswordError] = useState("");

  // Password validation function
  const validatePassword = (pwd: string) => {
    if (!pwd) return "";
    if (pwd.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(pwd)) return "Password must contain an uppercase letter.";
    if (!/[a-z]/.test(pwd)) return "Password must contain a lowercase letter.";
    if (!/[0-9]/.test(pwd)) return "Password must contain a number.";
    return "";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    const body = {
         "originalUrl": url,
          "baseUrl": "http://localhost:5000",
          ...(customAlias && { alias: customAlias }),
    ...(password && { password }),
    ...(expiration && { expiration }),
    };
    submitRequest(body, {
      onSuccess: (data) => {
        if (data?.status == 400) {
          toast.error(data?.response?.data?.message || "Error",{
            position: 'top-center',
          });
        }
        if (data?.status == 201) {
          setOpenUrl(true)
          setShortened(data?.shortUrl)
          toast.success('Url shortened', {
            position: "top-center",
          })
        }
      },
      onError: (error) => {
        console.log(error);
       
      },
    });
  };

  const handleGenerateQr = (e) => {
   e.preventDefault();
    if (!url) return;
    const body = {
         "originalUrl": url,
          "baseUrl": "http://localhost:5000",
          ...(customAlias && { alias: customAlias }),
          ...(password && { password }),
          ...(expiration && { expiration }),
          };
    submitRequest(body, {
      onSuccess: (data) => {
        if (data?.status == 201) {
          setOpenQr(true);
          setShortened(data?.shortUrl)
        }
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };


  return (
    <div className="relative h-full py-24 bg-[linear-gradient(135deg,oklch(0.78_0.15_85)_0%,oklch(0.96_0.02_270)_50%,oklch(1_0_0)_100%)]  flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "absolute inset-0 w-full h-full",
          "[mask-image:radial-gradient(500px)]"
        )}
      />
      <div className="relative z-10 text-center container">
        <h1 className=" text-4xl sm:text-5xl font-bold ">
          Shrink URLs. Generate QR Codes. Secure & Trackable.
        </h1>
        <p className="mt-6 text-[17px] md:text-2xl">
          All your link tools in one place—fast, free, and under your control.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Card className="w-full max-w-3xl p-8 border-none bg-white shadow-xl rounded-2xl">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
              🔗 Paste a Link to Shorten
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className={cn(
                  "flex items-center border border-gray-300 rounded-lg shadow-sm px-4 transition-colors",
                  "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
                )}
              >
                <FiLink className="text-gray-400 text-xl mr-2" />
                <Input
                  type="url"
                  placeholder="Paste your long URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full py-3 outline-none border-0 bg-transparent focus-visible:ring-0 "
                  required
                />
              </div>
              <div className="text-right mb-3 ">
                <div className="flex items-center justify-between pt-2 border-t mt-4">
                  <Label htmlFor="advanced" className="text-sm">
                    Advanced Options
                  </Label>
                  <Switch
                    id="advanced"
                    checked={showAdvanced}
                    onCheckedChange={(checked) => {
                    setShowAdvanced(checked);
                    if (!checked) {
                      setCustomAlias("");
                      setPassword("");
                      setExpiration("");
                      setPasswordError("");
                    }
                  }}
                  />
                </div>
                
              </div>

              {showAdvanced && (
                <div className="grid gap-4 pt-2 border-t">
                  <Input type="text" onChange={(e) => setCustomAlias(e.target.value) } placeholder="Custom Alias (optional)" />
                   <Input
                    onChange={handlePasswordChange}
                    value={password}
                    placeholder="Password Protect (optional)"
                    type="password"
                  />
                  {passwordError && (
                    <span className="text-xs text-red-600">{passwordError}</span>
                  )}
                  <Input  placeholder="Expires in (e.g. 7d, 24h)" />
                </div>
              )}
              <div className="flex flex-col gap-y-4">
                <Button type="submit" className="w-full cursor-pointer">
                  Shorten URL
                </Button>
                <Button
                  variant={"outline"}
                  onClick={handleGenerateQr}
                  type="button"
                  className="w-full cursor-pointer"
                >
                  Generate QRCode
                </Button>
              </div>
            </form>

          {shortened && (
            <>
              <CopyUrl url={shortened} open={openUrl} onClose={setOpenUrl} />
              <QrCode url={shortened} open={openQr} onClose={setOpenQr} />
            </>
          )}

          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
