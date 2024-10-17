"use client";

import Image from "next/image"
import { Box, Typography } from "@mui/material"
import CakeGrid from "@/common/components/CakeGrid";

export const Dashboard = () => {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    minHeight: '360px',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    fill
                    alt="Logo"
                    objectFit="cover"
                    src={"/assets/bolo.png"}
                />
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#00000080"
                    }}
                >
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        style={{
                            color: '#fff',
                            fontSize: '3rem',
                            textAlign: 'center',
                        }}
                    >
                        Bem-vindo ao Dashboard
                    </Typography>
                </div>
            </Box>
            <CakeGrid />
        </Box>
    )
}