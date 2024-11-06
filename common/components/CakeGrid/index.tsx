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
        {
            title: "trufado",
            description: "Bolo trufado",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112733/20412_fotos_bolo_fatia_235x235px49.png",
        },
        {
            title: "Murango",
            description: "Bolo de morango",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/10/21135251/Bolo-morango-home-300x222.png",
        },
        {
            title: "Chocolate",
            description: "Bolo de chocolate",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2024/05/24181730/20412_delicia_de_chocolate_fatia_235x235px.png",
        },
        {
            title: "Chocorango",
            description: "Bolo de chocolate com morango",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2023/02/01101339/147_235px.png",
        },
        {
            title: "Abacoco",
            description: "Bolo de abacaxi com coco",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111106/37_abacaxi_coco_bolo-branco_fatia.png",
        },
        {
            title: "ninho",
            description: "Bolo de leite ninho",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111114/54_delicia-de-leite_ii_bolo-branco_fatia.png",
        },
        {
            title: "Beijinho",
            description: "Bolo de beijingo",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/10/24180424/20412_beijinho_fatia_235x235px.png",
        },
        {
            title: "NinhoNutella",
            description: "Bolo de ninho e nutella",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111031/92_delicia-de-leite_c-creme-de-avela_i_bolo-chocolate_fatia.png",
        },
        {
            title: "Prestigio",
            description: "Bolo de prestigio",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/28111011/14_delicia-de-coco_bolo-chocolate_fatia.png",
        },
        {
            title: "Maracuja",
            description: "Bolo de maracuja",
            imageUrl: "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/01110359/73_235px.png",
        },
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
                            title={imageUrl.title}
                            imageUrl={imageUrl.imageUrl}
                            description={imageUrl.description}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Box >
    );
};


export default CakeGrid;
