import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../ContextAPI/FilterContext";

const FilterSection = () => {
  const {
    filters: { text,category,company,color },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  // to get Unique Data
  const getUniqueData = (data, property) => {
    let NewData = data.map((ele) => {
      return ele[property];
    });
    NewData = ["All", ...new Set(NewData)];
    return NewData;
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  console.log(companyData)
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
                className={ele===category?"active":""}
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
            className=""
            onClick={updateFilterValue}
           >
            {
              companyData.map((ele)=>{
                return <option value={ele} name="company">{ele}</option>
              })
            }
            
            {/* <option value="highest">Price(highest)</option>
            
            <option value="a-z">Price(a-z)</option>
             <option value="z-a">Price(z-a)</option> */}
          </select>
        </form>
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
        text-transform:capitalize;
        background: none;
        margin: 0.7rem;
        
      }
      .active{
        border-bottom:2px solid #ad0303;
      }
    }
  }
`;
