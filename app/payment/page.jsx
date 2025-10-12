"use client";
import { useState } from "react";
import { Copy, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function PaymentPage() {
  const [payer, setPayer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const accountNumber = "0131277370";
  const accountName =
    "Hundred Years of First Aircraft Landing in Kano Nigeria Concepts";
  const receiverNumber = "08030420079";

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    toast.success("Copied to Clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Send payment confirmation via WhatsApp
  const sendPaymentMessage = () => {
    if (!payer.name || !payer.email || !payer.phone) {
      toast.error("Please fill in all your details first!");
      return;
    }

    const intlNumber = "234" + receiverNumber.slice(1);
    const message = `
📢 *Payment Notification*

Name: ${payer.name}
Email: ${payer.email}
Phone: ${payer.phone}

✅ Payment has been made successfully.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${intlNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <div className="py-4 flex justify-center">
      <div className="min-h-screen md:w-[70%] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4">
        <div className="max-w-md w-full px-4 bg-white shadow-xl rounded-2xl p-8 border border-indigo-100">
          <h1 className="text-2xl font-semibold text-indigo-700 text-center mb-6">
            Payment Information
          </h1>

          {/* Account Info */}
          <div className="space-y-4 flex flex-col gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-gray-500">Account Number</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-indigo-800">
                  {accountNumber}
                </p>
                <button
                  onClick={handleCopy}
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <Copy size={18} />
                </button>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-gray-500">Account Name</p>
              <p className="text-base font-medium text-gray-800 mt-1">
                {accountName}
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="text-base font-medium text-gray-800 mt-1">
                Sterling Bank
              </p>
            </div>
          </div>

          {/* Instruction */}
          <div className="mt-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-3 rounded-xl shadow-md">
            <p className="text-sm font-medium text-slate-800">
              Please make your payment to the account above.
            </p>
            <p className="text-xs opacity-90 mt-1 text-slate-800">
              After payment, send your payment details below.
            </p>
          </div>

          {/* User Input Fields */}
          <div className="mt-6 space-y-3 flex flex-col gap-2 mb-3">
            <input
              type="text"
              placeholder="Your Name"
              value={payer.name}
              onChange={(e) => setPayer({ ...payer, name: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={payer.email}
              onChange={(e) => setPayer({ ...payer, email: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={payer.phone}
              onChange={(e) => setPayer({ ...payer, phone: e.target.value })}
              className="w-full px-4 py-2 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              onClick={sendPaymentMessage}
              className="w-full bg-rose-950 hover:bg-rose-950 py-2 rounded-xl flex items-center justify-center gap-2 transition mt-3"
            >
              <Send size={18} className="text-white" />
              <span className="text-slate-100">Send via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
