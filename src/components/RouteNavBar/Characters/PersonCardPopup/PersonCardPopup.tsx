import { Modal } from 'react-bootstrap';
import { characterTypes } from '../../../../types/Fetch/Characters';
import './PersonCardPopup.scss';

export const PersonCardPopup = ({show,setShow,character}:characterTypes) => {
  return (
    <Modal
      size="xl"
      show={show}
      onHide={() => setShow(false)}
    >
    <Modal.Header closeButton>
      <Modal.Title>{character.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="PersonCardPopup__container">
      <img
        alt={character.name}
        src={character.image} 
      />
      <div className="PersonCardPopup__container_text">
        <p>
            Gender: {character.gender}
        </p>
        <p>
            Species: {character.species}
        </p>
        <p>
            Status: {character.status}
        </p>
        <p>
            Location: {character.location?.name}
        </p>
        <p>
            Location(URL): {character.location?.url}
        </p>
        <p>
            Episode(URL): {character.episode?.[0]}
        </p>
      </div>
    </Modal.Body>
  </Modal>
)
};
