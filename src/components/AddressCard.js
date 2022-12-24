import { Card } from "react-bootstrap";

const AddressCard = (props) => {
    const { description } = props;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.time}</Card.Subtitle>
                <Card.Text>{String(description).substring(0, 50)}</Card.Text>
                <Card.Link href={props.link}>Article</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default AddressCard;
