import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const user1 = await prisma.user.create({
        data: {
                name: "Harkirat",
            }
    
    })
    console.log(user1)
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})
.finally(() => prisma.$disconnect())