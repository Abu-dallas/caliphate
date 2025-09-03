import HeaderWrapper from "@/components/HeaderWrapper";

export default function AdminLayout({ children }) {
  return (
    <>
      <div>
        <HeaderWrapper />
        <div>{children}</div>
      </div>
    </>
  );
}
