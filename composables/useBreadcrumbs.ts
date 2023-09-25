const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const isMathPatternPath = (pathA: string, pathB: string) => {
  const partsA = pathA.split("/");
  const partsB = pathB.split("/");

  if (partsA.length !== partsB.length) return false;

  const isMatch = partsA.every((part: string, i: number) => {
    return part === partsB[i] || part.startsWith(":");
  });

  return isMatch;
};

export const useBreadcrumbs = () => {
  const router = useRouter();
  const route = useRoute();
  const routes = router.getRoutes();

  const HOMEPAGE = { name: "Home", path: "/" };
  const breadcrumbs: Ref<Array<{ name: string; path: string }>> = ref([
    HOMEPAGE,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getBreadcrumbs(currRoute: string): any[] {
    if (currRoute === "") return [HOMEPAGE];

    const paths = getBreadcrumbs(
      currRoute.slice(0, currRoute.lastIndexOf("/")),
    );

    const founds = routes.filter((r) => isMathPatternPath(r.path, currRoute));

    const matchRoute =
      founds.length > 1 ? founds.find((r) => r.path === currRoute) : founds[0];

    const name =
      matchRoute?.meta?.breadcrumb ||
      matchRoute?.name ||
      matchRoute?.path ||
      currRoute;

    return [
      ...paths,
      {
        path: currRoute,
        name: capitalizeFirstLetter(name as string),
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
