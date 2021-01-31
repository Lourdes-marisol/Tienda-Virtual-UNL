import React from 'react';
import {Etiqueta, Baner, Container, Wrapper, Row, Column, Link, Title } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Etiqueta = function Label({children, ...restProps}) {
  return <Etiqueta {...restProps}>{children}</Etiqueta>
}
Footer.Baner = function Banner({children, ...restProps}) {
  return <Baner {...restProps}>{children}</Baner>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};



