import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Card, Container, Row, Spinner} from "react-bootstrap";

import {getBooksList} from "./selectors";
import {getFavorites} from "../user/selectors";
import {fetchBooks} from "./actions";
import styled from "styled-components";
import FavoritesButton from "./FavoritesButton";
import BuyButton from "./BuyButton";

const StyledBooksList = styled.ul`
    list-style-type:none;
`;

const StyledBooksListItem = styled.li`
    display: inline-block;
    // vertical-align: top;
    width: 12rem;
    height: 30rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
`;

const StyledCardBody = styled(Card.Body)`
    cursor: pointer;
`;

function BooksList({dispatch, history, shouldFetch, booksList, favorites}) {

    // console.log("BooksList--------------shouldFetch", shouldFetch);

    let loading = shouldFetch;
    // if (shouldFetch) {
    //     dispatch(fetchBooks());
    // }

    useEffect(() => {

        console.log("use effect:BooksList", shouldFetch, booksList.length);
        if (shouldFetch) {
            dispatch(fetchBooks());
        }

    }, [booksList]);

    const viewBook = (bookName) => {
        // console.log("viewBook", bookName)
        history.push(`/books/book/${encodeURIComponent(bookName)}`)
    };

    return (
        <Container>

            {loading && <Row className="justify-content-center">
                <Spinner animation="border"/>
            </Row>}

            <StyledBooksList>
                {
                    booksList.map(bookData => {

                        return (
                            <StyledBooksListItem key={bookData.name}>
                                <Card className={"h-100"}>
                                    <Card.Img variant="bottom" src={bookData.image}/>
                                    <StyledCardBody onClick={viewBook.bind(null, bookData.name)}>
                                        <Card.Title>{bookData.name}</Card.Title>
                                    </StyledCardBody>
                                    <Card.Footer>
                                        <FavoritesButton dispatch={dispatch}
                                                         isFavorite={favorites.isFavorite(bookData.name)}
                                                         bookId={bookData.name}/>
                                        {' '}
                                        <BuyButton productType={"books"} productId={bookData.name}/>
                                    </Card.Footer>

                                </Card>
                            </StyledBooksListItem>
                        )
                    })
                }
            </StyledBooksList>

            {/*<ListGroup horizontal variant="flush">*/}

            {/*    {*/}
            {/*        booksList.map(bookData => {*/}

            {/*            return (*/}
            {/*                <ListGroupItem key={bookData.name} onClick={viewBook.bind(null, bookData.name)}>*/}
            {/*                    /!*<div>{bookData.name}</div>*!/*/}
            {/*                    <Card style={{ width: '18rem' }} key={bookData.name} onClick={viewBook.bind(null, bookData.name)}>*/}
            {/*                        <Card.Img variant="top" src={bookData.image} />*/}
            {/*                        <Card.Body>*/}
            {/*                            <Card.Title>{bookData.name}</Card.Title>*/}
            {/*                        </Card.Body>*/}
            {/*                    </Card>*/}
            {/*                </ListGroupItem>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}

            {/*</ListGroup>*/}

        </Container>
    )
}

function mapStateToProps(state) {
    return {
        ...getBooksList(state),
        ...getFavorites(state),
    }
}

export default connect(mapStateToProps)(BooksList);