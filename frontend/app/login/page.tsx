import AuthView from "@/components/auth/AuthView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login & Signup - OceanEmbed",
  description: "Sign in to access high-resolution 3D ocean temperature reconstructions and subsurface embedding analytics.",
};

export default function LoginPage() {
  return <AuthView />;
}
