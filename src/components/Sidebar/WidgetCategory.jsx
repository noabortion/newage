import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import { getCategoryPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";
import Tag from "../Tag/Tag";

const WidgetCategory = ({ categoryList }) => (
  <WidgetContainer extraClass="categories-container">
    <WidgetTitle title={config.categoryWidgetTitle} />
    <div>
      {categoryList.map((category) => (
        <AutoLink
          key={category}
          to={getCategoryPath(category)}
          className="small-text border-bottom border-color-light-grey padding-top-half padding-bottom-half"
        >
        {category + ' | '}
        </AutoLink>
      ))}
    </div>
  </WidgetContainer>
);

export default WidgetCategory;
