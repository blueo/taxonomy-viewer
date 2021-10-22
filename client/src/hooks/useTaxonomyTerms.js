
import gql from 'graphql-tag';
import useQuery from './useQuery';

export const TAXONOMY_TERM_QUERY = gql`
query getTaxonomyTerms($filter: TaxonomyTermFilterFields) {
  readTaxonomyTerms(filter: $filter) {
    nodes {
      id
      name
      children {
        pageInfo {
          totalCount
        }
      }
    }
  }
}

`;

export default function useTaxonomyTerms(filter) {
    const { loading, data, error } = useQuery(TAXONOMY_TERM_QUERY, { filter });
    let terms = [];

    if (data) {
      terms = data.readTaxonomyTerms.nodes.map((term) => {
        const { children, ...rest } = term;

        return { ...rest, childCount: children.pageInfo.totalCount };
      });
    }

    return { loading, error, terms };
}
