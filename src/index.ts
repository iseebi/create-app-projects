import templates from "./templates";
import prompts = require("prompts");
import * as path from "path";
import { promises as fs, existsSync } from "fs";

const projectNamePattern = /^[a-z0-9-]+$/;

const getTemplatesPath = () => {
  if (typeof __dirname !== 'undefined') {
    return path.resolve(__dirname , "../templates");
  }
  if (process.argv.length >= 2) {
    return path.resolve(process.argv[1], "../templates");
  }
  throw new Error("Cannot find templates path");
};

const createDirectory = async (targetDir: string): Promise<void> => {
  if (existsSync(targetDir)) {
    throw new Error(`Directory ${targetDir} already exists`);
  }
  await fs.mkdir(targetDir, { recursive: true });
};

const copyFilesAndDirectories = async (sourceDir: string, targetDir: string) => {
  const entries = await fs.readdir(sourceDir);

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry);
    const destPath = path.join(targetDir, entry);

    const stat = await fs.lstat(sourcePath);

    if (stat.isDirectory()) {
      // Create the directory in the destination
      await fs.mkdir(destPath);

      // Recursively copy files and subdirectories
      await copyFilesAndDirectories(sourcePath, destPath);
    } else {
      // Copy the file
      await fs.copyFile(sourcePath, destPath);
    }
  }
};

const updateJson = async <T>(filePath: string, update: (json: T) => T) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data) as T;
    const updatedJson = update(json);
    await fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2), "utf-8");
  } catch (err) {
    throw new Error(`Failed to update ${filePath}: ${err}`);
  }
};

(async () => {
  try{
    const response = await prompts([
      {
        type: "select",
        name: "template",
        message: "Select template",
        choices: templates,
      },
      {
        type: "text",
        name: "projectName",
        message: "Enter your project name",
        initial: "my-project",
        format: (val: string) => val.toLowerCase().split(" ").join("-"),
        validate: (val: string) =>
          projectNamePattern.test(val)
            ? true
            : "Project name should not contain special characters except hyphen (-)",
      },
    ]);

    const { projectName, template } = response;
    const targetDir = path.resolve(process.cwd(), projectName);
    const sourceDir = path.resolve(getTemplatesPath(), template);

    // 目的のディレクトリを作る→テンプレートをコピーする
    await createDirectory(targetDir);
    await copyFilesAndDirectories(sourceDir, targetDir);

    // package.jsonのnameを変更する(テンプレートによってはスキップする)
    if (!template.skipPackageJsonUpdate) {
      await updateJson(path.join(targetDir, "package.json"), (json: { name: string }) => {
        json.name = projectName;
        return json;
      });
    }

    console.log(`Project ${projectName} created successfully`);
  }
  catch(err){
    console.log(err.message);
  }
})();
