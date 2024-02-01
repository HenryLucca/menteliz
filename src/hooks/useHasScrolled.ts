"use client";
import { useState, useEffect } from "react";

interface useHasScrolledInterface {
  offsetThreshold: number;
}

export default function useHasScrolled(props: useHasScrolledInterface) {
  const { offsetThreshold = 400 } = props;
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window?.scrollY;
      setScrolled(offset > offsetThreshold); // if the user scrolled more than 200...
    };
    window?.addEventListener("scroll", handleScroll);
    return () => {
      window?.removeEventListener("scroll", handleScroll);
    };
  }, [offsetThreshold]);

  return { scrolled };
}
