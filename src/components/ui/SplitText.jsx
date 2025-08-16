"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars", // "chars" | "words" | "lines"
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,      // 0..1 -> how low in the viewport before starting
  rootMargin = "-100px",// offset like CSS margin (px recommended)
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const stRef = useRef(null);
  const tlRef = useRef(null);
  const splitterRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;

    // Handle "lines" absolute layout (GSAP requirement)
    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    // Create SplitText
    let splitter;
    try {
      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (err) {
      console.error("SplitText init failed:", err);
      return;
    }
    splitterRef.current = splitter;

    // Targets based on splitType
    const targets =
      splitType === "lines"
        ? splitter.lines
        : splitType === "words"
        ? splitter.words
        : splitter.chars;

    if (!targets || !targets.length) {
      console.warn("No targets found for SplitText.");
      splitter.revert();
      return;
    }

    // Performance hint
    targets.forEach((t) => (t.style.willChange = "transform, opacity"));

    // Build a paused timeline
    const tl = gsap.timeline({ paused: true, smoothChildTiming: true });
    tl.set(targets, { ...from, immediateRender: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      onComplete: () => {
        // clear willChange after anim finishes
        gsap.set(targets, { clearProps: "willChange" });
        onLetterAnimationComplete?.();
      },
    });
    tlRef.current = tl;

    // Build ScrollTrigger start string from threshold/rootMargin
    const pct = Math.max(0, Math.min(1, 1 - threshold)) * 100; // 0..100
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px)?$/.exec(rootMargin.trim());
    const marginVal = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const offsetStr =
      marginVal === 0
        ? ""
        : `${marginVal >= 0 ? "+=" : "-="}${Math.abs(marginVal)}px`;
    const start = `top ${pct}%${offsetStr ? offsetStr : ""}`; // e.g. "top 90%+=100px"

    // Create ScrollTrigger with explicit control
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      // markers: true, // <- uncomment to debug
      onEnter: () => {
        tl.restart(true);
      },
      onEnterBack: () => {
        tl.restart(true);
      },
      onLeave: () => {
        tl.pause(0);
        gsap.set(targets, from); // reset to initial state
      },
      onLeaveBack: () => {
        tl.pause(0);
        gsap.set(targets, from); // reset when scrolling past upwards
      },
    });
    stRef.current = st;

    // Important when text/lines reflow (fonts load, resize, etc.)
    const refresh = () => {
      // re-measure lines if needed
      if (splitType === "lines") {
        splitter.revert();
        splitter = new GSAPSplitText(el, {
          type: splitType,
          absolute: true,
          linesClass: "split-line",
        });
      }
      ScrollTrigger.refresh();
    };

    // Refresh after fonts load (avoids wrong start positions)
    if (document?.fonts?.ready) {
      document.fonts.ready.then(() => {
        setTimeout(() => ScrollTrigger.refresh(), 0);
      });
    } else {
      setTimeout(() => ScrollTrigger.refresh(), 0);
    }

    // Optional: refresh on resize
    const ro = new ResizeObserver(() => refresh());
    ro.observe(el);

    return () => {
      ro.disconnect();
      st.kill();
      tl.kill();
      gsap.killTweensOf(targets);
      splitter.revert();
      stRef.current = null;
      tlRef.current = null;
      splitterRef.current = null;
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText;
