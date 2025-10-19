import ToasterWrapper from "@/components/constants/Toaster";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Nigeria First Aircraft Landing At 100th Year Anniversary",
  description:
    " First Aircraft Landing in Nigeria at Kano 100th Year Anniversary October 30th - November 1st, 2025 Powered by Caliphate Aviation Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToasterWrapper />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
