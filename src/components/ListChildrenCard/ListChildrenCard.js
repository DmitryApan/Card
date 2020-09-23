import React from 'react';
import HeapAvatars from '../HeapAvatars/HeapAvatars';

import styles from './ListChildrenCard.less';

export default function ListChildrenCard(props) {
    const {childrenCards} = props;

    return(
        <>
            {childrenCards.map(card => {
                return(
                    <div className={styles.child}>
                        <div className={styles.owners}>
                            <HeapAvatars 
                                size={28}
                                mutable={false}
                                maxShowPosition={3}
                                id={card._id}
                            />
                        </div>
                        <div className={styles.title}>
                            {card.title}
                        </div>
                    </div>
                );
            })}
        </>
    )
}