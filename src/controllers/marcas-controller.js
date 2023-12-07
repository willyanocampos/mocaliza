/* eslint-disable no-undef */
const { Marca } = require('../models/marca');


class MarcaController {
    async index() {
        return await Marca.findAll();
    }

    async show(id) {
        return await Marca.findOne({ 
            where: {
                id: id
            }
        });
    }

    async store(marcaDto) {
        const marca = await Marca.create(marcaDto);

        marca.save();

        return marca;
    }

    async update(id, marcaDto) {
        const marca = await Marca.findOne({ 
            where: {
                id: id
            }
        });

        if (!marca) {
            throw Error("Marca não encontrada!");
        }
        console.log(marca);
        marca.name = marcaDto.name;

        marca.save();

        return marca;
    }

    async destroy(id) {
        const marca = await Marca.findOne({ 
            where: {
                id: id
            }
        });

        if (!marca) {
            throw Error("Marca não encontrada!");
        }

        marca.destroy();
    }
}

module.exports = { MarcaController };
