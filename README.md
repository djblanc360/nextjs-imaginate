# Project Title

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

1. Ensure that Node at least version 20 is installed and running
```
nvm use v20
node -v
```

2. Install Prisma and create a Prisma schema
```
npm install prisma @prisma/client
npx prisma init
```

3. Create and connect database in [Neon](https://neon.tech/docs/guides/prisma)
* enabled `Pooled connection`
* capture `DATABASE_URL` with Prisma >> .env
* show password before copying snippet

4. Run Prisma migrations
```
npx prisma migrate dev --name init
```

5. Install NextAuth.js and the necessary dependencies
```
npm install next-auth @next-auth/prisma-adapter
```

6. Set up NextAuth.js with Google Provider
* set authorized JavaScript origins to target domain, example `http://localhost:3000`
* set authorized redirect URIs to target domain, example `http://localhost:3000/api/auth/callback/google`

7. Generate secret for `NEXTAUTH_SECRET`
```
openssl rand -base64 32
```

8. The `.env` should have the following
```
DATABASE_URL=your_postgres_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_generated_secret
```

### Executing program

1. Run in development
```
npm run dev
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Potential Future Updates
* features to be added or desired

## Authors

* [@Daryl Blancaflor](djblanc360@gmail.com), formally dblancaflor@olukai.com

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

* [fireship](https://fireship.io/)