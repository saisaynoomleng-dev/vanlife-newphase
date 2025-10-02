import { FaVanShuttle } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const vanType = defineType({
    name: "van",
    title: "Van",
    icon: FaVanShuttle,
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            initialValue: 50,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "Simple", value: "simple" },
                    { title: "Rugged", value: "rugged" },
                    { title: "Luxury", value: "luxury" },
                ],
                layout: "radio",
            },
            initialValue: "simple",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "desc",
            title: "Description",
            type: "text",
            description: "Descriptions help the van",
            validation: (rule) =>
                rule
                    .required()
                    .min(10)
                    .info(
                        "Description is needed to generate a page on the website"
                    ),
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    validation: (rule) =>
                        rule
                            .required()
                            .info(
                                "Alt text help screen readers and improve accessibility"
                            ),
                }),
            ],
        }),
    ],
    preview: {
        select: {
            name: "name",
            price: "price",
            type: "type",
            image: "mainImage",
        },
        prepare({ name, price, type, image }) {
            const nameFormatted = name ? name : "Untitled Van";
            const priceFormatted = price
                ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                  }).format(price)
                : "price not listed";
            return {
                title: nameFormatted,
                subtitle: `${priceFormatted} | Type: ${type}`,
                media: image || FaVanShuttle,
            };
        },
    },
});
