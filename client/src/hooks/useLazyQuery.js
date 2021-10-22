import { ApolloContext } from 'react-apollo';
import { useCallback, useContext, useState } from 'react';

export default function useLazyQuery(query, variables) {
    const { client } = useContext(ApolloContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const runQuery = useCallback(() => {
        setLoading(true);
        client
            .query({
                query,
                variables,
            })
            .then((result) => {
                setData(result.data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e);
            });
    }, [data]);

    return [runQuery, { loading, data, error }];
}
