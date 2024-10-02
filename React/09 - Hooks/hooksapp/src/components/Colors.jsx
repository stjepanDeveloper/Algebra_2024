export default function Colors(){
    return (
        <div>
            <h1>Colors</h1>
            <div style={{ background: 'blue', padding: '50px'}}
            onMouseOver={() => console.log('Entered blue')}
            onMouseLeave={() => console.log('Left blue')}
            onClick={() => alert('Clicked blue')}
            
            >
                <h2>Box 1</h2>
            </div>

            <div style={{ background: 'yellow', padding: '50px'}}>
                <h2>Box 2</h2>
            </div>

            <div style={{ background: 'green', padding: '50px'}}>
                <h2>Box 3</h2>
            </div>
        </div>
    )
}