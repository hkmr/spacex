import { useState } from "react";
import { Container, Form } from "react-bootstrap";

const SearchBox = ({ filterData }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchInputHandler = (event) => {
        setSearchTerm(event.target.value);
        filterData(event.target.value);
    };

    return (
        <Container className="my-4">
            <Form>
                <Form.Group>
                    <Form.Control
                        onChange={searchInputHandler}
                        type="text"
                        value={searchTerm}
                        placeholder="Search here..."
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default SearchBox;
