import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_WP_API_BASE;

function extractFirstImageUrl(html) {
  if (!html) return "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || "";
}

const styles = {
  main: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: 24,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: 24,
    fontSize: 32,
  },
  grid: {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20,
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: 12,
    overflow: "hidden",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: 240,
    objectFit: "cover",
    display: "block",
  },
  content: {
    padding: 16,
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  excerpt: {
    color: "#444",
    lineHeight: 1.5,
  },

  cartSection: {
    marginTop: 40,
    padding: 24,
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
  },
  cartHeading: {
    margin: "0 0 16px 0",
    fontSize: 28,
    color: "#1f2937",
  },
  cartCount: {
    margin: "0 0 20px 0",
    color: "#6b7280",
    fontSize: 16,
  },
  cartList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: 14,
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
  },
  cartImage: {
    width: 120,
    height: 90,
    objectFit: "cover",
    borderRadius: 10,
    flexShrink: 0,
  },
  cartText: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  cartItemTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  cartItemExcerpt: {
    margin: 0,
    fontSize: 14,
    color: "#4b5563",
  },
  emptyCart: {
    padding: 20,
    textAlign: "center",
    color: "#6b7280",
    background: "#fff",
    border: "1px dashed #d1d5db",
    borderRadius: 12,
  },
};

export default function App() {
  const [posts, setPosts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  function addToCart(bike) {
    setCart([...cart, bike]);
  }

  function stripHtml(html) {
    return html.replace(/<[^>]*>/g, "");
  }

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        setLoading(true);
        setError("");

        if (!API_BASE) {
          throw new Error("VITE_WP_API_BASE is missing");
        }

        const cleanBase = API_BASE.replace(/\/$/, "");
        const url = `${cleanBase}/wp-json/wp/v2/posts?_embed=true`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        if (!cancelled) setPosts(data);
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : String(e));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p style={{ padding: 24 }}>Loading...</p>;
  if (error)
    return <p style={{ padding: 24, color: "crimson" }}>Error: {error}</p>;

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Bike Shop</h1>

      <ul style={styles.grid}>
        {posts.map((post) => {
          const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
          const featuredImageUrl =
            featuredMedia?.media_details?.sizes?.medium?.source_url ||
            featuredMedia?.source_url ||
            "";

          const contentImageUrl = extractFirstImageUrl(post.content?.rendered);
          const imageUrl = featuredImageUrl || contentImageUrl;

          return (
            <li key={post.id} style={styles.card}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={featuredMedia?.alt_text || post.title.rendered}
                  style={styles.image}
                />
              )}

              <div style={styles.content}>
                <h2
                  style={styles.cardTitle}
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div
                  style={styles.excerpt}
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <button onClick={() => addToCart(post)}>Add to Cart</button>
              </div>
            </li>
          );
        })}
      </ul>

      <section style={styles.cartSection}>
        <h2 style={styles.cartHeading}>Shopping Cart</h2>
        <p style={styles.cartCount}>{cart.length} item(s) in cart</p>

        {cart.length === 0 ? (
          <div style={styles.emptyCart}>Your cart is empty</div>
        ) : (
          <ul style={styles.cartList}>
            {cart.map((item, index) => {
              const featuredMedia = item._embedded?.["wp:featuredmedia"]?.[0];
              const featuredImageUrl =
                featuredMedia?.media_details?.sizes?.medium?.source_url ||
                featuredMedia?.source_url ||
                "";

              const contentImageUrl = extractFirstImageUrl(
                item.content?.rendered,
              );
              const imageUrl = featuredImageUrl || contentImageUrl;

              return (
                <li key={index} style={styles.cartItem}>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={featuredMedia?.alt_text || item.title.rendered}
                      style={styles.cartImage}
                    />
                  )}

                  <div style={styles.cartText}>
                    <h3 style={styles.cartItemTitle}>{item.title.rendered}</h3>
                    <p style={styles.cartItemExcerpt}>
                      {stripHtml(item.excerpt.rendered)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
