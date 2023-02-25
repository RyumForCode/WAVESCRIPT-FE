// Jisang

import NovelContentsList from "../components/NovelContentsList";

const NovelList = () => {
    return (
        <div>
            <div>
                <h1>WAVESCRIPT</h1>
            </div>
            <div>
                <span>Title</span>
                <span>Genre</span>
                <span>Creator</span>
                <span>Contributers</span>
                <span>Status</span>
            </div>
            <div>
                <NovelContentsList />
            </div>
        </div>
    );
};

export default NovelList;