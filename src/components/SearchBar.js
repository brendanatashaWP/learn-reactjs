import React from 'react'

const SearchBar = props  => {
    return (
        <div style={styles.contentSearch}>
            <input
                style = {styles.inputSearch}
                type="text" 
                placeholder="search by title"
                onChange={props.onChangeSearch}
            />
        </div>
    )
}

const styles = {
    inputSearch: {
      width: 500,
      height: 30
    },
    contentSearch: {
        backgroundColor: "#585481",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}

export default SearchBar
