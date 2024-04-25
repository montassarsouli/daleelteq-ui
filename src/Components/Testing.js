import React from "react";
import { useTranslation } from "react-i18next";

const Testing = () => {
  const { i18n } = useTranslation(["translation"]);
  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <select
        value={localStorage.getItem("i18nextLng")}
        onChange={handleLanguage}
      >
        <option value="ar">Arabic</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Testing;
