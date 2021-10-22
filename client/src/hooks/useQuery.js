import { ApolloContext } from 'react-apollo';
import { useContext, useEffect, useState } from 'react';

export default function useQuery(query, variables) {
    const { client } = useContext(ApolloContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
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

    return { loading, data, error };
}
