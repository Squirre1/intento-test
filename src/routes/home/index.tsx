import { FunctionalComponent, h } from "preact";

import ApiKeyInput from "../../components/apiKeyInput";

const Home: FunctionalComponent = () => (
    <div>
        <p>Insert your intento token</p>
        <ApiKeyInput />
    </div>
);

export default Home;
