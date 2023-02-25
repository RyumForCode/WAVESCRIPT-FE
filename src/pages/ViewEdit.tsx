// Jisang

import HeaderTitle from "../components/HeaderTitle";
import ScriptList from "../components/ScriptList";
import Wrapper from "../components/Wrapper";

const ViewEdit = () => {
    return (
        <Wrapper>
            <HeaderTitle />
            <div>
                <h2>Novel Script Title</h2>
                <h2>Genre</h2>
            </div>
            <ScriptList />
        </Wrapper>
    );
};

export default ViewEdit;