import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    return {
        props: {
            users: data,
        }
    }
}

const ListName = ({ users }) => {
    return (
        <div>
            <Head>
                <title>List Fetch | rommyth</title>
            </Head>
            <h1>List Fetch</h1>
            {users && users.map(user => (
                <div key={user.id} className="list-name">
                    <Link href={`/list/${user.id}`}>{user.name}</Link>
                </div>
            ))
            }
        </div>
    );
}

export default ListName;
