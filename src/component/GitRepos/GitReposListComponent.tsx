import './GitReposComponent.scss';

interface Repositories {
    id: string,
    name: string,
    desc: string,
    link: string,
}

interface GitReposListComponentProps {
    repos: Repositories[],
}

export const GitReposListComponent = ({ repos }: GitReposListComponentProps): JSX.Element => {
    return (
        <div data-testid='git-repos-list'>
            <h1>Mahen's Git Repositories</h1>
            {repos.length === 0 ? (
                <div>
                    <p>There are no repos to display</p>
                </div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Topic</th>
                            <th>Description</th>
                            <th>Git Repo Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo) => (
                            <tr aria-label={repo.name}>
                                <td>{repo.id}</td>
                                <td>{repo.name}</td>
                                <td>{repo.desc}</td>
                                <td>
                                    <a className="App-link"
                                    href={repo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    {repo.name}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}