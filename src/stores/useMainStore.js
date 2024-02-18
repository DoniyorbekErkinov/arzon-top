import { defineStore } from "pinia";
import { ref } from "vue";
import { useGet, usePost } from "src/composible/ApiService";
export const useMainStore = defineStore("main", () => {
  const brands = ref([]);
  const brands_count = ref(0);
  const brands_limit = ref(40);
  const brands_offset = ref(0);
  const brands_products = ref([]);
  const brands_products_count = ref(0);
  const products = ref([]);
  const products_count = ref(0);
  const products_limit = ref(40);
  const products_offset = ref(0);
  const viewedProducts = ref([])
  const chosenProduct = ref({})

  function getBrands() {
    useGet({
      url: `api/brands/?limit=${brands_limit.value}&offset=${brands_offset.value}`,
    }).then((res) => {
      console.log(res.data);
      brands.value = res.data.results;
    });
  }
  function getProductsByBrands(slug, offset) {
    useGet({
      url: `api/brands/${slug}/products/?limit=40&offset=${offset}`,
    }).then((res) => {
      console.log(res);
    });
  }
  function getProducts() {
    useGet({
      url: `api/products/?limit=${products_limit.value}&offset=${products_offset.value}`,
    }).then((res) => {
      console.log(res.data);
      products.value = res.data.results;
      products_count.value = res.data.count;
    });
  }
  function getProductById(id) {
    useGet({ url: `api/products/${id}` }).then((res) => {
      console.log(res);
    })
  }
  return {
    brands,
    brands_count,
    brands_limit,
    brands_offset,
    getBrands,
    getProducts,
    products,
    products_count,
    products_limit,
    products_offset,
    getProductsByBrands,
    brands_products,
    brands_products_count,
    getProductById
  };
});
