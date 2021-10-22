import React, { useCallback, useState } from 'react';
import useLazyTaxonomyTerms from '../../hooks/useLazyTaxonomyTerms';

export default function Term({ id, name, childCount }) {
    const [expanded, setExpanded] = useState(false);
    const filter = { parentID: { eq: id } };
    const [getTerms, { terms }] = useLazyTaxonomyTerms(filter);

    const onClick = useCallback(() => {
        setExpanded(!expanded);

        // we're going from expanded to closed
        if (expanded) {
            return;
        }

        getTerms();
    }, [expanded]);

    let button = null;
    if (childCount > 0) {
        button = (<button onClick={onClick}>{expanded ? 'close' : 'open'}</button>);
    }
    return (<li className="term__item">
      <h3>{name}</h3> children: {childCount} {button}
      {expanded && (<ul className="term__list">{terms.map((term) => (<Term {...term} />))}</ul>)}
    </li>);
}
