import Image from "next/image";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Home() {
  return (
    <div>
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
