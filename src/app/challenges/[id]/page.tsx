import ChallengeDetailLayout, {
    IChallengeDetail,
} from "@/components/pages/challengeDetail";
import styles from "./styles.module.css";
import axios from "axios";
import Footer from "./Footer";
import {BASE_API} from "@/constants";

interface Props {
    params: { id: string };
}

const ChallengeDetails: React.FC<Props> = async ({params: {id}}) => {
    console.log(`Id gottttt: ${id}`);
    const response = await axios.get(`${BASE_API}/challenge?id=${id}`);
    const nextResponse = await axios.get(`${BASE_API}/challenge?id=${id}`);
    const prevResponse = await axios.get(`${BASE_API}/challenge?id=${id}`);
    const data: IChallengeDetail = response.data;
    console.log("data got:");
    data.raw_code = data?.raw_code?.replaceAll("\\n", "\n");
    data.code.code = data?.code?.code?.replaceAll("\\n", "\n");
    console.log(data.raw_code);

    const nextSlug = id;
    const prevSlug = id;
    return (
        <>
            <div className={styles._slug__content}>
                <ChallengeDetailLayout data={{...data, prevSlug, nextSlug}}/>
            </div>
            <Footer/>
        </>
    );
};

export default ChallengeDetails;
