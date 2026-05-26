import mockData from "./mockData.json";

export type Producto = (typeof mockData.productos)[number];
export type Categoria = (typeof mockData.categorias)[number];
export type Coleccion = (typeof mockData.colecciones)[number];
export type SortOption = "relevancia" | "ventas" | "precio-mayor" | "precio-menor";

export interface ProductCardData {
  id: string;
  name: string;
  price: number;
  image: string;
  href: string;
}

export interface PageContent {
  title: string;
  bannerImg: string;
  descripcion?: string;
}

function toProductCard(producto: Producto): ProductCardData {
  return {
    id: String(producto.id),
    name: producto.nombre,
    price: producto.precio,
    image: producto.imagen_url,
    href: `/product/${producto.id}`,
  };
}

export function getFeaturedProducts(): ProductCardData[] {
  return mockData.productos.filter((p) => p.destacado).map(toProductCard);
}

export function getBestSellers(limit = 4): ProductCardData[] {
  return [...mockData.productos]
    .filter((p) => p.mas_vendido)
    .sort((a, b) => b.ventas - a.ventas)
    .slice(0, limit)
    .map(toProductCard);
}

export function getCategories() {
  return mockData.categorias.map((categoria) => ({
    label: categoria.nombreCategoria,
    href: `/${categoria.slug}`,
    emoji: categoria.emoji,
  }));
}

export function getOccasionsHome() {
  return mockData.ocasiones_home.map((ocasion) => ({
    label: ocasion.label,
    image: ocasion.emoji,
    href: ocasion.slug === "condolencias" ? "/condolencias" : `/ocasiones/${ocasion.slug}`,
  }));
}

export function getPageContent(slug: string): PageContent {
  const normalized = slug.toLowerCase();

  const coleccion = mockData.colecciones.find((c) => c.slug === normalized);
  if (coleccion) {
    return { 
      title: coleccion.titulo, 
      bannerImg: coleccion.bannerImg,
      ...(coleccion.descripcion && { descripcion: coleccion.descripcion })
    };
  }

  const categoria = mockData.categorias.find((c) => c.slug === normalized);
  if (categoria) {
    return {
      title: categoria.nombreCategoria,
      bannerImg: mockData.pagina_default.bannerImg,
    };
  }

  return {
    title: mockData.pagina_default.titulo,
    bannerImg: mockData.pagina_default.bannerImg,
  };
}

export function getProductsBySlug(slug: string): Producto[] {
  const normalized = slug.toLowerCase();

  const categoria = mockData.categorias.find((c) => c.slug === normalized);
  if (categoria) {
    return mockData.productos.filter((p) => p.id_categoria === categoria.id);
  }

  const coleccion = mockData.colecciones.find((c) => c.slug === normalized);
  if (coleccion) {
    if (coleccion.slug === "mas-vendidos") {
      return mockData.productos.filter((p) => p.mas_vendido);
    }
    if (coleccion.slug === "promociones") {
      return mockData.productos.filter((p) => p.colecciones.includes("promociones"));
    }
    return mockData.productos.filter((p) => p.colecciones.includes(coleccion.slug));
  }

  return mockData.productos;
}

export function getPriceBounds() {
  const prices = mockData.productos.map((p) => p.precio);
  return {
    min: Math.floor(Math.min(...prices)),
    max: Math.ceil(Math.max(...prices)),
  };
}

export function filterAndSortProducts(
  products: Producto[],
  options: {
    sortBy: SortOption;
    maxPrice: number;
    minPrice?: number;
    selectedOccasions?: string[];
    selectedColors?: string[];
  }
): ProductCardData[] {
  const { sortBy, maxPrice, minPrice = 0, selectedOccasions = [], selectedColors = [] } = options;

  let filtered = products.filter(
    (p) => p.precio >= minPrice && p.precio <= maxPrice
  );

  if (selectedOccasions.length > 0) {
    filtered = filtered.filter((p) =>
      selectedOccasions.some((occ) => p.ocasiones.includes(occ))
    );
  }

  if (selectedColors.length > 0) {
    filtered = filtered.filter((p) =>
      selectedColors.some((color) => p.colores.includes(color))
    );
  }

  const sorted = [...filtered];

  switch (sortBy) {
    case "ventas":
      sorted.sort((a, b) => b.ventas - a.ventas);
      break;
    case "precio-mayor":
      sorted.sort((a, b) => b.precio - a.precio);
      break;
    case "precio-menor":
      sorted.sort((a, b) => a.precio - b.precio);
      break;
    case "relevancia":
    default:
      sorted.sort((a, b) => Number(b.destacado) - Number(a.destacado));
      break;
  }

  return sorted.map(toProductCard);
}

export const catalog = {
  home: mockData.home,
  filtros: mockData.filtros,
  navegacion: mockData.navegacion,
  tiendaInfo: mockData.tienda_info,
};
