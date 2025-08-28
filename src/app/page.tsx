import { Badge, Button, StarRating } from "@/components/ui";
import {
  MapPin,
  Calendar,
  Users,
  MessageCircle,
  ExternalLink,
  Shield,
  Award,
  Clock,
  Globe,
  Building,
  CheckCircle,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import vendorData from "@/assets/vendors.json";
import Image from "next/image";
import products from "@/assets/products.json";
import { ProductCard } from "@/components/cards";

export default function Page() {
  return (
    <main className="space-y-10 pb-10">
      {/* Hero Section */}
      <div>
        <Image
          src={vendorData[0]?.cover}
          width={500}
          height={500}
          alt={"Vendor Banner"}
          className="h-[350px] w-full object-cover"
        />

        <div className="container relative -mt-28 rounded-2xl shadow p-10 border bg-background">
          {vendorData?.map((item) => (
            <div className="space-y-5" key={item?.id}>
              <div className="flex items-center justify-between gap-5">
                {/* Vendor Header */}
                <div className="flex items-center gap-5 pb-3.5">
                  <Image
                    src={item?.avatar}
                    width={500}
                    height={500}
                    alt={"Vendor Logo"}
                    className="size-32 rounded-full object-cover border ring-2 ring-rose-600"
                  />

                  <div className="space-y-1">
                    <h3>{item?.name}</h3>

                    <div className="flex items-center flex-wrap gap-3.5">
                      <div className="flex items-center gap-3.5">
                        <StarRating value={item?.rating} />

                        <p className="font-medium">
                          ({item.totalReviews} reviews)
                        </p>
                      </div>

                      <Badge className="bg-green-100 text-green-800">
                        <Shield />
                        {item?.verificationStatus}
                      </Badge>

                      <Badge className="bg-blue-100 text-blue-800">
                        <Building />
                        {item?.businessType}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* CTA (Desktop) */}
                <div className="hidden lg:flex flex-col gap-2.5">
                  <Button variant="outline">
                    <MessageCircle className="size-4" />
                    Contact Vendor
                  </Button>

                  <Button>
                    <UserPlus className="size-4" />
                    Follow Store
                  </Button>
                </div>
              </div>

              {/* CTA (Mobile) */}
              <div className="flex lg:hidden flex-col gap-2.5">
                <Button variant="outline">
                  <MessageCircle className="size-4" />
                  Contact Vendor
                </Button>

                <Button>
                  <UserPlus className="size-4" />
                  Follow Store
                </Button>
              </div>

              {/* Vendor Comapany Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 space-y-1.5 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-primary" />
                  <span className="font-medium">{item?.location}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-primary" />
                  <span className="font-medium">
                    Member since {item?.memberSince} • {item?.yearsInBusiness}{" "}
                    years in business
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users className="size-4 text-primary" />
                  <span className="font-medium">
                    Team size: {item?.teamSize} employees
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="size-4 text-primary" />
                  <span className="font-medium">{item?.businessHours}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Globe className="size-4 text-primary" />
                  <span className="font-medium">
                    Languages: {item?.languages?.join(", ")}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <TrendingUp className="size-4 text-primary" />
                  <span className="font-medium">
                    {item?.stats?.customerSatisfaction} satisfaction rate
                  </span>
                </div>
              </div>

              {/* About Vendor */}
              <div className="space-y-1.5">
                <h6>About Us</h6>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, quaerat? Et dolorem illo atque rem rerum fugit
                  reiciendis animi praesentium amet, ipsa aliquam architecto,
                  adipisci sed incidunt nobis eos, nulla consequatur sint
                  corrupti minima! Tenetur, non beatae! Asperiores aut inventore
                  ducimus magnam eligendi officia minus sit maiores accusamus
                  iste at dicta rem libero dolorem molestiae assumenda veniam,
                  sequi officiis nobis eos laboriosam quod! Unde est pariatur
                  officia vel ullam! Molestias a dolorum impedit quo aspernatur
                  neque eaque voluptate corrupti dolor cupiditate eius sed
                  quibusdam commodi deleniti ullam sequi optio magni sunt quae,
                  alias blanditiis iusto nulla rem? Placeat tempore vero soluta
                  quo nam quos officia in reiciendis, nesciunt consequuntur,
                  dolorem ipsum similique sed est aut porro possimus laborum,
                  quisquam ipsa perferendis et? Quidem, cum, animi maiores a
                  voluptates sint, nemo accusantium esse fugiat itaque labore.
                  Numquam expedita maxime iste laborum vel? Provident rem
                  impedit asperiores doloribus, nulla sequi tempore delectus cum
                  enim odit sint. Consectetur perspiciatis numquam tempora alias
                  fugiat corrupti nulla quos sit, esse voluptate reiciendis
                  distinctio libero qui eos culpa. Amet earum quos rem aliquam
                  mollitia pariatur explicabo laborum est dignissimos? Alias ex
                  harum quod, officiis, at id sit labore repellat autem dicta,
                  ipsum ipsam facilis impedit incidunt.
                </p>
              </div>

              {/* Vendor Achievements*/}
              <div className="space-y-1.5">
                <h6>Achievements</h6>

                <div className="flex flex-wrap gap-2.5">
                  {item?.achievements?.map((item, index) => (
                    <Badge key={index} className="bg-amber-100 text-amber-800">
                      <Award />
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Vendor Certifications */}
              <div className="space-y-1.5">
                <h6>Certifications</h6>

                <div className="flex flex-wrap gap-2.5">
                  {item?.certifications?.map((item, index) => (
                    <Badge key={index}>
                      <CheckCircle />
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container space-y-5">
        <div className="flex items-center justify-between gap-5">
          <div>
            <h4>Featured Products</h4>
            <p>Discover our most popular items</p>
          </div>

          <Button variant="outline">
            All Products
            <ExternalLink className="size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products?.map((item) => (
            <ProductCard item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
