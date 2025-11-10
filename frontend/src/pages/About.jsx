import styles from '../assets/css/About.module.css'

export default function About() {
    return (
        <main className={styles.aboutContainer}>
            <h1>About</h1>

            <p>
                <strong>Workout Tracker</strong> is a web application built with{" "}
                <strong>React</strong> and <strong>Django REST Framework</strong>. It provides user
                authentication and a full set of CRUD features for managing workouts and exercise data.
            </p>

            <p>
                The goal of this project is to create a simple, practical foundation for building
                full-stack applications with a modern frontend and backend. The frontend handles
                routing, UI state, and API communication, while the Django backend manages data models,
                permissions, and authentication.
            </p>

            <h2>Tech Stack</h2>
            <ul>
                <li>React</li>
                <li>Django & Django REST Framework</li>
                <li>JWT authentication</li>
                <li>Axios for API calls</li>
                <li>Formik for handling forms</li>
            </ul>

            <h2>Developer</h2>
            <p>
                Built by <strong>Fateme Abdellahi</strong> — a developer learning and experimenting with
                full-stack development using React and Django.
            </p>

            <p>
                You can find the source code and updates on{" "}
                <a
                    href="https://github.com/fateme-abdellahi"
                    target="_blank"
                >
                    GitHub
                </a>.
            </p>
        </main>
    );
}
