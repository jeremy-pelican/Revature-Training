const ListShow = ({list}) => {
    return ( 
        <>
        {
            list.map((item)=>(
                <li key={item}>{item}</li>
            )) 
        }
        </>
     );
}
 
export default ListShow;