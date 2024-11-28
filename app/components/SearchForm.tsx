import Form from 'next/form'
function SearchForm() {
    return ( 
        <>
        <Form action="/" scroll={false} className='search-form'>
        <input name="query" defaultValue="" className='search-input' placeholder='Search Startups' />
        
        </Form>
        </>
     );
}

export default SearchForm;