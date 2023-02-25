// Jisang

const CreateNovel = () => {
    return (
        <div>
            <div>
                <h1>WAVESCRIPT</h1>
                <button>Log out</button>
            </div>
            <div>
                <label>Contributor Limit </label><input />
                <br/>
                <label>Paragraph Limit </label><input />
                <br/>
                <input placeholder = 'Insert your novel title'/>
                <input placeholder = 'Insert the genre'/>
                <br/>
                <label>Creator Id</label><textarea />
                <br/>
                <button>Publish!</button>
            </div>
        </div>
    );
};

export default CreateNovel;