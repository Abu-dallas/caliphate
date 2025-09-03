"use client";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { validateMember } from "./constants/formikValidate";
import FormLoader from "./constants/FormLoader";

function Form() {
  const [Loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      organisation: "",
      company: "",
    },
    validate: validateMember,
    onSubmit,
  });
  async function onSubmit(values) {
    const payload = {
      ...values,
    };
    try {
      setLoading(true);
      const res = await fetch("/api/product-register", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success("Thank you for your interest");
        setLoading(false);
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
    <div className="flex items-center flex-col justify-center py-12 mt-16 px-4">
      <h2 className="text-4xl font-extrabold text-rose-950 mb-4">
        Register Your Interest
      </h2>
      <p className="text-lg mb-5 text-slate-600">
        (Be part of this historic celebration. Fill in your details below)
      </p>
      <div className="w-full md:w-[50%]">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-2  px-5 border border-slate-200  py-12  rounded-2xl"
        >
          <div className="flex flex-col">
            <label className="text-rose-950">Name</label>
            <input
              type="text"
              name="name"
              className="py-3 pl-2 rounded-lg outline-none border border-slate-200 focus:ring-2 ring-rose-950"
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
          <div className="flex flex-col">
            <label className="text-rose-950">Email</label>
            <input
              type="email"
              name="email"
              className=" py-3 pl-2 rounded-lg outline-none border border-slate-200 focus:ring-2 ring-rose-950"
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
          <div className="flex flex-col">
            <label className="text-rose-950">Phone</label>
            <input
              type="text"
              name="phone"
              className="py-3 pl-2 rounded-lg outline-none border border-slate-200 focus:ring-2 ring-rose-950"
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
            <label className="text-rose-950">Institution/Organization</label>
            <input
              type="text"
              name="organization"
              className="py-3 pl-2 rounded-lg outline-none border border-slate-200 focus:ring-2 ring-rose-950"
              {...formik.getFieldProps("organisation")}
            />
            {formik.errors.organisation && formik.touched.organisation ? (
              <span className="text-sm flex items-center justify-center text-rose-700 mt-1">
                {formik.errors.organisation}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-rose-950">Company</label>
            <input
              type="text"
              name="company"
              className="py-3 pl-2 rounded-lg outline-none border border-slate-200 focus:ring-2 ring-rose-950"
              {...formik.getFieldProps("company")}
            />
            {formik.errors.company && formik.touched.company ? (
              <span className="text-sm flex items-center justify-center text-rose-700 mt-1">
                {formik.errors.company}
              </span>
            ) : (
              ""
            )}
          </div>

          <button
            className="bg-rose-950 flex items-center justify-center  rounded p-3 text-white font-bold mt-5"
            type="submit"
          >
            {Loading ? <FormLoader /> : " Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
