import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";
import AppPagination from "../components/AppPagination";
import ItemCard from "../components/ItemCard";
import SearchBox from "../components/SearchBox";

const AddressPage = () => {
    const [address, setAddress] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(12);
    const [searchText, setSearchText] = useState("");
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.spacexdata.com/v3/payloads`)
            .then((response) => response.json())
            .then((data) => {
                setAddress(data);
            })
            .catch((error) => {
                setError(error);
            });
        setLoading(false);
    }, []);

    useEffect(() => {
        const indexOfLastData = currentPage * dataPerPage;
        const indexOfFirstData = indexOfLastData - dataPerPage;
        const addressList = address
            .filter((val) =>
                val.payload_id.toLowerCase().includes(searchText.toLowerCase())
            )
            .slice(indexOfFirstData, indexOfLastData);
        setDataList(addressList);
    }, [searchText, currentPage, address, dataPerPage]);

    if (isLoading) {
        return (
            <Container className="my-5">
                <center>
                    <Spinner animation="border" />
                </center>
            </Container>
        );
    }

    if (error !== null) {
        return (
            <Container>
                <center>
                    <h2>Something went wrong!</h2>
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
                {dataList.map((val, i) => {
                    return (
                        <Col key={i}>
                            <ItemCard
                                title={val.payload_id}
                                time={val.nationality}
                                description={val.payload_type}
                                link={val.orbit_params.reference_system}
                            ></ItemCard>
                        </Col>
                    );
                })}
            </Row>

            <AppPagination
                dataPerPage={dataPerPage}
                totalData={address.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Container>
    );
};

export default AddressPage;
