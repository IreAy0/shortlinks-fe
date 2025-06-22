import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useUnlockLink } from "@/store/api/url";
import { useParams } from "react-router-dom";
import type {  SubmitUnlockFormType } from "@/types/forms";

function Preview() {
   const { shortUrl } = useParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { mutate: submitRequest } = useUnlockLink();
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    
     const body: SubmitUnlockFormType = {
      shortUrl: shortUrl,
      password: password,
      
    };

    setSubmitting(true);
    submitRequest(body, {
      onSuccess: (data) => {
        setSubmitting(false);
        console.log('data', data)
        if(data?.status == 403){
          setError('Invalid password')
        }
        if (data?.status == 200 && data?.originalUrl) {
          console.log('data', data)
          // redirect to the new link
          window.location.href = data.originalUrl;

        }
      },
      onError: (error) => {
        console.log(error);
        setError("Incorrect password. Please try again.")
        setSubmitting(false);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">Unlock Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={submitting}
            />
            {error && (
              <span className="text-red-600 text-sm text-center">{error}</span>
            )}
            <Button type="submit" disabled={submitting}>
              {submitting ? "Unlocking..." : "Unlock & Go"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Preview;