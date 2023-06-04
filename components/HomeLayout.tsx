
import { Card, Container, Image } from "react-bootstrap";

const HomeLayout = () => {
    return ( 
        <div className={``}>
            {/* <Card className="mb-5 bg-opacity-25 bg-info" >
                <Card.Body>
                    <Card.Title><h1>Welome to the NextJS News Page</h1></Card.Title>
                    <Card.Text>News websites can be intriguing to examine from a design perspective. 
                        Regardless of what type of news they cover, they all face the challenge of displaying a huge amount of content on the home page, which creates plenty of layout, usability and navigational challenges for the designer. 
                        The lessons that can be learned from examining how news websites address these challenges can be valuable for designers who work with other types of websites, including ones with blog theme designs.
                        
                    </Card.Text>
                </Card.Body>
            </Card> */}
            <Card className="mb-4 rounded ">
            <Card.Header>Next News Page</Card.Header>
                <Image
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                height={450}
                className="rounded "
                />
                
            </Card>
            
        </div>
     );
}
 
export default HomeLayout;