import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";
import AppPagination from "../components/AppPagination";
import ItemCard from "../components/ItemCard";
import SearchBox from "../components/SearchBox";

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const [searchText, setSearchText] = useState("");
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.spacexdata.com/v3/history`)
            .then((response) => response.json())
            .then((data) => {
                setHistory(data);
            })
            .catch((error) => {
                setError(error);
            });
        setLoading(false);
    }, []);

    useEffect(() => {
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        const historyList = history
            .filter((val) =>
                val.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .slice(indexOfFirstData, indexOfLastData);
        setDataList(historyList);
    }, [searchText, currentPage, history, dataPerPage]);

    if (error !== null) {
        return (
            <Container>
                <center>
                    <h2>Something went wrong!</h2>
                </center>
            </Container>
        );
    }

    if (isLoading) {
        return (
            <Container>
                <center>
                    <Spinner animation="border" />
                </center>
            </Container>
        );
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <AppNavbar />

            <SearchBox filterData={(val) => setSearchText(val)} />

            <Row xs={1} md={3} className="g-4">
                {dataList.map((val, index) => {
                    return (
                        <Col key={index}>
                            <ItemCard
                                title={val.title}
                                time={val.event_date_utc}
                                description={val.details}
                                link={val.links.article}
                            ></ItemCard>
                        </Col>
                    );
                })}
            </Row>

            <AppPagination
                dataPerPage={dataPerPage}
                totalData={history.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Container>
    );
};

export default HistoryPage;
