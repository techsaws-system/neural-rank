import LoginPage from "@/containers/login-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "Client Login | Performance Dashboard",
  description:
    "Secure client login to access your Neural Rank dashboard. Track SEO rankings, AI GEO visibility, website performance, and search insights for your serviced websites.",
  path: "/login",
  noIndex: true,
});

function Login() {
  return <LoginPage />;
}

export default Login;
