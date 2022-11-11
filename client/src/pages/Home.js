import { React, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

import Carousel from 'react-bootstrap/Carousel';
const { v4: uuidv4 } = require('uuid');

const pages = [
  {
    title: 'Welcome',
    picture: '',
    information: 'Welcome to [ Array ] a game for 2 to 3 players',
    key: 1,
  },
  {
    title: 'Goal of Game',
    picture: '',
    information: `The object of the game is to make an ARRAY before your opponents do, an ARRAY is 6 tiles in a line with your color on it. (5 if you're playing 3 players)`,
    key: 2,
  },
  {
    title: 'How to play',
    picture: '',
    information: `You can score an Array, Vertically, Horizontally or Diagonally.`,
    key: 3,
  },
  {
    title: 'How to play',
    picture: '',
    information: `Each turn you will Roll the Dice and click on a tile to claim it with your color.`,
    key: 4,
  },
  {
    title: 'How to play',
    picture: '',
    information: `If all tiles of a number are occupied by your opponents colors, you can choose one of their tiles and turn into your color`,
    key: 5,
  },
  {
    title: 'How to play',
    picture: '',
    information: `You'll notice on the board that 10 and 11 are missing. If you roll a 10 then you must remove one of your opponents tiles. `,
    key: 6,
  },
  {
    title: 'How to play',
    picture: '',
    information: `If you roll an 11, this is considered a wild and you can place your tile on any free space. If there are no free spaces then you can place it on any occupied tile.
    `,
    key: 7,
  },
  {
    title: 'How to play',
    picture: '',
    information: `If you roll a 2 or 12 you will place your tile on a 2 or 12 space and then take another turn`,
    key: 8,
  },
  {
    title: 'Have Fun!',
    picture: '',
    information: `Have fun and be kind to each other!`,
    key: 9,
  },
];
export default function Home({ currentPage, handlePageChange }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="about-wrapper">
      <div className="about-section fw-semibold">
        <ul>
          <li className="list-group-item pt-4">Welcome to [ ARRAY ]!</li>
          <li className="list-group-item pt-4">
            A simple and fun game for all ages!
          </li>
          <li className="list-group-item pt-4">
            Learn how to play below or start your own game!
          </li>
        </ul>
        <div className="button-container pt-5">
          <Button
            type="button"
            className="btn btn-success shadow fs-3 mx-2"
            href={`/lobby/${uuidv4()}`}
          >
            PLAY
          </Button>
          <Button
            type="button"
            className="btn btn-light shadow fs-3 mx-2"
            onClick={handleShow}
          >
            LEARN
          </Button>

          <Modal show={show} onHide={handleClose}>
            <>
              <Modal.Header closeButton>
                <Modal.Title>Learn about [ Array ] </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Carousel>
                  {pages.map((page) => (
                    <Carousel.Item key={page.key}>
                      <img
                        className="d-block w-100"
                        src={page.picture}
                        alt={page.information}
                      />
                      <Carousel.Caption>
                        <h3>{page.title}</h3>
                        <p>{page.information}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Modal.Body>
            </>
          </Modal>
        </div>
      </div>
    </div>
  );
}
