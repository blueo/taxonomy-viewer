
import useLazyQuery from './useLazyQuery';
import { TAXONOMY_TERM_QUERY } from './useTaxonomyTerms';

export default function useLazyTaxonomyTerms(filter) {
    const [getTerms, { loading, data, error }] = useLazyQuery(TAXONOMY_TERM_QUERY, { filter });
    let terms = [];

    if (data) {
      terms = data.readTaxonomyTerms.nodes.map((term) => {
        const { children, ...rest } = term;

        return { ...rest, childCount: children.pageInfo.totalCount };
      });
    }

    return [getTerms, { loading, error, terms }];
}
