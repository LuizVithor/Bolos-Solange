import { Favorite, Share, ExpandMore } from '@mui/icons-material';
import { Box, Typography, Grid2, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';

interface CakeCardProps {
    title: string;
    imageUrl: string;
    description: string;
}

const CakeCard: React.FC<CakeCardProps> = ({ title, imageUrl, description }) => {
    return (
        <Card
            sx={{
                width: {
                    xs: "100%",
                    sm: 235,
                },
                borderRadius: 8,
            }}
            elevation={4}
        >
            <CardHeader
                avatar={
                    <Typography
                        variant="h6"
                        sx={{
                            backgroundColor: '#f44336',
                            borderRadius: '50%',
                            width: 40,
                            height: 40,
                            textAlign: 'center',
                            lineHeight: '40px',
                            fontSize: {
                                xs: '1rem'
                            },
                        }}
                    >
                        R
                    </Typography>
                }
                title={title}
                subheader="October 16, 2024"
                sx={{
                    color: 'primary',
                    '.MuiCardHeader-title': {
                        fontSize: {
                            xs: '1rem',
                        },
                    },
                    '.MuiCardHeader-subheader': {
                        fontSize: {
                            xs: '0.75rem',
                        },
                    },
                }}
            />
            <CardMedia
                component="img"
                sx={{
                    width: {
                        xs: "100%",
                        sm: 235
                    },
                    height: {
                        xs: 'auto',
                        sm: 235
                    },
                }}
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{
                        fontSize: {
                            xs: '0.875rem'
                        },
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite sx={{ color: 'primary' }} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share sx={{ color: 'primary' }} />
                </IconButton>
                <IconButton aria-label="show more">
                    <ExpandMore sx={{ color: 'primary' }} />
                </IconButton>
            </CardActions>
        </Card>
    );
};

const CakeGrid: React.FC = () => {

    const cakeImages = [
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
    ]

    return (
        <Box
            sx={{
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#e8ded3',
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    marginBottom: 4,
                    color: 'primary',
                    textDecoration: 'underline'
                }}
            >
                Nossos Bolos
            </Typography>
            <Grid2
                container
                justifyContent="center"
                sx={{
                    width: "100%",
                    display: "grid",
                    gridRowGap: "20px",
                    gridColumnGap: "10px",
                    gridTemplateRows: "auto",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                }}
            >
                {cakeImages?.map((imageUrl, index) => (
                    <Grid2 container justifyContent="center" alignItems="center" key={index}>
                        <CakeCard
                            imageUrl={imageUrl}
                            title="Delicious Cake"
                            description="A delicious cake from Unsplash"
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box >
    );
};


export default CakeGrid;