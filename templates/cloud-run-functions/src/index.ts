import type { HttpFunction } from "@google-cloud/functions-framework";

export const handler: HttpFunction = async (req, res) => {
	res.json({ message: "Hello, World!" });
};

