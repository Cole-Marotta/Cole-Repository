"use client";

import { useEffect, useState, ReactElement } from "react";

import { arcn5005Lectures } from "../../../arcn5005Lectures";
import { Lecture, Toc } from "../../../../types/types";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";

interface Props {
  params: { week: string };
}

export default function Page({ params }): ReactElement<Props> {
  let lecture: Lecture | undefined = arcn5005Lectures.find(
    (lecture) => lecture.id === params.week
  );

  const [content, setContent] = useState<Toc>([]);
  const [currentSlideElement, setCurrentSlideElement] = useState<JSX.Element>();

  useEffect(() => {
    if (lecture?.content) setContent(lecture.content);
  }, [lecture]);

  useEffect(() => {
    if (content.length > 0) {
      const currentContent = content[0];
      setCurrentSlideElement(currentContent.element);
    }
  }, [content]);

  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header title={lecture?.title} />
      </nav>
      <section className="flex justify-center grow">
        <section className=" flex flex-col items-center justify-center grow gap-8 mdx max-w-[80%] max-h-[580px]">
          {currentSlideElement}
        </section>
      </section>
      <nav className="w-screen flex h-16 items-center">
        <Footer list={content} currentPage={1} />
      </nav>
    </main>
  );
}