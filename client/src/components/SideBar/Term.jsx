import React, { useCallback, useState } from 'react';
import useLazyTaxonomyTerms from '../../hooks/useLazyTaxonomyTerms';
import classNames from 'classnames';

const EditButtton = ({ onClick }) => (
  <button className="btn btn-success" onClick={onClick}>Edit</button>
    );

const ChildItems = ({ expanded, loading, terms }) => {
    if (!expanded) {
        return null;
    }

    let content;

    if (loading) {
        content = 'loading...';
    } else {
        content = terms.map(term => (<Term {...term} />));
    }

    return (
      <ul className="term__list">
        {content}
      </ul>
    );
};

export default function Term({ id, name, childCount }) {
    const [expanded, setExpanded] = useState(false);
    const filter = { parentID: { eq: id } };
    const [getTerms, { terms, loading }] = useLazyTaxonomyTerms(filter);

    const onClick = useCallback(() => {
        setExpanded(!expanded);

        // we're going from expanded to closed
        if (expanded) {
            return;
        }

        getTerms();
    }, [expanded]);

    let toggleChildren = null;
    if (childCount > 0) {
        const classes = classNames({
            'btn-info': !expanded,
            'btn-dark': expanded,
            btn: true
        });

        toggleChildren = (<button className={classes} onClick={onClick}>{expanded ? 'close' : 'open'}</button>);
    }
    return (
      <li className="term__item">
        <div className="item__container">
          <h3>{name}</h3> children: {childCount} {toggleChildren} <EditButtton />
        </div>
        <ChildItems expanded={expanded} loading={loading} terms={terms} />
      </li>
    );
}
