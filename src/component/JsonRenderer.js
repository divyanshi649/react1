import React, { useState } from 'react';
import styles from './JsonRenderer.module.css';

const JsonRenderer = ({ data }) => {
  const [jsonData, setJsonData] = useState(data);

  const handleInputChange = (event, entryKey, dataKey) => {
    const newValue = event.target.value;
    setJsonData(prevData => {
      return prevData.map(item => {
        if (item.key === entryKey) {
          const parsedValue = JSON.parse(item.value);
          parsedValue[dataKey] = newValue;
          return { ...item, value: JSON.stringify(parsedValue) };
        }
        return item;
      });
    });
  };

  return (
    <div className={styles.container}>
      {jsonData.map((item, index) => {
        const parsedValue = JSON.parse(item.value);
        return (
          <div key={index} className={styles.card}>
            <h3>{item.key}</h3>
            <div className={styles.itemContent}>
              {Object.keys(parsedValue).map((dataKey, idx) => (
                <div key={idx} className={styles.field}>
                  <label>{dataKey}</label>
                  <input
                    type="text"
                    value={parsedValue[dataKey]}
                    onChange={(e) => handleInputChange(e, item.key, dataKey)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JsonRenderer;