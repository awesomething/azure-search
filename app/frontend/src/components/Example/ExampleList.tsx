import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Can I apply to more than one graduate program at Stanford?",
    "Does my foreign degree qualify me for graduate study at Stanford?",
    "How much does it cost to attend Stanford?"
];

const GPT4V_EXAMPLES: string[] = [
    "Can I apply to more than one graduate program at Stanford?",
    "Does my foreign degree qualify me for graduate study at Stanford?",
    "How much does it cost to attend Stanford?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
