import Breadcrumbs from "./components/Breadcrumbs";

export default function Home() {
  return (
    <div className="p-4">
      <Breadcrumbs
        iconPath="/home.svg"
        items={[
          { title: "پروفایل", href: "#", active: false },
          { title: "ویرایش", href: "#", active: true }
        ]}
      />
    </div>
  );
}
