import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Get all users');
}
);

router.post('/create', (req, res) => {
    res.send('Create a new user');
});

router.get('/receive/:id', (req, res) => {
    res.send(`Get user with id ${req.params.id}`);
}); 

router.delete('/delete/:id', (req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
});     


export default router;