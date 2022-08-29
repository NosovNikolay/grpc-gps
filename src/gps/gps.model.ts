import {Column, DataType, Model, Table} from "sequelize-typescript";
import {GPS} from "./dto/GPS.dto";

interface GPScreationAtts {
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
}

@Table({tableName: 'GPSInfo', updatedAt: false})
export class GPSInfo extends Model<GPSInfo, GPS> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    deviceId: number;

    @Column({type: DataType.FLOAT})
    lat: number;

    @Column({type: DataType.FLOAT})
    lon: number;

    @Column({type: DataType.FLOAT})
    alt: number;

    @Column({type: DataType.STRING})
    quality: string;

    @Column({type: DataType.INTEGER})
    satellites: number;

    @Column({type: DataType.FLOAT})
    hdop: number;

    @Column({type: DataType.INTEGER})
    geoidal: number;

    @Column({type: DataType.INTEGER})
    age: number;

    @Column({type: DataType.INTEGER})
    stationID: number;

    @Column({type: DataType.STRING})
    raw: string;

    @Column({type: DataType.STRING})
    type: string;
}
