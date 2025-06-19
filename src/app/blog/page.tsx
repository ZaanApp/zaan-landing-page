import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog | Zaan Platform",
  description:
    "Latest news, tips, and insights for salon and beauty professionals",
};

export default function BlogPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-palette-lightBg py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="text-sm text-palette-teal font-medium mb-2">
              Top Posts
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-palette-darkTeal mb-4">
              {featuredPost.title}
            </h1>
            <p className="text-muted-foreground mb-6 max-w-xl">
              {featuredPost.excerpt}
            </p>
            <Button variant="teal" className="px-6">
              Read More
            </Button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded-md shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-palette-darkTeal mb-8">
                Our Blog Posts
              </h2>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                <Button variant="teal" size="sm" className="rounded-full">
                  All Services
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Salon
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Product
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  Spa
                </Button>
              </div>

              {/* Blog Post List */}
              <div className="space-y-12">
                {blogPosts.slice(0, 5).map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="rounded-md w-full h-48 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-sm text-muted-foreground mb-2">
                        {post.date}
                      </div>
                      <h3 className="text-xl font-semibold text-palette-darkTeal mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                      <Button variant="teal" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12 gap-2">
                <Button variant="teal" size="sm" className="w-10 h-10 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  3
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  4
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  5
                </Button>
              </div>
            </div>

            {/* Top Articles Sidebar */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-palette-darkTeal mb-8">
                Top Articles
              </h2>
              <div className="space-y-6">
                {topArticles.map((article) => (
                  <div key={article.id} className="flex gap-4">
                    <div className="w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="rounded-md w-full h-24 object-cover"
                      />
                    </div>
                    <div className="w-2/3">
                      <div className="text-xs text-muted-foreground mb-1">
                        {article.date}
                      </div>
                      <h3 className="text-sm font-semibold text-palette-darkTeal mb-2">
                        {article.title}
                      </h3>
                      <Button variant="teal" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-palette-darkTeal mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-palette-teal rounded-md flex items-center justify-center text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-palette-teal rounded-md flex items-center justify-center text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-palette-teal rounded-md flex items-center justify-center text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Featured post data
const featuredPost = {
  id: 1,
  title: "صناعة الجمال في المملكة: نصائح لأصحاب صالونات التجميل لاستقبال 2025",
  excerpt:
    "صناعة التجميل تشهد تطورات سريعة في المملكة، تعرف على أحدث النصائح لأصحاب الصالونات لمواكبة التغييرات وتحقيق النجاح في عام 2025 وما بعده.",
  date: "Dec 27, 2024",
  category: "Industry",
  image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
};

// Sample blog post data
const blogPosts = [
  {
    id: 2,
    title:
      "إدارة صالونات التجميل: 5 نصائح يجب الإجابة عليها قبل الاستثمار في مركز تجميل",
    excerpt:
      "قبل الاستثمار في مركز تجميل، هناك عدة أسئلة مهمة يجب الإجابة عليها لضمان نجاح المشروع على المدى الطويل.",
    date: "Mar 24, 2025",
    category: "Management",
    image:
      "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=800&q=80",
  },
  {
    id: 3,
    title:
      "تجهيز صالونات التجميل في رمضان: كيف تجعل صالونك جاهزاً لاستقبال الزبائن؟",
    excerpt:
      "نصائح عملية لتجهيز صالونك خلال شهر رمضان المبارك، من تنظيم المواعيد إلى تقديم خدمات خاصة تناسب الشهر الكريم.",
    date: "Feb 28, 2025",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    id: 4,
    title:
      "صناعة الجمال في المملكة: نصائح لأصحاب صالونات التجميل لاستقبال 2025",
    excerpt:
      "استعد لمستقبل صناعة التجميل في المملكة واكتشف الاتجاهات الجديدة والتقنيات المبتكرة التي ستشكل السوق في السنوات القادمة.",
    date: "Dec 27, 2024",
    category: "Industry",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: 5,
    title: "5 أسباب يجب الإجابة عليها قبل الاستثمار في مركز تجميل",
    excerpt:
      "دراسة الجدوى وتحليل السوق والموقع المناسب وغيرها من العوامل الحاسمة التي يجب دراستها قبل افتتاح مركز تجميل جديد.",
    date: "May 27, 2024",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
  },
  {
    id: 6,
    title: "كيف تبقى على اطلاع على جميع التحديثات الإدارية في مجال تطوير",
    excerpt:
      "استراتيجيات فعالة لمواكبة أحدث التطورات في مجال إدارة صالونات التجميل وكيفية تطبيقها في عملك اليومي لتحقيق أقصى استفادة.",
    date: "May 01, 2024",
    category: "Management",
    image:
      "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800&q=80",
  },
];

// Top articles data
const topArticles = [
  {
    id: 7,
    title: "نقاط الإدارة في العلامة وكيفية استخدامها",
    date: "May 16, 2024",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
  },
  {
    id: 8,
    title: "7 من أفضل طرق وأدوات استخدام مواد التجميل",
    date: "May 08, 2024",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
  },
  {
    id: 9,
    title:
      "توجيهات المستهلكين: كيفية الاستفادة من جلسات على مستحضرات التجميل العضوية والطبيعية",
    date: "May 01, 2024",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    id: 10,
    title: "الفرق بين خدمة صالون وخدمة في صالونات التجميل",
    date: "Apr 28, 2024",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
  },
  {
    id: 11,
    title: "الأسرار المهنية للعناية مع أمهر الخبراء التجميل: نصائح من الخبراء",
    date: "Apr 28, 2024",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
  },
];
