"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/auth-context";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AuthButtons({
  onOpen,
}: {
  onOpen: (step: "login" | "register") => void;
}) {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Logged out.");
    router.refresh();
  };

  return isAuthenticated ? (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  ) : (
    <>
      <Button variant="outline" onClick={() => onOpen("register")}>
        Create a Wallet
      </Button>
      <Button
        className="btn-primary rounded-full"
        onClick={() => onOpen("login")}
      >
        Login
      </Button>
    </>
  );
}
