import React from 'react';
// this will have about me and coding experience. 
import me from "../img/41.jpeg";

const styles = {
    section: {
      fontFamily: "-apple-system",
      fontSize: "1rem",
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#292b2c",
      backgroundColor: "#fff",
      padding: "2em"
    },
    wrapper: {
      textAlign: "center",
      maxWidth: "950px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",
      padding: "40px 25px",
      marginTop: "50px"
    },
    avatar: {
      margin: "-90px auto 30px",
      width: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "0"
    },
    quote: {
      lineHeight: 1.5,
      fontWeight: 300,
      marginBottom: "25px",
      fontSize: "1.375rem"
    },
    name: {
      marginBottom: "0",
      fontWeight: 600,
      fontSize: "1rem"
    },
    position: { fontWeight: 400 }
  };
  
  export default function App() {
    return (
      <section style={styles.section}>
        <div style={styles.wrapper}>
          <img
            src={me}
            alt="Lindsay Allen"
            style={styles.avatar}
          />
          <div>
            <p style={styles.quote}>
            With a love of accountability in retail, I forge ahead to learn all I can to create spaces for makers and entrepreneurs to engage. As I learn about new technologies, I am enthusiastic about the possibilities.
            </p>
          </div>
          <p style={styles.name}>
            Javascript
            <span style={styles.position}> · </span>
            React
            <span style={styles.position}> · </span>
            Node
            <span style={styles.position}> · </span>
            SQL
            <span style={styles.position}> · </span>
            Express
          </p>
        </div>
      </section>
    );
  }
