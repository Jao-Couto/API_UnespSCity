const Images = require("../model/Images")
const aws = require("aws-sdk");
const { accessKeyId, secretAccessKey } = require("../../../../config");
const uuid = require("uuid")

aws.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: "sa-east-1"
})

const s3 = new aws.S3({ params: { Bucket: 'unesp-s-city' } });


module.exports = {
    name: "image-service",
    actions: {
        create: {
            params: {
                idObj: "string",
                images: "string",
            },
            async handler(ctx) {
                if (ctx.params) {
                    if (ctx.params.images && ctx.params.idObj) {
                        return await this.uploadToS3(ctx.params.images);
                        /*
                        return Images.create({
                            idObj: ctx.params.idObj,
                            imagesLink: ctx.params.images,
                        })*/
                    }
                }
                return false
            }
        },

        getAll: {
            async handler(ctx) {
                return await Images.find()
            }
        },
    },
    methods: {
        async uploadToS3(file) {
            const buffer = new Buffer.from(file, "base64");
            console.log(buffer);
            const name = uuid.v4() + "_foto.jpeg"
            const params = {
                Key: name,
                Body: buffer,
                ContentEncoding: 'base64',
                ContentType: 'image/jpeg',
                ACL: 'public-read'
            };
            return await new Promise(function (resolve, reject) {
                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log(err);
                        console.log('Error uploading data: ', params);
                    } else {
                        console.log('successfully uploaded the image!');
                        resolve(JSON.stringify(data))

                    }
                });
            });
        },
    }

}