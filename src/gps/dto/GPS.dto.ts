export type RESDto = {
    data: GPS,
    error: string[]
    status: number
}

export type REQDto = {
    gpsData: string,
    deviceId: number
}

export type DataArray = {
    data: GPS[],
    error: string[]
    status: number
}

export type GPS = {
    id: number;
    deviceId: number;
    lat: number;
    lon: number;
    alt: number;
    quality: string;
    satellites: number;
    hdop: number;
    geoidal: number;
    age: number;
    stationID: number;
    raw: string;
    type: string;
    createdAt: Date;
}
