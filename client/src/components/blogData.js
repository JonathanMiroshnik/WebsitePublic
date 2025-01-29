import React from 'react';

export const blogPosts = [
    {
      id: "slop-and-spam",
      title: "Slop and Spam",
      description: "Is generative AI an artform?",
      date: "24-01-2025",
      component: React.lazy(() => import("../pages/posts/Post1")),
    },
  ];