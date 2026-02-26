import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

function Home() {
    const products = [
      {
        _id: "p1",
        name: "Precision Wireless Mouse",
        description:
          "Ergonomic 16,000 DPI wireless mouse with 80-hour battery life.",
        price: 89.99,
        category: "Electronics",
        thumbnail:
          "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80",
        ],
        featured: true,
        isNewArrival: false,
        isOutOfStock: false,
      },
      {
        _id: "p2",
        name: "Mechanical Studio Keyboard",
        description:
          "Hot-swappable tactile switches with customizable RGB lighting.",
        price: 159.0,
        category: "Electronics",
        thumbnail:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80",
        ],
        featured: true,
        isNewArrival: false,
        isOutOfStock: false,
      },
      {
        _id: "p3",
        name: "Ultra-Wide 4K Monitor",
        description:
          "34-inch curved display with 144Hz refresh rate and HDR10.",
        price: 499.99,
        category: "Computing",
        thumbnail:
          "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=80",
        ],
        featured: false,
        isNewArrival: true,
        isOutOfStock: false,
      },
      {
        _id: "p4",
        name: "Noise-Cancelling Headphones",
        description:
          "Active noise cancellation with 40mm drivers and plush ear cups.",
        price: 299.0,
        category: "Audio",
        thumbnail:
          "https://images.unsplash.com/photo-1518444028785-8fbcd101ebb9?auto=format&fit=crop&w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1580894894513-f6e88e5b6cde?auto=format&fit=crop&w=1000&q=80",
        ],
        featured: false,
        isNewArrival: true,
        isOutOfStock: false,
      },
      {
        _id: "p5",
        name: "Minimalist Leather Backpack",
        description:
          "Handcrafted Italian leather with a dedicated 16-inch laptop sleeve.",
        price: 125.0,
        category: "Accessories",
        thumbnail:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1520975922284-9f9c3c4b33c4?auto=format&fit=crop&w=1000&q=80",
        ],
        featured: true,
        isNewArrival: true,
        isOutOfStock: false,
      },
    ];
  const featured = products?.filter((p) => p.featured === true);
  const newArrivals = products?.filter((p) => p.isNewArrival === true);
  return (
    <div>
      <Hero />
      <Categories />
      <ProductGrid
        title="Featured Selection"
        products={featured}
        badgeType="featured"
      />
      <ProductGrid
        title="Just Arrived"
        products={newArrivals}
        badgeType="new"
      />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;
