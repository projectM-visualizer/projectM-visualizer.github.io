const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const useBreadcrumbs = () => {
  const route = useRoute();

  const HOMEPAGE = { name: "Home", path: "/" };
  const breadcrumbs = ref([HOMEPAGE]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getBreadcrumbs(currRoute: string): any[] {
    if (currRoute === "") return [HOMEPAGE];

    const paths = getBreadcrumbs(
      currRoute.slice(0, currRoute.lastIndexOf("/")),
    );

    const pathSplits = currRoute.split("/");
    const name = capitalizeFirstLetter(pathSplits[pathSplits.length - 1]);

    return [
      ...paths,
      {
        path: currRoute,
        name,
      },
    ];
  }

  watch(
    () => ({
      path: route.path,
      name: route.name,
      meta: route.meta,
      matched: route.matched,
    }),
    (route) => {
      if (route.path === "/") return;

      breadcrumbs.value = getBreadcrumbs(route.path);
    },
    {
      immediate: true,
    },
  );

  return {
    breadcrumbs,
  };
};
