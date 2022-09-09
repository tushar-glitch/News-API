import React, { useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Fetchnew = () => {
    const [article, setArticle] = useState([]);
    const Fetch = () => {
        axios.get(" https://newsapi.org/v2/top-headlines?country=in&apiKey=395fb863b82b47beb10be7d8fb8503a5")
            .then((response) => {
                setArticle(response.data.articles)
            })
    }
    return (
        <>
            <button onClick={Fetch}>Fetchnews</button>
            <div>
                {
                    article.map((value) => {
                        return (
                            <Card sx={{ maxWidth: 500 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={value.urlToImage}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {value.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {value.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Fetchnew
