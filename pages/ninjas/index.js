import React from "react";
import styles from "../../styles/Ninjas.module.css"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas
        ? ninjas.map((ninja) => {
            return (
              <div key={ninja.id}>
                <a className={styles.single}>
                  <h3>{ninja.name}</h3>
                </a>
              </div>
            );
          })
        : null}
    </div>
  );
}
