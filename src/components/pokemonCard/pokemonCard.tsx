import React from 'react';
import { getBackground } from "../../constants/pokemon.types";
import { numberFormation } from "../../services/common.service";
import "./pokemonCard.scss";

type PokemonCardProps = {
  data: any;
  onClick?: () => void;
  className?: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ data, onClick, className }) => {
    return (
        <>
            <div className={`${className} card`} onClick={onClick} role="presentation" style={{
                background: getBackground(data.types)
            }}>
                <div className="image-container">
                    <img src={data.sprites.other.dream_world.front_default ||
                        data.sprites.front_default || "https://via.placeholder.com/150"} alt="Avatar" />
                </div>
                <div className="text-container">
                    <strong><b>{data.name}</b></strong>
                    <span>{numberFormation(data.id)}</span>
                </div>
            </div>
        </>
    )
}


export default PokemonCard;