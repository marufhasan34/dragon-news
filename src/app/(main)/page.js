import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import RightSideBar from "@/components/homePage/news/RightSideBar";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="grid grid-cols-12 gap-5 container mx-auto my-16">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null} />
      </div>
      <div className="col-span-6"></div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
}
