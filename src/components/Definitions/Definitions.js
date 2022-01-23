import React from "react";
import './Definitions.css';

const Definitions = ({ word, meanings }) => {
    return (
        <div className="meanings">
            {meanings[0] && word && (
                <audio
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    style={{ backgroundColor: '#fff', borderRadius: 10 }}
                    controls>
                    Your Brouser doesn't support audio element.
                </audio>
            )
            }

            {
                word === '' ? (
                    <span className='subTitle'>Start by typing...</span>
                ) : (
                    meanings.map((mean, index) =>
                        mean.meanings.map((item, index1) =>
                            item.definitions.map((def, index2) => (
                                <div
                                    key={index + index1 + index2}
                                    className="singleMean"
                                    style={{ backgroundColor: 'white', color: "black" }}>
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: 'black', width: '100 %' }} />

                                </div>
                            )
                            )))
                )
            }
        </div >
    );
};

export default Definitions