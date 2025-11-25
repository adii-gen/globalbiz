import { Suspense } from "react";
import { EmailVerificationForm } from "@/components/auth/email-verification-form";

function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading verification...</p>
        </div>
      </div>
    }>
      <EmailVerificationForm />
    </Suspense>
  );
}

export default VerifyEmailPage;