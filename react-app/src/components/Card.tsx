import React from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}
const truncate = (text: string, length: number) => {
  return text.length > length ? text.substr(0, length - 1) + "..." : text;
};
const Card = (props: CardProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

const CardImg = (props: { src: string; alt?: string }) => {
  return <img className="card-img-top" src={props.src} alt={props.alt} />;
};

const CardBody = (props: CardProps) => {
  return <div className="card-body">{props.children}</div>;
};

const CardTitle = (props: CardProps) => {
  return <h5 className="card-title">{props.children}</h5>;
};

const CardDescription = (props: CardProps) => {
  return <p className="card-description">{props.children}</p>;
};
const CardActions = (props: CardProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export { Card, CardImg, CardBody, CardTitle, CardDescription, CardActions };
