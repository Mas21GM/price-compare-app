import { supabase } from "../../lib/supabaseClient";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return (
      <main style={{ padding: 20 }}>
        <h2>Error loading products</h2>
        <pre>{error.message}</pre>
      </main>
    );
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Products from Supabase</h1>

      {data.length === 0 && <p>No products yet.</p>}

      <ul>
        {data.map((p) => (
          <li key={p.id}>
            {p.name} — {p.upc}
          </li>
        ))}
      </ul>
    </main>
  );
}
