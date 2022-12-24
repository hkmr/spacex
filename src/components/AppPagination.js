import { Container, Pagination } from "react-bootstrap";

const AppPagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Container className="my-4">
            <center>
                <Pagination>
                    {pageNumbers.map((number) => (
                        <Pagination.Item
                            key={number}
                            onClick={() => paginate(number)}
                            id={number}
                            active={currentPage === number}
                        >
                            {number}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </center>
        </Container>
    );
};

export default AppPagination;
