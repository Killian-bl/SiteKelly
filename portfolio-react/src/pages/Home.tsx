import React from "react";
import ButtonContact from "../components/ButtonContact.tsx";

export default function Home() {
    return (
        <div style={styles.container}>
            {/* Section d'en-tête */}
            <header style={styles.header}>
                <h1 style={styles.logo}>✨ BelleNature</h1>
                <nav style={styles.nav}>
                    <a href="#produits" style={styles.link}>Produits</a>
                    <a href="#rendezvous" style={styles.link}>Rendez-vous</a>
                    <a href="#contact" style={styles.link}>Contact</a>
                </nav>
            </header>

            {/* Section principale */}
            <section style={styles.hero}>
                <div style={styles.heroContent}>
                    <h2 style={styles.title}>Révélez votre beauté naturelle</h2>
                    <p style={styles.subtitle}>
                        Maquillage professionnel, soins de qualité et conseils personnalisés.
                    </p>

                </div>
                <img
                    src="https://images.unsplash.com/photo-1600181952121-5d04d41e6b1f?auto=format&fit=crop&w=800&q=80"
                    alt="Maquillage professionnel"
                    style={styles.heroImage}
                />
            </section>

            {/* Section produits */}
            <section id="produits" style={styles.section}>
                <h2 style={styles.sectionTitle}>Nos produits phares</h2>
                <div style={styles.grid}>
                    {[
                        {
                            name: "Rouge à lèvres satiné",
                            img: "https://images.unsplash.com/photo-1589475230584-90e67c504d4d?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            name: "Fond de teint naturel",
                            img: "https://images.unsplash.com/photo-1606755962773-0e0b3e41e918?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            name: "Palette de fards",
                            img: "https://images.unsplash.com/photo-1589187155474-1c62238fa333?auto=format&fit=crop&w=400&q=80",
                        },
                    ].map((item, i) => (
                        <div key={i} style={styles.card}>
                            <img src={item.img} alt={item.name} style={styles.cardImage} />
                            <h3 style={styles.cardTitle}>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section contact */}
            <footer id="contact" style={styles.footer}>
                <p>© 2025 BelleNature — Tous droits réservés</p>
                <p>Contact : contact@bellenature.fr</p>
            </footer>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
        lineHeight: 1.6,
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #eee",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
    },
    logo: {
        fontSize: "1.8rem",
        color: "#b96c94",
    },
    nav: {
        display: "flex",
        gap: "20px",
    },
    link: {
        textDecoration: "none",
        color: "#333",
        fontWeight: 500,
    },
    hero: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "#fff5f8",
    },
    heroContent: {
        flex: "1 1 400px",
        maxWidth: 500,
        padding: 20,
    },
    title: {
        fontSize: "2.5rem",
        color: "#b96c94",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: "1.1rem",
        marginBottom: 20,
    },
    button: {
        display: "inline-block",
        background: "#b96c94",
        color: "white",
        padding: "10px 20px",
        borderRadius: 6,
        textDecoration: "none",
    },
    heroImage: {
        flex: "1 1 400px",
        maxWidth: 500,
        borderRadius: 10,
    },
    section: {
        padding: "60px 20px",
        textAlign: "center",
    },
    sectionTitle: {
        fontSize: "2rem",
        marginBottom: 30,
        color: "#b96c94",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20,
        maxWidth: 900,
        margin: "0 auto",
    },
    card: {
        background: "white",
        borderRadius: 10,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.3s",
    },
    cardImage: {
        width: "100%",
        height: 200,
        objectFit: "cover",
    },
    cardTitle: {
        padding: "10px 0",
        fontSize: "1.1rem",
    },
    footer: {
        background: "#b96c94",
        color: "white",
        textAlign: "center",
        padding: "30px 10px",
        marginTop: 50,
    },
};
