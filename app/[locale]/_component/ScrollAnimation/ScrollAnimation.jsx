"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // استخدم usePathname بدلاً من useRouter
import "./SmoothScroll.css";

const SmoothScroll = ({ children }) => {
  const pathname = usePathname(); // استخدام usePathname بدلاً من useRouter

  // تحديث ارتفاع الصفحة
  const updateHeight = () => {
    const body = document.body;
    const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
    if (!scrollWrap) return;

    const height = scrollWrap.getBoundingClientRect().height - 1;
    body.style.height = `${Math.floor(height)}px`;
  };

  useEffect(() => {
    // مراقبة التغييرات في DOM باستخدام MutationObserver
    const observer = new MutationObserver(updateHeight);

    // تحديد العنصر الذي نريد مراقبته (العنصر الرئيسي أو محتويات الصفحة)
    const targetNode = document.getElementsByClassName("smooth-scroll-wrapper")[0];

    if (targetNode) {
      observer.observe(targetNode, {
        childList: true, // مراقبة إضافة وحذف الأطفال
        subtree: true, // مراقبة التغييرات في جميع عناصر الشجرة الفرعية
        attributes: true, // مراقبة التغييرات في السمات
      });
    }

    // تحديث الارتفاع عندما يتغير المسار
    const handleRouteChange = () => {
      setTimeout(updateHeight, 300); // تأخير بسيط بعد تغيير المسار
    };

    handleRouteChange(); // التحديث عند أول تحميل للمحتوى

    // تنظيف عند التفريغ
    return () => {
      if (targetNode) {
        observer.disconnect(); // إيقاف المراقبة عند التفريغ
      }
    };
  }, [pathname]); // التحديث عند تغيير المسار

  useEffect(() => {
    const speed = 0.04;
    let offset = 0;
    let animationFrame;

    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * speed;
      const scroll = `translateY(-${offset}px) translateZ(0)`;
      const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];
      if (scrollWrap) scrollWrap.style.transform = scroll;
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return <div className="smooth-scroll-wrapper">{children}</div>;
};

export default SmoothScroll;
