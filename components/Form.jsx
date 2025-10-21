"use client";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { validateMember } from "./constants/formikValidate";
import FormLoader from "./constants/FormLoader";
import { useRouter } from "next/navigation";

function Form() {
  const [Loading, setLoading] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
    validate: validateMember,
    onSubmit,
  });
  async function onSubmit(values) {
    const payload = {
      ...values,
      organisation,
    };
    try {
      setLoading(true);
      const res = await fetch("/api/product-register", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success("Redirecting to payment");
        setLoading(false);
        (values.name = ""), (values.email = ""), (values.phone = "");
        (values.organisation = ""), (values.company = ""), setOrganisation("");
        router.push("/payment");
      }
      if (!res.ok) {
        toast.error("failed to register, try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Admin_Register_Frontend_error", error);
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center flex-col justify-center py-12 mt-8 px-4">
      <h2 className="text-3xl font-extrabold text-rose-950 mb-4">
        Register Your Interest
      </h2>
      <p className="text-lg mb-5 text-center text-slate-600">
        (Fill in your details below)
      </p>
      <div className="w-full md:w-[50%]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-2  px-5 border border-slate-200  py-12  rounded-2xl"
        >
          <div className="md:flex items-center justify-center gap-2 w-full">
            <div className="flex flex-col w-full">
              <label className="text-rose-950">Full Name</label>
              <input
                placeholder="Enter your full name"
                type="text"
                name="name"
                className="py-3 pl-2 rounded-lg outline-none border bg-neutral-100 border-slate-200 focus:ring-2 ring-rose-950"
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <span className="text-sm text-rose-700 mt-1">
                  {formik.errors.name}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-rose-950">Email</label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                className=" py-3 pl-2 rounded-lg outline-none bg-neutral-100 border border-slate-200 focus:ring-2 ring-rose-950"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-sm text-rose-700 mt-1">
                  {formik.errors.email}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-rose-950">Phone</label>
            <input
              placeholder="Enter your phone number"
              type="text"
              name="phone"
              className="py-3 pl-2 rounded-lg outline-none bg-neutral-100 border border-slate-200 focus:ring-2 ring-rose-950"
              {...formik.getFieldProps("phone")}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <span className="text-sm text-rose-700 mt-1">
                {formik.errors.phone}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-rose-950">Participant Type</label>
            <select
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              className="py-3 pl-2 rounded-lg outline-none bg-neutral-100 border border-slate-200 focus:ring-2 ring-rose-950"
            >
              <option value="" disabled className="text-slate-600">
                Select Category
              </option>
              <option value="Industry Participant">Industry Participant</option>
              <option value="Exhibitor">Exhibitor</option>
              <option value="Student">Student</option>
              <option value="Vendor">Vendor</option>
              <option value="VIP">VIP</option>
            </select>
            {organisation ? (
              <p className="text-[11px] py-1 mt-1 font-semibold -ml-4 text-rose-950 text-nowrap">
                <span className="ml-4">
                  {organisation === "Industry Participant"
                    ? "A valid means of identification will be required at the event."
                    : organisation === "Exhibitor"
                    ? "Each exhibitor registration covers two participant, including the exhibitor."
                    : organisation === "Student"
                    ? "A valid school identification card will be required at the event."
                    : organisation === "Vendor"
                    ? "Each vendor registration covers two participant, including the vendor."
                    : organisation === "VIP"
                    ? ""
                    : ""}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-rose-950">
              Company/School/Organisation Name
            </label>
            <input
              placeholder="Enter your organisation name"
              type="text"
              name="company"
              className="py-3 pl-2 rounded-lg outline-none bg-neutral-100 border border-slate-200 focus:ring-2 ring-rose-950"
              {...formik.getFieldProps("company")}
            />
            {formik.errors.company && formik.touched.company ? (
              <span className="text-sm flex items-center justify-center text-rose-950 mt-1">
                {formik.errors.company}
              </span>
            ) : (
              ""
            )}
          </div>
          {/*
          <div className="flex flex-col">
            <label className="text-rose-950">Upload ID</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="file"
              className="py-3 pl-2 rounded-lg outline-none bg-neutral-100 border border-slate-200 focus:ring-2 ring-rose-950"
            />
          </div>
          */}

          {organisation ? (
            <span className="bg-slate-100 text-xl px-4 text-center p-1 mt-4 text-rose-950 font-bold">
              Fee:{" "}
              <span className="ml-4">
                ₦
                {organisation === "Industry Participant"
                  ? "20,000"
                  : organisation === "Exhibitor"
                  ? "150,000"
                  : organisation === "Student"
                  ? "15,000"
                  : organisation === "Vendor"
                  ? "120,000"
                  : organisation === "VIP"
                  ? "50,000"
                  : ""}
              </span>
            </span>
          ) : (
            ""
          )}

          <button
            className="bg-rose-950 flex items-center justify-center  rounded p-3 text-white font-bold mt-5"
            type="submit"
          >
            {Loading ? <FormLoader /> : "Proceed to payment"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
