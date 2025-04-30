"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { authService } from "@/lib/api/AuthService";
import { useAuth } from "@/app/context/auth-context";

type Step = "login" | "register";

export default function RegisterLoginModal({
  open,
  onOpenChange,
  initialStep = "login",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialStep?: Step;
}) {
  const [step, setStep] = useState<Step>(initialStep);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  useEffect(() => {
    if (open) setStep(initialStep);
  }, [open, initialStep]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authService.login({ phoneNumber, password });
      const token = response.data;
      login(token);
      toast.success("Logged in!");
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authService.register({ phoneNumber, password });
      toast.success("Wallet created!");
      console.log(response.data);
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-fit h-1/2 px-6 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {step === "login" ? "Entrance" : "Create Wallet"}
          </DialogTitle>
        </DialogHeader>

        {step === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Login"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setStep("register")}
            >
              Create a wallet
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4 mt-6">
            <Input
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="btn-primary w-full">
              {loading ? <Loader2 className="animate-spin" /> : "Continue"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setStep("login")}
            >
              I have a wallet
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
