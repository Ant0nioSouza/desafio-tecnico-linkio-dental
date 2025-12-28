import { app } from './app';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

bootstrap();