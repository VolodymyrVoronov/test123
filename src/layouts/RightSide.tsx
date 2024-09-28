import { lazy, Suspense } from "react";

import Loader from "@/components/Loader";

const Dimension = lazy(() => import("../components/Dimension"));

const RightSide = () => {
  return (
    <div className="overflow-auto border-l-[1px] border-black dark:border-slate-500">
      <div className="p-3">
        <Suspense fallback={<Loader containerClassName="h-auto" />}>
          <Dimension />
        </Suspense>
      </div>
    </div>
  );
};

export default RightSide;
