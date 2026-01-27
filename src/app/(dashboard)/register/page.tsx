import RegisterPage from "@/containers/register-page";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "Client Registration | Access Your Dashboard",
  description:
    "Create your Neural Rank client account to access SEO performance tracking, AI GEO visibility insights, and website analytics for your serviced domains.",
  path: "/register",
  noIndex: true,
});

function Register() {
  return <RegisterPage />;
}

export default Register;
