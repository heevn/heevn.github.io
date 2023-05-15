import Link from "next/link"

function Users({users}) {

    return (
        <>
            <h1>Пользователи</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return {
      props: {users}, // will be passed to the page component as props
    };
}