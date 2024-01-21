import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import "@styles/globals.scss";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPath = ["/"].includes(pathname);
  return (
    <ClerkProvider {...pageProps}>
      {/* allowing access to the public routes */}
      {isPublicPath && <Component {...pageProps} />}

      {/* allowing access to the protected routes for auth users */}
      {!isPublicPath && (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
