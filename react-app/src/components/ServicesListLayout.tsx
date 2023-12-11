import Button from "./Button";
import Card from "./Card";
const ServicesListLayout = () => {
  return (
    <div className="card-container">
      <Card className="card">
        <Button
          value="Custom button"
          className="btn_custom"
          to="/Services/MergePDFs"
        />
      </Card>
      <Card className="card">
        <Button
          value="Custom button"
          className="btn_custom"
          to="/Services/MergePDFs"
        />
      </Card>
      <Card className="card">
        <Button
          value="Custom button"
          className="btn_custom"
          to="/Services/PDFtoDocx"
        />
      </Card>
    </div>
  );
};
export default ServicesListLayout;
