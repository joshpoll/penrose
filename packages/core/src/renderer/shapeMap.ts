import Circle from "./Circle";
import Label from "./Label";
import Ellipse from "./Ellipse";
import Square from "./Square";
import Rectangle from "./Rectangle";
import Callout from "./Callout";
import Polygon from "./Polygon";
import FreeformPolygon from "./Polygon";
import Polyline from "./Polyline";
import Arrow from "./Arrow";
import { ShapeProps } from "./Renderer";
import Path from "./Path";
import Line from "./Line";
import Image from "./Image";
import PathString from "./PathString";

const shapeMap: { [key: string]: (props: ShapeProps) => SVGElement } = {
  Circle,
  Ellipse,
  Square,
  Rectangle,
  Callout,
  Polygon,
  FreeformPolygon,
  Polyline,
  Text: Label,
  Arrow,
  Path,
  Line,
  Image,
  PathString,
};

export default shapeMap;
