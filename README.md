# Boilerplate Project - File Metadata Microservice

This project is part of the FreeCodeCamp certification in the **"Back End Development and APIs"** course.

## Description

The **File Metadata Microservice** is a Node.js application that allows users to upload a file and receive metadata such as the file name, size, and MIME type.

## Features

- File upload through an HTML form.
- JSON response containing file metadata, including:
  - `name`: the name of the file.
  - `type`: the MIME type of the file.
  - `size`: the size of the file in bytes.

## Live Project Link

- Deployment: [Live Application URL](https://your-deployment-link.com)
- GitHub Repository: [GitHub Repository Link](https://github.com/anrabearison/boilerplate-project-filemetadata)

## Usage Instructions

1. Visit the main page of the application.
2. Upload a file using the provided form.
3. Receive a JSON response with the file metadata, for example:

```json
{
  "name": "example.png",
  "type": "image/png",
  "size": 52345
}
