import Button from "./Button";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardDescription,
  CardLink,
} from "./Card";
const ServicesListLayout = () => {
  return (
    <div className="card-layout-service">
      <Card className="card-service">
        <CardTitle>MergePDFs</CardTitle>
        <CardBody>Body</CardBody>
        <CardDescription>Description</CardDescription>
        <CardImg src="#" alt="Empty image"></CardImg>
        <CardLink to="/Services/MergePDFs">
          <Button className="btn-custom basic">More</Button>
        </CardLink>
      </Card>

      <Card className="card-service">
        <CardTitle>MergePDFs</CardTitle>
        <CardBody>Body</CardBody>
        <CardDescription>Description</CardDescription>

        <CardImg src="#" alt="Empty image"></CardImg>

        <CardLink to="/Services/MergePDFs">
          <Button className="btn-primary">More</Button>
        </CardLink>
      </Card>
      <Card className="card-service">
        <CardTitle>PDFtoDocx</CardTitle>
        <CardBody>Body</CardBody>
        <CardDescription>Description</CardDescription>

        <CardImg src="#" alt="Empty image"></CardImg>
        <CardLink to="/Services/PDFtoDocx">
          <Button className="btn-info">More</Button>
        </CardLink>
      </Card>
    </div>
  );
};
export default ServicesListLayout;
