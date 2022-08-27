import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParagraphs, setIncludeHtml } from "../../redux/generateSlice";
import "./Cards.Module.css";

const Cards = () => {
  const paragraphs_value = useSelector((state) => state.genarator.paragraphs);
  const include_html = useSelector((state) => state.genarator.includeHtml);
  const dispatch = useDispatch();
  const [text, setText] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs_value}$start-with-lorem=${4}`
      );
      setText(res.data);
    };
    fetchData();
  }, [paragraphs_value]);
  return (
    <>
      <div className="container">
        <header>
          <div className="header-text">React sample text generator app</div>
        </header>
        <main>
          <div className="main-div">
            <div className="input-div">
              <p> Paragraphs </p>
              <input
                type="number"
                onChange={(e) => dispatch(setParagraphs(e.target.value))}
              />
            </div>
            <div className="select-div">
              <p> Include HTML </p>
              <select
                onChange={(e) => dispatch(setIncludeHtml(e.target.value))}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          <div className="text-div">
            {include_html === "false" ? (
              <div>
                {text.map((tex) => (
                  <span>{tex}</span>
                ))}
              </div>
            ) : (
              <div>
                {text.map((tex) => (
                  <span>{`<p>${tex}</p>`}</span>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Cards;
