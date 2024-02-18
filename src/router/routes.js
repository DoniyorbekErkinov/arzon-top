const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/posts",
        name: "Posts",
        children: [
          {
            path: "",
            component: () => import("pages/posts/indexPage.vue"),
          },
          {
            path: "/posts/:id",
            name: "SinglePost",
            component: () => import("../pages/posts/SinglePost.vue"),
          },
        ],
      },
      {
        path: "/brands",
        name: "Brands",
        children: [
          {
            path: '',
            component: () => import("pages/brands/BrandsPage.vue")
          },
          {
            path: '/brand/:slug',
            name: 'BrandPosts',
            component: () => import('../pages/brands/BrandsPosts.vue')
          }
        ]
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/login",
    name: "Login",
    component: () => import("src/pages/LoginPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
