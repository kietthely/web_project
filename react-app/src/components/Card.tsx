import React from "react";
import { Link } from "react-router-dom";
interface CardProps {
  className?: string;
  children?: React.ReactNode;
}
interface CardImgProps {
  className?: string;
  src: string;
  alt?: string;
}
interface CardLinkProps {
  to: string;
  children?: React.ReactNode;
}
const truncate = (text: string, length: number) => {
  return text.length > length ? text.substr(0, length - 1) + "..." : text;
};
const Card = (props: CardProps) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

const CardImg = (props: CardImgProps) => {
  return (
    <img
      className={`card-img ${props.className}`}
      src={props.src}
      alt={props.alt}
    />
  );
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
  return (
    <div className={`card-actions ${props.className}`}>{props.children}</div>
  );
};
const CardLink = (props: CardLinkProps) => {
  return <Link to={props.to}>{props.children}</Link>;
};

export {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardDescription,
  CardActions,
  CardLink,
};
