import React from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { useFilterContext } from "../ContextAPI/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../Styles/Button";
const FilterSection = () => {
  const {
    filters: { text, category, company, color, price, maxPrice },
    updateFilterValue,
    all_products,
    clearFilter
  } = useFilterContext();

  // to get Unique Data
  const getUniqueData = (data, property) => {
    let NewData = data.map((ele) => {
      return ele[property];
    });
    if (property === "colors") {
      return (NewData = ["All", ...new Set([].concat(...NewData))]);
    } else {
      return (NewData = ["All", ...new Set(NewData)]);
    }
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorData = getUniqueData(all_products, "colors");

  // console.log(colorData);
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={text}
            name="text"
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
      </div>

      <div className="category-filter">
        <h3>Category</h3>
        <div>
          {categoryData.map((ele) => {
            return (
              <button
                type="button"
                name="category"
                onClick={updateFilterValue}
                className={ele === category ? "active" : ""}
                value={ele}
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>

      <div className="company-filter">
        <h3>Company</h3>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="company"
            id="company"
            className="company-filter--select"
            onClick={updateFilterValue}
          >
            {companyData.map((ele) => {
              return (
                <option value={ele} name="company">
                  {ele}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="colors-filter">
        <h3>Colors</h3>
        <div className="colors-btn">
          {colorData.map((ele, index) => {
            if (ele === "All") {
              return (
                <button
                  name="color"
                  value={ele}
                  className={ele === color ? "allbtn activeAllBtn" : "allbtn"}
                  // style={{ backgroundColor: ele }}
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }

            return (
              <button
                name="color"
                value={ele}
                className={ele === color ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: ele }}
                onClick={updateFilterValue}
              >
                {ele === color ? <FiCheck className="checkicon" /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="price-filter my-3">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          name="price"
          value={price}
          type="range"
          min="100"
          max={maxPrice}
          onChange={updateFilterValue}
          class="slider"
          id="myRange"
        />
      </div>

      <div className="clear-filter">
        <Button onClick={clearFilter}> Clear All Filters</Button>
      </div>
    </Wrapper>
  );
};

export default FilterSection;

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 0.2s ease-in-out;

  .filter-search {
    input {
      padding: 1rem 2rem;
      outline: none;
      width: 90%;
      font-size: 1.2rem;

      transition: all 0.2s ease-in-out;
      &:focus,
      &:active,
      &hover {
        outline: 1px solid red;
      }
    }
  }
  .category-filter {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      button {
        border: none;
        text-align: left;
        text-transform: capitalize;
        background: none;
        margin: 0.2rem 1rem;
      }

      .active {
        color: white;
        background-color: #ad0303;
        padding: 0 0.5rem;
        border-radius: 0.5rem;
      }
    }
  }
  .company-filter {
    form > select {
      margin: 1rem 2rem;
      width: 10rem;
      text-transform: capitalize;

      font-size: 1.6rem;
    }
  }
  .colors-filter {
    .colors-btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      // gap: 2rem;
      .btnStyle {
        border: none;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        margin: 0.5rem;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
      .allbtn {
        border: none;
        background: none;
        margin-right: 0.5rem;
        &:hover {
          color: white;
          background-color: #ad0303;
          padding: 0 0.5rem;
          border-radius: 0.5rem;
        }
      }
      .activeAllBtn {
        color: white;
        background-color: #ad0303;
        padding: 0 0.5rem;
        border-radius: 0.5rem;
      }
      .active {
        opacity: 1;
      }
      .checkicon {
        color: #fff;
        font-size: 1.5rem;
      }
    }
  }
`;
