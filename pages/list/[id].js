import Head from "next/head";
import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const paths = data.map(user => {
        return {
            params: {
                id: user.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: {
            detailUser: data,
        }
    }
}

const Details = ({ detailUser }) => {
    return (
        <div>
            <Head>
                <title>Detail Fetch | rommyth</title>
            </Head>
            {detailUser &&
                <div key={detailUser.id}>
                    <h1>Detail User</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Name</b></td>
                                <td>{detailUser.name}</td>
                            </tr>
                            <tr>
                                <td><b>Email</b></td>
                                <td>{detailUser.email}</td>
                            </tr>
                            <tr>
                                <td><b>Phone</b></td>
                                <td>{detailUser.phone}</td>
                            </tr>
                            <tr>
                                <td><b>Website</b></td>
                                <td>{detailUser.website}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
            <div className="back-btn">
                <Link href="/list">Back to list</Link>
            </div>
        </div>
    );
}

export default Details;