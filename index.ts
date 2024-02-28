import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { PrismaClient } from "@prisma/client"; 
import { title } from "process";

const prisma = new PrismaClient();

async function main() {
    // Create User

    // const user = await prisma.user.create({
    //     data: {
    //         name: 'HariBabu',
    //         email: 'hari@email.com',
    //     },
    // });

    //multiple rows insertion

    // const data = [
    //     {
    //         name: 'Hari1',
    //         email: 'hari1@email.com',
    //     },
    //     {
    //         name: 'Hari2',
    //         email: 'hari2@email.com',
    //     },
    //     {
    //         name: 'Hari2',
    //         email: 'hari2@email.com',
    //     }
    // ] ;

    // await prisma.user.createMany({
    //     data,
    // });

    //  Get all Users

     //const users = await prisma.user.findMany();
    //test 
    // const currentUserEmail = users[1].email;
    // if (currentUserEmail === users[0].email) {
    //     console.log(currentUserEmail);
    // }
    // else {
    //     console.log('Bad Email');
    // };
   
    //Create article associated with user

    // const article = await prisma.article.create({
    //     data: {
    //         title: 'John First Article',
    //         body: 'This is Johns first article',
    //         author: {
    //             connect: {
    //                 id:1,
    //             },
    //         },
    //     },
    // });

    //Get Articles
    // const articles = await prisma.article.findMany();
    // console.log(articles);

    //Create user and article together
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Hari3',
    //         email: 'hari3@email.com',
    //         articles: {
    //             create: {
    //                 title: 'developer',
    //                 body: 'first dev'
    //             },
    //         },
    //     },
    // });

    // console.log ('User Details: ', user);
    //   const articles = await prisma.article.findMany();
    // console.log('articles: ' , articles);

    // // Get both user and article details
    //     const users = await prisma.user.findMany({
    //         include: {
    //             articles: true
    //         },
    //     });

    //     users.forEach((user) => {
    //         console.log(`User: ${user.name}, ${user.email}`);
    //         console.log('Articles:');
    //         user.articles.forEach((article) => {
    //             console.log(` -- Title: ${article.title}, ${article.body}`);
    //         })
    //         console.log('\n');
    //     });

    //Update Data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1,
    //     },
    //     data: {
    //         name: 'This is john updated data',
    //     },
    // });
    //  console.log(user);
    // //Delete User
    //     const user= await prisma.user.delete({
    //         where: {
    //             id:1
    //         },
    //         include: {
    //             articles: true,
    //         },
          
    //     });

    // console.log(user);

    // const user2 = await prisma.user.findFirst({
    //     where: {
    //         id: 2,
    //     },
    // });
        
    // console.log(user2);
    // console.log (users);

    // Remove Articles

    //Delete article
        const article = await prisma.article.delete({
            where: {
                id:1
            }
        });

    console.log(article);

};

main()
.then(async () => {
    await prisma.$disconnect();
})

.catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
    
});