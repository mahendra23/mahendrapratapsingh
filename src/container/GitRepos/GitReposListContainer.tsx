import { useQuery } from "react-query";
import { GitReposListComponent } from "../../component/GitRepos/GitReposListComponent";
import { gitReposApiURL } from "../../constants";

export const GitReposListContainer = (): JSX.Element => {
    const gitReposListQuery = useQuery("gitreposlist", () =>
        fetch(gitReposApiURL).then((res) => res.json())
    );

    if (gitReposListQuery.isError || !gitReposListQuery.data) {
        return (
            <div>Error fetching repositories</div>
        );
    }
    
    if (gitReposListQuery.isLoading) {
        return <div>Loading...</div>
    }
    return (
        <GitReposListComponent
            repos={gitReposListQuery.data}
        />
    );
}