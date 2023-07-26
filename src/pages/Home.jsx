import React, { useContext, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Form from "../components/Form";
import BanderaList from "../components/BanderaList";

const Home = () => {

    return (
        <main>
            <div>
                <section>
                    <div>
                        <h2>ReSize here</h2>
                    </div>
                </section>
               
            </div>
            <Box >
                <Form />

            </Box>
            <Box>
                <BanderaList />
            </Box>
        </main>
    );
};

export default Home;