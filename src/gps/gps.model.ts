import {Column, DataType, Model, Table} from "sequelize-typescript";

interface GPScreationAtts {

}

@Table({tableName: 'devices', updatedAt: false})
export class GPSInfo extends Model<GPSInfo, GPScreationAtts> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    deviceId: number;

    @Column ({type: DataType.DATE})
    createdAt: Date;

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