import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { Suspense } from "react";

function ResetPasswordPage() {
  return (
    <div className=" mt-3 flex items-center">
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
