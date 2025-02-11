import { ArcConfig } from "konva/lib/shapes/Arc";
import { CircleConfig } from "konva/lib/shapes/Circle";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { ImageConfig } from "konva/lib/shapes/Image";
import { PathConfig } from "konva/lib/shapes/Path";
import { RectConfig } from "konva/lib/shapes/Rect";
import { RegularPolygonConfig } from "konva/lib/shapes/RegularPolygon";
import { StarConfig } from "konva/lib/shapes/Star";
import { TextConfig } from "konva/lib/shapes/Text";

export type Theme = "light" | "dark" | "system";

export type BusinessCard = {
  id: number;
  inMm: string;
  usedIn: string;
  dpis: {
    dpi: number;
    width: number;
    height: number;
  }[];
};

export interface ConstructorItemBase {
  itemId: string;
  isSelected: boolean;
  zIndex: number;
}

export type ConstructorItemType =
  | "text"
  | "image"
  | "circle"
  | "rect"
  | "ellipse"
  | "regular-polygon"
  | "star"
  | "arc"
  | "svg-path";

export interface ConstructorItemText extends ConstructorItemBase, TextConfig {
  type: "text";
}

export interface ConstructorItemImage extends ConstructorItemBase, ImageConfig {
  type: "image";
}

export interface ConstructorItemCircle
  extends ConstructorItemBase,
    CircleConfig {
  type: "circle";
}

export interface ConstructorItemReact extends ConstructorItemBase, RectConfig {
  type: "rect";
}

export interface ConstructorItemEllipse
  extends ConstructorItemBase,
    EllipseConfig {
  type: "ellipse";
}

export interface ConstructorItemRegularPolygon
  extends ConstructorItemBase,
    RegularPolygonConfig {
  type: "regular-polygon";
}

export interface ConstructorItemStar extends ConstructorItemBase, StarConfig {
  type: "star";
}

export interface ConstructorItemArc extends ConstructorItemBase, ArcConfig {
  type: "arc";
}

export interface ConstructorItemSVGPath
  extends ConstructorItemBase,
    PathConfig {
  type: "svg-path";
}

export type ConstructorItem =
  | ConstructorItemText
  | ConstructorItemImage
  | ConstructorItemCircle
  | ConstructorItemReact
  | ConstructorItemEllipse
  | ConstructorItemRegularPolygon
  | ConstructorItemStar
  | ConstructorItemArc
  | ConstructorItemSVGPath;
