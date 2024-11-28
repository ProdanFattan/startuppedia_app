function SearchFormReset() {
    const reset = () =>{
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if(form){
            form.reset();
        }
    }
    return ( 
        <button type="reset" onClick={reset}>Submit</button>
     );
}

export default SearchFormReset;