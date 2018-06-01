# Serverless example application

## Requirements
- node 8.x
- postgresql
- configured AWS account with access to lambda service

## Setup

```bash
# Setup app
npm install

# copy ENV defintion file and make own configuration
cp .env.example .env
```


## Testing

```bash
# external DB
lambda-local -f handler -e test/posts_from_pg.json

# mocked data
lambda-local -f handler -e test/posts.json
```
