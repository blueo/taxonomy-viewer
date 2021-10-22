import React from 'react';
import useTaxonomyTerms from '../../hooks/useTaxonomyTerms';
import Term from './Term';

export default function SideBar() {
    const filter = { parentID: { eq: 0 } };
    const { loading, error, terms } = useTaxonomyTerms(filter);

    if (error) {
        return 'error';
    }

    if (loading) {
        return 'loading';
    }

    return (<section className="sidebar">
      <ul className="term__list">
        {terms.map((term) => <Term {...term} />)}
      </ul>
    </section>);
}
