import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableBooks.module.css";
import BookItem from "./BookItem/BookItem";

const DUMMY_BOOKS = [
  {
    id: "b1",
    name: "India, that is Bharat: Coloniality, Civilisation, Constitution",
    description:
      "explores the influence of European 'colonial consciousness' (or 'coloniality'), in particular its religious and racial roots",
    price: 22.99,
  },
  {
    id: "b2",
    name: "Rich Dad Poor Dad",
    description:
      "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. !",
    price: 16.5,
  },
  {
    id: "b3",
    name: "Atomic Habits",
    description:
      "People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call.",
    price: 12.99,
  },
  {
    id: "b4",
    name: "Deep Work",
    description:
      "'Deep work' is the ability to focus without distraction on a cognitively demanding task. Coined by author and professor Cal Newport on his popular blog Study Hacks, deep work will make you better at what you do, let you achieve more in less time and provide the sense of true fulfilment that comes from the mastery of a skill. In short, deep work is like a superpower in our increasingly competitive economy.",
    price: 18.99,
  },
];

const AvailableBooks = (props) => {
  const books = DUMMY_BOOKS.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));
  return (
    <section className={classes.books}>
      <Card>
        <ul>{books}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
