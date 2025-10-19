"use client";
import { useState } from "react";
import { Copy, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function PaymentPage() {
  const [Copied, setCopied] = useState(false);
  const [payer, setPayer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const accountNumber = "0131277370";
  const accountName =
    "Hundred Years of First Aircraft Landing in Kano Nigeria Concepts";
  const receiverNumber = "08028362836";

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
      <div className="min-h-screen md:w-[70%] flex items-center justify-center px-4">
        <div className="max-w-md w-full px-4 bg-white shadow-xl rounded-2xl p-8 border border-indigo-100">
          <h1 className="text-2xl font-semibold text-rose-950 text-center mb-6">
            Payment Information
          </h1>

          {/* Account Info */}
          <div className="space-y-4 flex flex-col gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-sm text-gray-500">Account Number</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-slate-800">
                  {accountNumber}
                </p>
                <button
                  onClick={handleCopy}
                  className="text-slate-600 hover:text-indigo-800 transition"
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

          <div className="w-full my-6">
            <p className="text-sm text-red-500 py-0.5">Term and conditions</p>
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 h-[200px] overflow-y-scroll">
              <div className="text-xs text-gray-800 mt-1">
                <h3 className="font-bold text-center mt-4">
                  {" "}
                  CALIPHATE AVIATION SERVICES
                </h3>
                <h3 className="font-semibold mt-2">
                  100 YEARS ANNIVERSARY CELEBRATION OF THE FIRST AIRCRAFT
                  LANDING IN NIGERIA AT KANO{" "}
                </h3>
                <h3 className="font-semibold mt-4">
                  Event Registration Fee Terms and Conditions
                </h3>
                <span className="font-semibold mt-2">
                  1. Registration and Payments
                </span>{" "}
                - Registration is confirmed only upon receipt of full payment of
                the applicable registration fee. - All payments must be made in
                the currency stated on the registration form (NGN). - Accepted
                payment methods include bank transfer, debit/credit card, or any
                method approved by the event organizer. - Once payment is made,
                participants will receive an official confirmation email or sms
                and event access details. - All registration fees are
                non-refundable and non-transferable under any circumstances.
                <br />
                <br />
                <span className="font-semibold mt-2">
                  2. Identification Requirement
                </span>{" "}
                - All students, participants, exhibitors, and vendors must
                present a valid means of identification (such as a student ID
                card, national ID, or other government-issued ID) at the point
                of registration or entry. - Failure to present valid
                identification may result in denial of entry without refund.
                <br />
                <br />
                <span className="font-semibold mt-2">
                  3. Substitution and Modification Policy
                </span>{" "}
                - No substitution of participants is allowed after registration.
                - Only vendors and exhibitors are permitted a limited number of
                substitutions, as authorized in writing by the event organizer.
                - Any request for changes, corrections, or updates to
                registration information must be submitted in writing no later
                than ten (7) days before the event date. - Requests received
                after this period will not be considered.
                <br />
                <br />
                <span className="font-semibold mt-2">4. Event Changes</span> -
                The organizer reserves the right to modify the event schedule,
                venue, speakers, or program components (including workshops,
                exhibitions, or performances) as necessary. - In the event of
                unforeseen circumstances, the organizer may reschedule the event
                or adjust specific sessions (including shifting certain
                activities online). - All updates will be communicated promptly
                through official channels such as email, website, or social
                media.
                <br />
                <br />
                <span className="font-semibold mt-2">5. Liability </span>- The
                organizer shall not be liable for any personal injury, loss,
                damage, or theft of property occurring before, during, or after
                the event. - Participants are responsible for their own travel
                arrangements, accommodation, and personal insurance. - Vendors
                and exhibitors are responsible for the safety and insurance of
                their display materials, equipment, and products throughout the
                event. - The organizer will not be held responsible for any loss
                or damage resulting from circumstances beyond its control (e.g.,
                weather, government regulations, or public disturbances).
                <br />
                <br />
                <span className="font-semibold mt-2">
                  6. Data Protection and Privacy
                </span>{" "}
                - By registering for the event, participants consent to the
                collection and processing of their personal information for
                purposes related to event organization, communication, and
                attendance verification. - The information provided will be used
                solely for event administration and will not be shared with
                third parties, except where required by law or for essential
                operational purposes (e.g., accreditation or security
                clearance). - Photographs, audio, and video recordings may be
                taken during the event and used by the organizer for
                documentation, publicity, and promotional purposes. -
                Participants who prefer not to appear in such materials should
                notify the organizer in writing prior to the event.
                <br />
                <br />
                <span className="font-semibold mt-2">
                  7. Organizer’s Rights
                </span>{" "}
                - The organizer reserves the right to deny entry or remove any
                participant who fails to comply with event rules, safety
                instructions, or security requirements. - Refuse registration or
                admission to any individual whose conduct is deemed
                inappropriate, disruptive, or unsafe. - Enforce all venue
                regulations and security protocols as necessary to ensure a safe
                and professional environment. - Make operational adjustments to
                maintain event quality and compliance with applicable laws or
                safety standards. - Any participant removed from the event for
                misconduct or violation of these terms will not be entitled to a
                refund.
                <br />
                <br />
                <span className="font-semibold mt-2">
                  8. Acceptance of Terms{" "}
                </span>
                By completing the registration process and making payment,
                participants acknowledge that they have read, understood, and
                agreed to abide by these Terms and Conditions. These terms apply
                to all categories of attendees, including students,
                professionals, vendors, and exhibitors.
                <br />
                <br />
                <span className=" italic">
                  Event Organizer: Caliphate Aviation Training Center Event
                  Date: 30th October – 1st November 2025 Location: Mallam Aminu
                  Kano International Airport, Kano Nigeria.
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-2 ml-2">
              <span className="text-indigo-800 font-semibold">Agreed</span>
              <input type="checkbox" className="size-4" />
            </div>
          </div>

          {/* Instruction */}
          <div className="mt-6 bg-gradient-to-r from-indigo-300 to-blue-200 text-white text-center py-3 rounded-xl shadow-md">
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
              className="w-full px-4 py-2 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-rose-950 outline-none"
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
