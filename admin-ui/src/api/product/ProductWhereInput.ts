import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  discountedPrice?: FloatFilter;
  discription?: JsonFilter;
  id?: StringFilter;
  images?: JsonFilter;
  order?: OrderWhereUniqueInput;
  reviews?: ReviewListRelationFilter;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  variants?: JsonFilter;
};
