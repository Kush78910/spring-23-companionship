import React, {useState} from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const universities = [
        "University of Texas at Austin",
        "Texas A&M University",
        "University of Houston",
        "University of North Texas",
        "Texas State University",
        "Texas Tech University",
        "University of Texas at Arlington",
        "University of Texas at San Antonio",
        "Baylor University",
        "Sam Houston State University"
    ];
      
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    
    const filteredUniversities = universities.filter((university) => university.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div style = {{display: 'flex', flexDirection: 'column'}}>
            <input
            style = {{borderRadius: 16, padding: 10}} 
            type="text"
            placeholder=""
            onChange={handleChange}
            value={searchInput} 
            />
            <table>
                {filteredUniversities.map((university) => {
                return (
                    <div>
                        <tr>
                            <td>{university}</td>
                        </tr>
                    </div>)
                })}
            </table>
        </div>
    );
};

export default SearchBar;
