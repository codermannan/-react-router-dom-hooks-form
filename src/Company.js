import { useParams } from 'react-router-dom'
export const Company = () => {
    const params = useParams();
    //console.log(params);
    return (
        <div>
            <h2>Company</h2>
            <p>{params.name}</p>
        </div>
    )
    
}