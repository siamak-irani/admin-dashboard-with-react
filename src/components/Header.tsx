import React from "react";

type HeaderProps = {
  category: string;
  title: string;
};

const Header = ({ category, title }: HeaderProps) => (
  <div className="ml-8 mb-10">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
