"use client";
import { Search, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PageLoader from "@/components/constants/PageLoader";
import Link from "next/link";

function ManageProducts() {
  const [Loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [SearchQuery, setSearchQuery] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/get-all-members");
      const data = await res.json();
      setdata(data);
      if (res.ok) {
        setLoading(false);
      }
    } catch (error) {
      console.log("[GET_MEMBERS_ERROR]", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (memberId) => {
    try {
      const res = await fetch(`/api/product-register/${memberId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Member is deleted");
        window.location.href = "/admin/members";
      }
    } catch (error) {
      console.log("[DELETE_FRONDEND_ERROR]", error);
      toast.error("failed to delete, try again");
    }
  };

  const FilterMember = data.filter(
    (member) =>
      member.name.toLowerCase().includes(SearchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(SearchQuery.toLowerCase()) ||
      member.phone.toString().includes(SearchQuery.toString())
  );

  return (
    <div className="w-full h-screen py-4 bg-slate-100 ">
      <div className="flex max-sm:mt-20 items-center max-sm:flex-col-reverse justify-between gap-3 mt-6 px-6">
        <span className="w-[250px] max-sm:w-full flex items-center rounded-lg ring-1 ring-slate-400 border-slate-200 ">
          <input
            type="text"
            placeholder="Search Admin"
            className="p-2 w-full outline-none text-slate-700"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="text-slate-400 size-8 mx-2" />
        </span>
        <Link
          href="/admin/manage-admins"
          className="bg-rose-950 text-center p-2 text-slate-100 rounded-lg max-sm:w-full"
        >
          Admins
        </Link>
      </div>
      <div className="px-6 py-8 font-bold flex justify-center flex-col gap-8">
        <p className="text-rose-950 text-2xl">Registered Members</p>
        <div className="overflow-x-auto hidebar">
          {Loading ? (
            <div className="flex items-center justify-center w-full">
              <PageLoader />
            </div>
          ) : (
            <table className="w-full">
              <thead className="text-left border-b-2 border-slate-200">
                <tr>
                  <th className="text-lg max-sm:text-sm max-sm:px-8 font-bold text-rose-950">
                    S/N
                  </th>
                  <th className="text-lg max-sm:text-sm max-sm:px-8 font-bold text-rose-950">
                    Name
                  </th>
                  <th className="text-lg max-sm:text-sm max-sm:px-8 font-bold text-rose-950">
                    Email Address
                  </th>
                  <th className="text-lg max-sm:text-sm max-sm:px-8 font-bold text-rose-950">
                    Phone
                  </th>
                  <th className="text-lg max-sm:text-sm max-sm:px-8 font-bold text-rose-950">
                    Organisation
                  </th>
                  <th className="text-lg max-sm:text-sm max-sm:px-8 font-bold text-rose-950">
                    Company
                  </th>
                </tr>
              </thead>
              <tbody>
                {FilterMember.map((member, index) => (
                  <tr key={index}>
                    <td className="text-sm max-sm:text-sm whitespace-nowrap max-sm:px-8 text-slate-700 font-normal text-left py-2">
                      {index + 1}
                    </td>
                    <td className="text-sm whitespace-nowrap max-sm:text-sm max-sm:px-8 text-slate-700 font-normal text-left py-2">
                      {member.name.toUpperCase()}
                    </td>
                    <td className="text-sm whitespace-nowrap max-sm:text-sm max-sm:px-8 text-slate-700 font-normal text-left py-2">
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </td>
                    <td className="text-sm whitespace-nowrap max-sm:text-sm max-sm:px-8 text-slate-700 font-normal text-left py-2">
                      <a href={`tel:${member.phone}`}>{member.phone}</a>
                    </td>
                    <td className="text-sm whitespace-nowrap max-sm:text-sm max-sm:px-8 text-slate-700 font-normal text-left py-2">
                      {member.organisation}
                    </td>
                    <td className="text-sm whitespace-nowrap max-sm:text-sm max-sm:px-8 text-slate-700 font-normal text-left py-2">
                      {member.company}
                    </td>
                    <td className="text-sm whitespace-nowrap max-sm:text-sm max-sm:px-8 w-28 text-slate-700 font-normal text-left py-2">
                      <span className="flex items-center  gap-6">
                        <Trash
                          onClick={() => handleDelete(member._id)}
                          className="text-rose-500"
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageProducts;
