"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { validateAdminReg } from "@/components/constants/formikValidate";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function NewAdmin() {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    },
    validate: validateAdminReg,
    onSubmit,
  });
  async function onSubmit(values) {
    const payload = {
      ...values,
    };
    try {
      setLoading(true);
      const res = await fetch("/api/admin-register", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        toast.success("Admin Created Successfully");
        setLoading(false);

        router.push("/admin/manage-admins");
      }
    } catch (error) {
      console.log("Admin_Register_Frontend_error", error);
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-100 w-full  h-screen">
      <div className="p-12 max-sm:p-4 flex flex-col items-center max-sm:h-[90%] justify-center">
        <p className="text-3xl text-rose-950 font-bold ">Register New Admin</p>
        <div className="w-[50%] max-md:w-full ">
          <form
            className="w-full mt-5 flex flex-col gap-1"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label className="text-slate-700 text-lg" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter FullName"
                className="w-full p-2 outline-none border-1 border-slate-300 rounded text-slate-700"
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
            <div>
              <label className="text-slate-700 text-lg" htmlFor="Email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full p-2 outline-none border-1 border-slate-300 rounded text-slate-700"
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
            <div>
              <label className="text-slate-700 text-lg" htmlFor="Password">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 outline-none border-1 border-slate-300 rounded text-slate-700"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-sm text-rose-700 mt-1">
                  {formik.errors.password}
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label
                className="text-slate-700 text-lg"
                htmlFor="Confirm Password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 outline-none border-1 border-slate-300 rounded text-slate-700"
                {...formik.getFieldProps("cpassword")}
              />
              {formik.errors.cpassword && formik.touched.cpassword ? (
                <span className="text-sm text-rose-700 mt-1">
                  {formik.errors.cpassword}
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="text-slate-700 text-lg" htmlFor="Phone">
                Phone
              </label>
              <input
                type="phone"
                placeholder="Phone Number"
                className="w-full p-2 outline-none border-1 border-slate-300 rounded text-slate-700"
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

            <span className="flex gap-3">
              <button
                disabled={Loading}
                className="text-lg font-semibold bg-slate-700 text-slate-100 w-[200px] max-sm:w-full mt-4 p-1 rounded hover:scale-98"
                type="submit"
              >
                {Loading ? "Create..." : "Create"}
              </button>
              <Link
                href="/admin/manage-admins"
                className="text-lg font-semibold text-center bg-rose-500 text-slate-100 w-[200px] max-sm:w-full mt-4 p-1 rounded hover:scale-98"
              >
                Cancel
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAdmin;
