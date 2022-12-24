const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_DATA":
      let priceArr = [];
      action.payload.map((ele) => {
        return priceArr.push(ele.price);
      });
      const MaxPrice = Math.max(...priceArr);
      const MinPrice = Math.min(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: MaxPrice,
          price: MaxPrice,
          minPrice: MinPrice,
        },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: action.payload,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortData.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "UPDATE_FILTER_DATA":
      const { all_products } = state;
      let tempFilterData = [...all_products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterData = tempFilterData.filter((ele) => {
          return ele.name.toLowerCase().includes(text);
        });
      }

      if (category) {
        if (category === "All") {
          tempFilterData = tempFilterData;
        } else {
          tempFilterData = tempFilterData.filter((ele) => {
            return ele.category === category;
          });
        }
      }
      if (company) {
        if (company === "All") {
          tempFilterData = tempFilterData;
        } else {
          tempFilterData = tempFilterData.filter((ele) => {
            return ele.company.toLowerCase() === company.toLowerCase();
          });
        }
      }
      if (color !== "All") {
        tempFilterData = tempFilterData.filter((ele) => {
          return ele.colors.includes(color);
        });
      }
      if (price) {
        tempFilterData = tempFilterData.filter((ele) => {
          return ele.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterData,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
