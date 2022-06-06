export const Rick = () => {
    return <div>Rick</div>
}


import { Button, ImageList, ImageListItem, Zoom } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "react-async-image";
import useApi from "../../hooks";
import axios from "axios";
import { useEffect, useState } from "react";


    const { loading, data: images } = useApi(
        "https://rickandmortyapi.com/api/character"
    );

    if (loading) return <p>"Loading..."</p>;
    return (
        <Box sx={{ minHeight: 250 }}>
            <ImageList
                sx={{ width: "100%", height: 650 }}
                variant="quilted"
                cols={4}
                rowHeight={125}
            >


                {images.map((item: any) =>
                    {
                        const cols = Math.floor(Math.random() * 3);
                        return (
                            <Zoom
                                in
                                key={item.id}
                                style={{ transitionDelay: `${Math.random() * 300}ms` }}
                            >
                                <ImageListItem cols={cols} rows={cols}>

                                    <Image
                                        {...srcset(item.image, 125, cols, cols)}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                </ImageListItem>

                                export default function useApi(url: string)
                                {
                                    const [data, setData] = useState([]);
                                    const [error, setError] = useState(null);
                                    const [loading, setLoading] = useState(false);

                                    useEffect(() => {
                                    (async function () {
                                        try {
                                            setLoading(true);
                                            const response = await axios.get(url);
                                            setData(response.data.results);
                                        }

                                        catch (err: any) {
                                            setError(err);
                                        }

                                        finally {
                                            setLoading(false);
                                        }
                                    })();
                                    }, [url]);

                                    return { data, error, loading };
                                }
                    }
                }