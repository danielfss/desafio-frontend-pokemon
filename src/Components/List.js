import React from 'react';
import './List.css';
import { Card } from 'react-bootstrap';


class List extends React.Component {
    state = {
        pokemons: []
    };

    componentDidMount() {
        fetch('https://api-pokemon-teste-mandarin.herokuapp.com/pokemons')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pokemons: res
                });
            });
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='grid-container'>
                        {this.state.pokemons.map(item => (
                            <Card className='grid-item' style={{ width: '18rem' }}>
                                <div className='image-card'>
                                    <Card.Img variant="top" src={item.image_url} alt={item.name} style={{ maxWidth: '150px' }} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        <p><b>Categoria:</b> {item.category}</p>
                                        <p><b>Data de registro:</b> {item.created_at}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default List;