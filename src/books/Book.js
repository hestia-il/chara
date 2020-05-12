import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchBookById} from "./actions";
import {getBookById} from "./selectors";
import { Col, Row, Spinner, Container} from "react-bootstrap";
import styled from "styled-components";
import FavoritesButton from "./FavoritesButton";
import BuyButton from "./BuyButton";

const RowStyled = styled(Row)`
    margin-top: 1em
`;

function Book({dispatch, history, bookId, shouldFetch, bookData, isFavorite}) {

    let loading = shouldFetch;
    // const bookId = decodeURIComponent(match.params.id);
    // console.log("Book------------------------", {bookId, shouldFetch, bookData, isFavorite, loggedIn});

    useEffect(() => {
        if (shouldFetch) {
            dispatch(fetchBookById(bookId));
        }
    }, [bookData]);
    
    return (
        <Container>
            {loading && <RowStyled className="justify-content-center">
                <Spinner animation="border"/>
            </RowStyled>}

            {bookData &&
                <RowStyled>
                    <Col xs={6} md={4}>
                        {/*<p>*/}
                        {/*    <Image src={bookData.image}/>*/}
                        {/*</p>*/}
                        <p>
                            <FavoritesButton dispatch={dispatch} isFavorite={isFavorite} bookId={bookId} />
                            {' '}
                            <BuyButton  productType={"books"} productId={bookId} />
                        </p>

                    </Col>
                    <Col xs={12} md={8}>
                        <h3>{bookData.name}</h3>
                        <h5>{bookData.writer}</h5>
                        <p>{bookData.summary}</p>
                    </Col>
                </RowStyled>
            }
        </Container>
    )
}

function mapStateToProps(state, ownProps) {
    const bookId = decodeURIComponent(ownProps.match.params.id);
    return {
        bookId,
        ...getBookById(state, bookId),
    }
}

export default connect(mapStateToProps)(Book);