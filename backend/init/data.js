import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Product from "../models/product.model.js"; // ensure extension .js

const MONGO_URI = "mongodb+srv://pavan:pavan123@cluster0.g8nubi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// connect to db
mongoose.connect(MONGO_URI);

const insertDummyData = async () => {
  try {
    console.log("🗑️ Clearing old data...");
    await Product.deleteMany({}); // remove all existing docs

    console.log("📦 Inserting fresh dummy data...");
    let products = [];

    for (let i = 0; i < 100; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: faker.image.url(),
      });
    }

    await Product.insertMany(products);
    console.log("🎉 Dummy data inserted successfully!");

  } catch (error) {
    console.error("❌ Error inserting dummy data:", error);
  } finally {
    mongoose.connection.close();
  }
};

insertDummyData();
