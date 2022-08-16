const Praca = require("../model/Praca")
const aws = require("aws-sdk")

const s3 = new aws.S3();


module.exports = {
    name: "praca-service",
    aliases: {
        "POST /api/praca"(req, response) {
            const ref = this;
            const file = req.images;
            return ref.broker.call("praca-service.uploadFile", { file })
                .then(res => {
                    ref.logger.info("File uploaded successfully!", res);
                    response.end(res);
                })
                .catch(err => {
                    ref.logger.error("File upload error!", err);
                    ref.sendError(req, res, err);
                });
        },
    },
    actions: {
        create: {
            params: {
                /*
                name: "string",
                street: "string",
                number: "number",
                cityId: "number",
                latitude: "string",
                longitude: "string",
                description: "string",
*/
            },
            async handler(ctx) {
                console.log("entrou1");
                this.uploadToS3(images);/*
                if (ctx.params) {
                    if (ctx.params.name && ctx.params.street && ctx.params.number && ctx.params.cityId && ctx.params.latitude && ctx.params.longitude && ctx.params.description && ctx.params.images) {
                        console.log("chegou");
                        upload.single(ctx.params.images)
                        console.log("passou");
                        return Praca.create({
                            name: ctx.params.name,
                            street: ctx.params.street,
                            number: ctx.params.number,
                            cityId: ctx.params.cityId,
                            latitude: ctx.params.latitude,
                            longitude: ctx.params.longitude,
                            description: ctx.params.description,
                            isResolved: false
                        })
                    }
                }*/
                return false
            }
        },

        getAll: {
            async handler(ctx) {
                return await Praca.find()
            }
        },

        exists: {
            async handler(ctx) {
                if (ctx.params && ctx.params.id) {
                    return await Praca.exists({ _id: ctx.params.id })
                }
                return false
            }
        },
    },
    methods: {
        uploadToS3(file) {
            aws.config.update({
                accessKeyId: "AKIA2TVEUQCWKOA2J5MW",
                secretAccessKey: "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",
                region: "sa-east-1"
            })
            const buffer = new Buffer.from(file, "base64");
            const name = file.substring(0, 20)
            const key = `praca-service/${name}`;
            const params = {
                Bucket: "unesp-s-city",
                Key: key,
                Body: buffer,
            };

            return new Promise(function (resolve, reject) {
                s3.createBucket(function () {
                    s3.upload(params, function (err, data) {
                        if (err) {
                            console.log('error in callback');
                            console.log(err);
                        }
                        resolve(JSON.stringify(data));
                    });
                })
            });
        },
    }

}