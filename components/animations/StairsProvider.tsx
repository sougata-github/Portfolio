"use client";

import { useEffect, useState } from "react";
import StairsTransition from "./StairsTransition";

const StairsProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <StairsTransition />
    </>
  );
};

export default StairsProvider;
